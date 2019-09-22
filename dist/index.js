"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const ansi_1 = __importDefault(require("ansi"));
const chalk_1 = __importDefault(require("chalk"));
const schema_1 = require("./schema");
const json_stringify_pretty_compact_1 = __importDefault(require("json-stringify-pretty-compact"));
/////////////
const Cli_1 = require("./Cli");
class HrLine extends Cli_1.Line {
    render() {
        return `---------------`;
    }
}
class TextLine extends Cli_1.Line {
    constructor(text) {
        super();
        this.text = text;
    }
    render() {
        return this.text;
    }
}
class JsonLine extends TextLine {
    constructor(scope, opts) {
        super(json_stringify_pretty_compact_1.default(scope)
            .split("\n")
            .map(line => `${" ".repeat(opts.indent || 0)}${line}`)
            .join("\n"));
        this.scope = scope;
    }
}
class CollapsibleLine extends Cli_1.Line {
    constructor(opts) {
        super();
        this.open = false;
        this.text = opts.text;
        this.lines = opts.lines;
        this.open = opts.defaultOpen || false;
    }
    handleInput(key) {
        if (key.name === "return") {
            this.open = !this.open;
        }
        if (this.open) {
            this.cli.addLinesAfter(this, this.lines);
        }
        else {
            this.cli.removeLines(this.lines);
        }
    }
    onAfterMount() {
        if (this.open) {
            this.cli.addLinesAfter(this, this.lines);
        }
    }
    onUnmount() {
        this.cli.removeLines(this.lines);
    }
    render() {
        return `${this.text}[${this.open ? "-" : "+"}]`;
    }
}
///////////
class InputLine extends Cli_1.Line {
    constructor(prompt) {
        super();
        this.input = "";
        this.prompt = prompt;
    }
    handleInput(key) {
        if (key.name === "backspace") {
            this.input = this.input.slice(0, -1);
        }
        else if (key.isChar) {
            this.input += key.str;
        }
    }
    render() {
        const prompt = this.isActive ? chalk_1.default.bgWhite(chalk_1.default.black(this.prompt)) : this.prompt;
        return `${prompt}: ${this.input}`;
    }
}
class ModelLine extends CollapsibleLine {
    constructor(model) {
        super({
            text: model.name,
            lines: [
                new CollapsibleLine({
                    text: `  attributes (${model.attributes.length})`,
                    lines: model.attributes.map(attribute => new AttributeLine(attribute))
                }),
                new CollapsibleLine({
                    text: `  scopes (${model.scopes.length})`,
                    lines: model.scopes.map(scope => new ScopeLine(scope))
                }),
                new CollapsibleLine({ text: "  permissions", lines: [] })
            ]
        });
        this.attributeLines = [];
        this.headingLines = [];
        this.model = model;
    }
}
class AttributeLine extends Cli_1.Line {
    constructor(attribute) {
        super();
        this.attribute = attribute;
    }
    handleInput(key) {
        if (key.name === "return") {
            const modelLine = this.cli.lines.find(line => line instanceof ModelLine && line.model.name === this.attribute.data.model);
            this.cli.setActiveLine(modelLine);
        }
    }
    render() {
        return `    ${chalk_1.default.cyan(this.attribute.name)} (${this.attribute.type})`;
    }
}
class ScopeLine extends Cli_1.Line {
    constructor(scope) {
        super();
        this.scope = scope;
    }
    onAfterMount() {
        const text = `
${json_stringify_pretty_compact_1.default(this.scope.params)}
${json_stringify_pretty_compact_1.default(this.scope.query)}
    `.trim();
        this.lines = text.split("\n").map(line => new TextLine(line));
        this.cli.addLinesAfter(this, this.lines);
    }
    onUnmount() {
        this.cli.removeLines(this.lines);
    }
    render() {
        return `    ${chalk_1.default.cyan(this.scope.name)}`;
    }
}
//////
const cli = new Cli_1.Cli({
    debug: true,
    lines: [
        ...schema_1.schema.models.sort((a, b) => (a.name < b.name ? -1 : 1)).map(model => new ModelLine(model)),
        new HrLine(),
        new InputLine(`Query`)
    ]
});
cli.renderScreen();
readline_1.default.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
const cursor = ansi_1.default(process.stdout);
cursor.hide();
process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === "c") {
        process.exit();
    }
    else {
        cli.handleKeyPress(str, key);
    }
});
