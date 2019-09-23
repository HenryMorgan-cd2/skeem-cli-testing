"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ScopeLine_1 = require("./ScopeLine");
const AttributeLine_1 = require("./lines/AttributeLine");
const index_1 = require("./index");
const JsonLine_1 = require("./lines/JsonLine");
const CollapsibleLine_1 = require("./lines/CollapsibleLine");
class ModelLine extends CollapsibleLine_1.CollapsibleLine {
    constructor(model) {
        super({
            text: model.name,
            lines: [
                new CollapsibleLine_1.CollapsibleLine({
                    text: `  attributes (${model.attributes.length})`,
                    lines: model.attributes.map(attribute => new AttributeLine_1.AttributeLine(attribute))
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
        return index_1.highlight(super.render(), this.cli.globalState.query);
    }
    onGlobalStateChange(newState) {
        if (this.model.name.includes(newState.query) ||
            JSON.stringify(this.model.attributes).includes(newState)) {
            this.hidden = false;
        }
        else {
            this.hidden = true;
        }
    }
}
exports.ModelLine = ModelLine;
