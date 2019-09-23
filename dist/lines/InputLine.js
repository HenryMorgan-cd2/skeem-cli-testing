"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const Line_1 = require("../Line");
///////////
class InputLine extends Line_1.Line {
    constructor(prompt, field) {
        super();
        this.prompt = prompt;
        this.field = field;
    }
    handleInput(key) {
        if (key.name === "backspace") {
            this.value = this.value.slice(0, -1);
        }
        else if (key.isChar) {
            this.value += key.str;
        }
        this.changed = true;
    }
    get value() {
        return this.context[this.field] || "";
    }
    set value(newVal) {
        this.cli.setState({ [this.field]: newVal });
    }
    render() {
        const prompt = this.isActive ? chalk_1.default.bgWhite(chalk_1.default.black(this.prompt)) : this.prompt;
        return `${prompt}: ${this.value}`;
    }
}
exports.InputLine = InputLine;
