import readline from "readline"
import ansi from "ansi"
import chalk from "chalk"
import { schema } from "../schema"
import stringify from "json-stringify-pretty-compact"

/////////////
import { Line, IKey, Cli } from "./Cli"

class HrLine extends Line {
  render() {
    return `---------------`
  }
}

class TextLine extends Line {
  render() {
    return this.props
  }
}
// class JsonLine extends TextLine {
//   constructor(public scope: string, opts: { indent?: number }) {
//     super(
//       stringify(scope)
//         .split("\n")
//         .map(line => `${" ".repeat(opts.indent || 0)}${line}`)
//         .join("\n")
//     )
//   }
// }

// class CollapsibleLine extends Line {
//   open = false

//   text: string
//   lines: Line[]

//   constructor(opts: { text: string; lines: Line[]; defaultOpen?: boolean }) {
//     super()
//     this.text = opts.text
//     this.lines = opts.lines
//     this.open = opts.defaultOpen || false
//   }

//   handleInput(key: IKey) {
//     if (key.name === "return") {
//       this.open = !this.open
//     }

//     if (this.open) {
//       this.cli.addLinesAfter(this, this.lines)
//     } else {
//       this.cli.removeLines(this.lines)
//     }
//   }

//   onAfterMount() {
//     if (this.open) {
//       this.cli.addLinesAfter(this, this.lines)
//     }
//   }

//   onUnmount() {
//     this.cli.removeLines(this.lines)
//   }

//   render() {
//     return `${this.text}[${this.open ? "-" : "+"}]`
//   }
// }

///////////

// class InputLine extends Line {
//   prompt: string
//   input = ""

//   constructor(prompt: string) {
//     super()
//     this.prompt = prompt
//   }

//   handleInput(key: IKey) {
//     if (key.name === "backspace") {
//       this.input = this.input.slice(0, -1)
//     } else if (key.isChar) {
//       this.input += key.str
//     }
//   }

//   render() {
//     const prompt = this.isActive ? chalk.bgWhite(chalk.black(this.prompt)) : this.prompt
//     return `${prompt}: ${this.input}`
//   }
// }

// class ModelLine extends CollapsibleLine {
//   model: typeof schema["models"][number]
//   attributeLines = []
//   headingLines = []

//   constructor(model: any) {
//     super({
//       text: model.name,
//       lines: [
//         new CollapsibleLine({
//           text: `  attributes (${model.attributes.length})`,
//           lines: model.attributes.map(attribute => new AttributeLine(attribute))
//         }),
//         new CollapsibleLine({
//           text: `  scopes (${model.scopes.length})`,
//           lines: model.scopes.map(scope => new JsonLine(scope, { indent: 4 }))
//         }),
//         new CollapsibleLine({ text: "  permissions", lines: [] })
//       ]
//     })
//     this.model = model
//   }
// }

// class AttributeLine extends Line {
//   attribute: { name: string; type: string; data: any }
//   constructor(attribute) {
//     super()
//     this.attribute = attribute
//   }

//   handleInput(key: IKey) {
//     if (key.name === "return") {
//       const modelLine = this.cli.lines.find(
//         line => line instanceof ModelLine && line.model.name === this.attribute.data.model
//       )
//       this.cli.setActiveLine(modelLine)
//     }
//   }

//   render() {
//     return `    ${chalk.cyan(this.attribute.name)} (${this.attribute.type})`
//   }
// }

//////

class TestLine extends Line {
  handleInput() {
    this.setState(Math.random())
    console.log("ASDASD")
    throw "asd"
  }

  render() {
    return [
      "Hello",
      JSON.stringify(this.state),
      "There",
      "How",
      "Are",
      "You",
      { type: TextLine, props: "hello" }
    ]
  }
}

const cli = new Cli({
  debug: true,
  lines: [
    // ...schema.models.sort((a, b) => (a.name < b.name ? -1 : 1)).map(model => new ModelLine(model)),
    // new HrLine(),
    // { type: InputLine, props: `Query` },
    { type: TestLine, props: null }
    // { type: CollapsibleLine, props: { text: "asd", lines: [{ type: InputLine, props: "asd" }] } }
  ]
})

cli.renderScreen()

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
