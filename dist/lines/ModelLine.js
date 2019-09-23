"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ScopeLine_1 = require("./ScopeLine");
const AttributeLine_1 = require("./AttributeLine");
const utils_1 = require("../utils");
const JsonLine_1 = require("./JsonLine");
const CollapsibleLine_1 = require("./CollapsibleLine");
const chalk_1 = __importDefault(require("chalk"));
class ModelLine extends CollapsibleLine_1.CollapsibleLine {
    constructor(model) {
        super({
            text: model.name,
            lines: [
                new CollapsibleLine_1.CollapsibleLine({
                    text: `  attributes (${model.attributes.length}) `,
                    lines: model.attributes.map(attribute => new AttributeLine_1.AttributeLine(model, attribute))
                }),
                new CollapsibleLine_1.CollapsibleLine({
                    text: `  scopes (${model.scopes.length})`,
                    lines: model.scopes.map(scope => new ScopeLine_1.ScopeLine(scope))
                }),
                new CollapsibleLine_1.CollapsibleLine({
                    text: "  permissions",
                    lines: [new JsonLine_1.JsonLine(model.permissions, { indent: 4 })]
                })
            ]
        });
        this.model = model;
    }
    render() {
        const match = this.getMatchingThing();
        if (match) {
            return `${chalk_1.default.green(match[0])}[${this.open ? "-" : "+"}]`;
        }
        else {
            return super.render();
        }
        // return highlight(chalk.green(super.render()), this.cli.globalState.query)
    }
    onGlobalStateChange(newState) {
        if (this.getMatchingThing()) {
            this.hidden = false;
        }
        else {
            this.hidden = true;
        }
    }
    getMatchingThing() {
        return this.searchList()
            .map(item => utils_1.matches(item, this.cli.globalState.query))
            .filter(Boolean)[0];
    }
    searchList() {
        const list = [];
        this.model.attributes.forEach(attr => {
            list.push([this.model.name, attr.name]);
        });
        this.model.scopes.forEach(scope => {
            list.push([this.model.name, scope.name]);
        });
        return list;
    }
}
exports.ModelLine = ModelLine;
function simpleMatch(x, y) {
    return x[0].includes(y);
}
