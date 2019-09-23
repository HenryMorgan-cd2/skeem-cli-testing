"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Line_1 = require("../Line");
class CollapsibleLine extends Line_1.Line {
    constructor(opts) {
        super();
        this.open = false;
        this.text = opts.text;
        this.children = [...opts.lines];
        this.open = opts.defaultOpen || false;
    }
    handleInput(key) {
        if (key.name === "return") {
            this.open = !this.open;
            this.changed = true;
        }
        this.children.forEach(child => (child.hidden = !this.open));
    }
    onAfterMount() {
        this.children.forEach(child => (child.hidden = !this.open));
    }
    onHiddenChange(hidden) {
        if (hidden) {
            this.children.forEach(child => (child.hidden = hidden));
        }
    }
    render() {
        return `${this.text}[${this.open ? "-" : "+"}]`;
    }
}
exports.CollapsibleLine = CollapsibleLine;
