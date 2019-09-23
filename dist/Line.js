"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cli_1 = require("./Cli");
class Line {
    constructor() {
        this.key = Cli_1.getKey();
        this.isActive = false;
        this._children = [];
        this.changed = true;
        this._hidden = false;
    }
    setActive(state) {
        this.isActive = state;
        this.changed = true;
    }
    handleInput(key) { }
    onAfterMount() { }
    onGlobalStateChange(newState) { }
    get context() {
        return this.cli.globalState;
    }
    get hidden() {
        return (this !== this.cli.activeLine && (this._hidden && this.children.every(child => child.hidden)));
    }
    set hidden(newVal) {
        this._hidden = newVal;
        this.onHiddenChange(newVal);
    }
    onHiddenChange(hidden) { }
    toJSON() {
        return `${this.constructor.name} ${this.key}`;
    }
    set children(val) {
        val.forEach(line => (line.parent = this));
        this._children = val;
    }
    get children() {
        return this._children;
    }
}
exports.Line = Line;
