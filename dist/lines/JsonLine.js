"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const json_stringify_pretty_compact_1 = __importDefault(require("json-stringify-pretty-compact"));
const Line_1 = require("../Line");
const TextLine_1 = require("./TextLine");
class JsonLine extends Line_1.Line {
    constructor(obj, opts) {
        super();
        this.obj = obj;
        this.lines = json_stringify_pretty_compact_1.default(obj || {})
            .split("\n")
            .map(line => `${" ".repeat(opts.indent || 0)}${line}`)
            .map(text => new TextLine_1.TextLine(text));
        this.children = this.lines.slice(1);
    }
    onAfterMount() {
        this.children.forEach(child => (child.hidden = this.hidden));
    }
    onHiddenChange(hidden) {
        this.children.forEach(child => (child.hidden = hidden));
    }
    render() {
        return this.lines[0].render();
    }
}
exports.JsonLine = JsonLine;
