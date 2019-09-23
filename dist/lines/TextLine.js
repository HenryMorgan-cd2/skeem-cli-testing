"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Line_1 = require("../Line");
class TextLine extends Line_1.Line {
    constructor(text) {
        super();
        this.text = text;
    }
    render() {
        return this.text;
    }
}
exports.TextLine = TextLine;
