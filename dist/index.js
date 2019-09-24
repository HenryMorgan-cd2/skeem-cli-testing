"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const ansi_1 = __importDefault(require("ansi"));
const schema_1 = require("./schema");
const simple_1 = require("./simple");
// const cli = new Cli({
//   // debug: true,
//   // showHidden: true,
//   lines: [
//     ...schema.models.sort((a, b) => (a.name < b.name ? -1 : 1)).map(model => new ModelLine(model)),
//     new HrLine(),
//     new InputLine(`Query`, "query")
//   ],
//   activeIndex: "end",
//   initialState: { query: "" }
// })
const cli = new simple_1.SimpleSchemaViewer(schema_1.schema);
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
