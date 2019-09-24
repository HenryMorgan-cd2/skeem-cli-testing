"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BufferedLogger_1 = require("./BufferedLogger");
const Cli_1 = require("./Cli");
const chalk_1 = __importDefault(require("chalk"));
class SimpleSchemaViewer {
    constructor(schema) {
        this.query = "";
        this.logger = new BufferedLogger_1.BufferedLogger();
        this.activeLineIndex = 0;
        this.openKeys = {};
        this.schema = schema;
        this.activeLineIndex = 0;
    }
    handleKeyPress(str, key) {
        key.isChar = key.sequence.length === 1 && (key.name === undefined || key.name.length === 1);
        key.str = str;
        if (key.name === "up") {
            this.activeLineIndex--;
            if (this.activeLineIndex < 0) {
                this.activeLineIndex = this.lines.length - 1;
            }
        }
        else if (key.name === "down") {
            this.activeLineIndex++;
            if (this.activeLineIndex >= this.lines.length) {
                this.activeLineIndex = 0;
            }
        }
        else if (key.name === "pageup") {
            this.activeLineIndex = 0;
        }
        else if (key.name === "pagedown") {
            this.activeLineIndex = this.lines.length - 1;
        }
        else if (key.name === "return") {
            const line = this.lines[this.activeLineIndex];
            if (line.handleSelect) {
                line.handleSelect();
            }
            else {
                this.toggleOpen(this.lines[this.activeLineIndex].key);
            }
        }
        else {
            if (key.name === "backspace") {
                this.query = this.query.slice(0, -1);
            }
            else if (key.isChar) {
                this.query += key.str;
            }
        }
        // debugLog("want to render")
        this.reRender();
    }
    isOpen(key) {
        return this.openKeys[key] || false;
    }
    toggleOpen(key) {
        this.openKeys[key] = !this.openKeys[key];
        this.reRender();
    }
    get lines() {
        let filteredSchema = this.schema;
        if (this.query) {
            filteredSchema = {
                ...this.schema,
                models: this.schema.models
                    .filter(model => {
                    return (model.name.includes(this.query) ||
                        model.attributes.some(attr => attr.name.includes(this.query)));
                })
                    .map(model => ({
                    ...model,
                    attributes: model.attributes.filter(attr => attr.name.includes(this.query))
                }))
            };
        }
        const lines = [];
        filteredSchema.models.forEach(model => {
            const modelAttrKey = `${model.name}_attributes`;
            const isModelOpen = this.query || this.isOpen(model.name);
            if (isModelOpen) {
                lines.push({ key: model.name, text: ` v ${model.name}` });
                if (this.query || this.isOpen(modelAttrKey)) {
                    lines.push({ key: modelAttrKey, text: `  v attributes` });
                    model.attributes.forEach(attr => {
                        lines.push({
                            handleSelect: () => {
                                Cli_1.debugLog("SELECT");
                                this.query = "";
                                this.activeLineIndex = this.lines.findIndex(line => line.key === attr.data.model);
                            },
                            text: `    ${attr.name} (${attr.type})`
                        });
                    });
                }
                else {
                    lines.push({ key: modelAttrKey, text: `  > attributes` });
                }
                lines.push({ key: `${model.name}_scopes`, text: "    scopes" });
                lines.push({ key: `${model.name}_permissions`, text: "    permissions" });
                // model.attributes.forEach(attribute => {})
            }
            else {
                lines.push({ key: model.name, text: ` > ${model.name}` });
            }
        });
        return lines;
    }
    reRender() {
        const buffer = this.logger.newBuffer();
        for (const index in this.lines) {
            if (index === String(this.activeLineIndex)) {
                buffer.print(chalk_1.default.bgGreen(" "));
            }
            else {
                buffer.print(" ");
            }
            const line = this.lines[index];
            buffer.println(line.text);
        }
        buffer.println("---------------------");
        buffer.println(chalk_1.default.bgWhite(chalk_1.default.black("Query:")) + " " + this.query);
        buffer.flush({ full: true });
    }
}
exports.SimpleSchemaViewer = SimpleSchemaViewer;
