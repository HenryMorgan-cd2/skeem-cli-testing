"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Line_1 = require("../Line");
const utils_1 = require("../utils");
const ModelLine_1 = require("./ModelLine");
const Cli_1 = require("../Cli");
class AttributeLine extends Line_1.Line {
    constructor(model, attribute) {
        super();
        this.model = model;
        this.attribute = attribute;
    }
    handleInput(key) {
        if (this.attribute.type === "association") {
            if (key.name === "return") {
                const modelLine = this.cli.lines.find(line => line instanceof ModelLine_1.ModelLine && line.model.name === this.attribute.data.model);
                this.cli.setState({ query: "" });
                this.cli.setActiveLine(modelLine, { scroll: "middle" });
            }
        }
    }
    render() {
        const match = this.getMatchingThing();
        const name = match ? match[1] : this.attribute.name;
        return `    ${name} (${this.attribute.type})`;
    }
    onGlobalStateChange() {
        if (this.cli.globalState.query && this.getMatchingThing()) {
            this.hidden = false;
        }
        else {
            this.hidden = true;
        }
    }
    getMatchingThing() {
        Cli_1.debugLog(this.cli.globalState.query, [this.model.name, this.attribute.name], utils_1.matches([this.model.name, this.attribute.name], this.cli.globalState.query));
        return utils_1.matches([this.model.name, this.attribute.name], this.cli.globalState.query);
    }
}
exports.AttributeLine = AttributeLine;
