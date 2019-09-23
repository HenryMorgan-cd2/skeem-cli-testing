"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const json_stringify_pretty_compact_1 = __importDefault(require("json-stringify-pretty-compact"));
const Line_1 = require("../Line");
const TextLine_1 = require("./TextLine");
const JsonLine_1 = require("./JsonLine");
class ScopeLine extends Line_1.Line {
    constructor(scope) {
        super();
        this.scope = scope;
        const text = `
  ${json_stringify_pretty_compact_1.default(this.scope.params)}
  ${json_stringify_pretty_compact_1.default(this.scope.query)}
    `.trim();
        let children = [];
        if (this.scope.params && this.scope.params.length) {
            children.push(new TextLine_1.TextLine("      Params: "));
            children.push(new JsonLine_1.JsonLine(this.scope.params, { indent: 8 }));
        }
        children.push(new TextLine_1.TextLine("      Query: "));
        children.push(new JsonLine_1.JsonLine(this.scope.query, { indent: 8 }));
        this.children = children;
    }
    onAfterMount() {
        this.children.forEach(child => (child.hidden = this.hidden));
    }
    onHiddenChange(hidden) {
        this.children.forEach(child => (child.hidden = hidden));
    }
    render() {
        return `    ${chalk_1.default.cyan(this.scope.name)}`;
    }
}
exports.ScopeLine = ScopeLine;
