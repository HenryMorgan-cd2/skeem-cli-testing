import readline from "readline"
import ansi from "ansi"
import chalk from "chalk"
import { schema } from "./schema"

/////////////
import { Cli } from "./Cli"
import { ModelLine } from "./lines/ModelLine"
import { InputLine } from "./lines/InputLine"
import { HrLine } from "./lines/HrLine"
import { SimpleSchemaViewer } from "./simple"
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
const cli = new SimpleSchemaViewer(schema)
cli.reRender()

readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)
const cursor = ansi(process.stdout)

cursor.hide()

process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit()
  } else {
    cli.handleKeyPress(str, key)
  }
})
