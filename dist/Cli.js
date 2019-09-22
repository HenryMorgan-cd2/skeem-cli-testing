"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ansi_1 = __importDefault(require("ansi"));
const fs_1 = require("fs");
const cursor = ansi_1.default(process.stdout);
const debug = (...data) => fs_1.appendFileSync("./debug.txt", `${JSON.stringify(data)}\n`);
fs_1.writeFileSync("./debug.txt", ``);
class Line {
    constructor() {
        this.isActive = false;
    }
    setActive(state) {
        this.isActive = state;
    }
    handleInput(key) { }
    onAfterMount() { }
    onUnmount() { }
}
exports.Line = Line;
class Cli {
    constructor({ debug = false, clearScreen = true, lines = [] }) {
        this.lines = [];
        this.activeLineIndex = 0;
        this.scrollPos = 0;
        this.registerLines(lines);
        this.lines = lines;
        this.clearScreen = clearScreen;
        this.debug = debug;
    }
    get height() {
        return this.debug ? process.stdout.rows - 5 : process.stdout.rows;
    }
    registerLines(lines) {
        lines.forEach(line => (line.cli = this));
    }
    moveActiveLine(delta) {
        this.changeActiveLineIndex(this.activeLineIndex + delta);
    }
    changeActiveLineIndex(to, opts = {}) {
        this.activeLineIndex = to;
        // clamp index between 0 and line
        if (this.activeLineIndex < 0) {
            this.activeLineIndex = 0;
        }
        else if (this.activeLineIndex >= this.lines.length) {
            this.activeLineIndex = this.lines.length - 1;
        }
        // update which line is active
        this.lines.filter(line => line.setActive).forEach((line, i) => line.setActive(false));
        const newCurrent = this.lines[this.activeLineIndex];
        if (newCurrent.setActive) {
            this.lines[this.activeLineIndex].setActive(true);
        }
        const scrollTop = this.scrollPos;
        const scrollBottom = this.scrollPos + this.height - 1;
        debug("checking scroll");
        //set scroll position
        if (opts.scroll === "middle") {
            this.scrollPos = this.activeLineIndex - this.height / 2;
        }
        else {
            if (scrollTop > this.activeLineIndex) {
                debug("scrolling up");
                this.scrollPos = this.activeLineIndex;
            }
            else if (scrollBottom < this.activeLineIndex) {
                debug("scrolling down", this.scrollPos, this.activeLineIndex);
                this.scrollPos = this.activeLineIndex - this.height + 1;
            }
        }
        // clamp scrolling
        if (this.scrollPos > this.lines.length) {
            this.scrollPos = this.lines.length - this.height;
        }
        if (this.scrollPos < 0) {
            this.scrollPos = 0;
        }
    }
    setActiveLine(line) {
        const idx = this.lines.indexOf(line);
        if (idx === -1) {
            throw "that line is not on the screen";
        }
        else {
            this.changeActiveLineIndex(idx, { scroll: "middle" });
        }
    }
    addLinesAfter(line, lines) {
        const idx = this.lines.indexOf(line);
        if (idx === -1) {
            throw "that line is not on the screen";
        }
        else {
            lines.forEach((line, i) => {
                this.addLine(line, idx + i + 1);
            });
        }
    }
    addLine(line, index) {
        if (this.lines.includes(line)) {
            throw "trying to add line that is already mounted";
        }
        this.registerLines([line]);
        this.lines.splice(index, 0, line);
        line.onAfterMount();
    }
    removeLines(lines) {
        lines.forEach(line => {
            this.removeLine(line);
        });
    }
    removeLine(line) {
        const idx = this.lines.indexOf(line);
        if (idx > -1) {
            line.onUnmount();
            this.lines.splice(idx, 1);
        }
    }
    handleKeyPress(str, key) {
        key.isChar = key.sequence.length === 1 && (key.name === undefined || key.name.length === 1);
        key.str = str;
        if (key.name === "up") {
            this.moveActiveLine(-1);
        }
        else if (key.name === "down") {
            this.moveActiveLine(1);
        }
        else {
            const line = this.lines[this.activeLineIndex];
            if (line.handleInput) {
                line.handleInput(key);
            }
        }
        this.renderScreen();
    }
    renderScreen() {
        if (this.clearScreen) {
            console.clear();
            process.stdout.write("\x1b[3J");
        }
        else {
            console.log();
            console.log(" ============================================ ");
            console.log();
        }
        const linesToRender = this.lines.slice(this.scrollPos, this.scrollPos + this.height);
        linesToRender.map((line, i) => {
            if (i + this.scrollPos === this.activeLineIndex) {
                cursor.write("> ");
            }
            else {
                cursor.write("  ");
            }
            if (line.render) {
                const content = line.render();
                console.log(line.render());
            }
            else {
                throw "line must define a render method";
            }
        });
        if (this.debug) {
            console.log();
            console.log();
            console.log({ scroll: this.scrollPos, index: this.activeLineIndex });
        }
    }
}
exports.Cli = Cli;
