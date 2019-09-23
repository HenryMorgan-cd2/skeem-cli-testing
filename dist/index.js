"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const ansi_1 = __importDefault(require("ansi"));
const schema_1 = require("./schema");
/////////////
const Cli_1 = require("./Cli");
const ModelLine_1 = require("./lines/ModelLine");
const InputLine_1 = require("./lines/InputLine");
const HrLine_1 = require("./lines/HrLine");
const cli = new Cli_1.Cli({
    // debug: true,
    // showHidden: true,
    lines: [
        ...schema_1.schema.models.sort((a, b) => (a.name < b.name ? -1 : 1)).map(model => new ModelLine_1.ModelLine(model)),
        new HrLine_1.HrLine(),
        new InputLine_1.InputLine(`Query`, "query")
    ],
    activeIndex: "end",
    initialState: { query: "" }
});
cli.reRender();
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
