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
    constructor(props, state) {
        this.isActive = false;
        this.props = props;
        this.state = state;
    }
    setActive(state) {
        this.isActive = state;
    }
    setState(newState) {
        this.state = newState;
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
        this.states = [];
        this.lines = lines;
        this.clearScreen = clearScreen;
        this.debug = debug;
    }
    get height() {
        return this.debug ? process.stdout.rows - 5 : process.stdout.rows;
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
        else if (this.activeLineIndex >= this.renderLength()) {
            this.activeLineIndex = this.renderLength() - 1;
        }
        // update which line is active
        this.buildOutput()
            .lines.filter(line => line.setActive)
            .forEach((line, i) => line.setActive(false));
        const newCurrent = this.buildOutput().lines[this.activeLineIndex];
        if (newCurrent.setActive) {
            newCurrent.setActive(true);
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
        if (this.scrollPos > this.renderLength()) {
            this.scrollPos = this.renderLength() - this.height;
        }
        if (this.scrollPos < 0) {
            this.scrollPos = 0;
        }
    }
    setActiveLine(line) {
        const idx = this.buildOutput().lines.indexOf(line);
        if (idx === -1) {
            throw "that line is not on the screen";
        }
        else {
            this.changeActiveLineIndex(idx, { scroll: "middle" });
        }
    }
    // addLinesAfter(line: Line, lines: Line[]) {
    //   const idx = this.lines.indexOf(line)
    //   if (idx === -1) {
    //     throw "that line is not on the screen"
    //   } else {
    //     lines.forEach((line, i) => {
    //       this.addLine(line, idx + i + 1)
    //     })
    //   }
    // }
    // addLine(line: Line, index: number) {
    //   if (this.lines.includes(line)) {
    //     throw "trying to add line that is already mounted"
    //   }
    //   this.registerLines([line])
    //   this.lines.splice(index, 0, line)
    //   line.onAfterMount()
    // }
    // removeLines(lines: Line[]) {
    //   lines.forEach(line => {
    //     this.removeLine(line)
    //   })
    // }
    // removeLine(line: Line) {
    //   const idx = this.lines.indexOf(line)
    //   if (idx > -1) {
    //     line.onUnmount()
    //     this.lines.splice(idx, 1)
    //   }
    // }
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
            const line = this.buildOutput().lines[this.activeLineIndex];
            if (line.handleInput) {
                line.handleInput(key);
            }
        }
        this.renderScreen();
    }
    renderLength() {
        return this.buildOutput().content.length;
    }
    buildOutput(components = this.lines, initialIndex = 0) {
        const renderedComponents = [];
        const output = [];
        let i = initialIndex;
        components.map((component) => {
            // if (typeof component === 'object') {
            // }
            const state = this.states[i] || {};
            const instance = new component.type(component.props, state);
            instance.setState = newState => {
                console.log("SETTING STATE");
                debug("SET STATE", newState);
                this.states[i] = newState;
                this.renderScreen();
            };
            if (!instance.render) {
                throw "line must define a render method";
            }
            const content = instance.render();
            const contentArr = Array.isArray(content) ? content : [content];
            contentArr.forEach(l => {
                if (typeof l === "string") {
                    renderedComponents.push(component);
                    const text = `${i === this.activeLineIndex ? "> " : "  "}${l}`;
                    i++;
                    output.push(text);
                }
                else {
                    renderedComponents.push(component);
                    const children = this.buildOutput([l], i);
                    i += children.content.length;
                    output.push(...children.content);
                    renderedComponents.push(...children.lines);
                }
            });
            // cursor.write(i + this.scrollPos === this.activeLineIndex ? "> " : "  ")
        });
        return { lines: renderedComponents, content: output };
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
        console.log(Math.random());
        const output = this.buildOutput();
        output.content.slice(this.scrollPos, this.scrollPos + this.height).forEach(line => {
            console.log(line);
        });
        if (this.debug) {
            console.log();
            console.log();
            console.log({
                height: this.height,
                scroll: this.scrollPos,
                index: this.activeLineIndex,
                total: this.renderLength(),
                output,
                states: this.states
            });
        }
    }
}
exports.Cli = Cli;
