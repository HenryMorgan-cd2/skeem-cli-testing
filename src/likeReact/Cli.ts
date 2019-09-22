import ansi from "ansi"
import { appendFileSync, writeFileSync } from "fs"
const cursor = ansi(process.stdout)

const debug = (...data) => appendFileSync("./debug.txt", `${JSON.stringify(data)}\n`)
writeFileSync("./debug.txt", ``)
export interface IKey {
  str: string
  sequence: string
  name: "backspace" | "up" | "down" | "left" | "right" | "return"
  ctrl: boolean
  meta: boolean
  shift: boolean
  isChar: boolean
}

export abstract class Line {
  cli: Cli
  isActive = false

  props: any
  state: any

  constructor(props, state) {
    this.props = props
    this.state = state
  }

  setActive(state) {
    this.isActive = state
  }

  setState(newState) {
    this.state = newState
  }

  handleInput(key: IKey) {}

  onAfterMount() {}
  onUnmount() {}
  abstract render(): string | IComp | (string | IComp)[]
}

type IComp = { type: any; props: any }

export class Cli {
  clearScreen: boolean
  debug: boolean
  lines: IComp[] = []
  activeLineIndex = 0
  scrollPos = 0

  constructor({
    debug = false,
    clearScreen = true,
    lines = []
  }: {
    debug?: boolean
    clearScreen?: boolean
    lines?: IComp[]
  }) {
    this.lines = lines
    this.clearScreen = clearScreen
    this.debug = debug
  }

  get height() {
    return this.debug ? process.stdout.rows - 5 : process.stdout.rows
  }

  moveActiveLine(delta: number) {
    this.changeActiveLineIndex(this.activeLineIndex + delta)
  }
  changeActiveLineIndex(to: number, opts: { scroll?: "middle" | "visible" } = {}) {
    this.activeLineIndex = to

    // clamp index between 0 and line
    if (this.activeLineIndex < 0) {
      this.activeLineIndex = 0
    } else if (this.activeLineIndex >= this.renderLength()) {
      this.activeLineIndex = this.renderLength() - 1
    }

    // update which line is active
    this.buildOutput()
      .lines.filter(line => line.setActive)
      .forEach((line, i) => line.setActive(false))
    const newCurrent = this.buildOutput().lines[this.activeLineIndex]
    if (newCurrent.setActive) {
      newCurrent.setActive(true)
    }

    const scrollTop = this.scrollPos
    const scrollBottom = this.scrollPos + this.height - 1

    debug("checking scroll")
    //set scroll position
    if (opts.scroll === "middle") {
      this.scrollPos = this.activeLineIndex - this.height / 2
    } else {
      if (scrollTop > this.activeLineIndex) {
        debug("scrolling up")
        this.scrollPos = this.activeLineIndex
      } else if (scrollBottom < this.activeLineIndex) {
        debug("scrolling down", this.scrollPos, this.activeLineIndex)
        this.scrollPos = this.activeLineIndex - this.height + 1
      }
    }

    // clamp scrolling
    if (this.scrollPos > this.renderLength()) {
      this.scrollPos = this.renderLength() - this.height
    }
    if (this.scrollPos < 0) {
      this.scrollPos = 0
    }
  }
  setActiveLine(line: Line) {
    const idx = this.buildOutput().lines.indexOf(line)
    if (idx === -1) {
      throw "that line is not on the screen"
    } else {
      this.changeActiveLineIndex(idx, { scroll: "middle" })
    }
  }

  // addLinesAfter(line: Line, lines: Line[]) {
  //   const idx = this.lines.indexOf(line)
  //   if (idx === -1) {
  //     throw "that line is not on the screen"
  //   } else {
  //     lines.forEach((line, i) => {
  //       this.addLine(line, idx + i + 1)
  //     })
  //   }
  // }

  // addLine(line: Line, index: number) {
  //   if (this.lines.includes(line)) {
  //     throw "trying to add line that is already mounted"
  //   }
  //   this.registerLines([line])
  //   this.lines.splice(index, 0, line)
  //   line.onAfterMount()
  // }
  // removeLines(lines: Line[]) {
  //   lines.forEach(line => {
  //     this.removeLine(line)
  //   })
  // }
  // removeLine(line: Line) {
  //   const idx = this.lines.indexOf(line)
  //   if (idx > -1) {
  //     line.onUnmount()
  //     this.lines.splice(idx, 1)
  //   }
  // }

  handleKeyPress(str, key: IKey) {
    key.isChar = key.sequence.length === 1 && (key.name === undefined || key.name.length === 1)
    key.str = str

    if (key.name === "up") {
      this.moveActiveLine(-1)
    } else if (key.name === "down") {
      this.moveActiveLine(1)
    } else {
      const line = this.buildOutput().lines[this.activeLineIndex]
      if (line.handleInput) {
        line.handleInput(key)
      }
    }

    this.renderScreen()
  }

  renderLength() {
    return this.buildOutput().content.length
  }

  states = [] as { type: any; value: any }[]

  buildOutput(components = this.lines, initialIndex = 0) {
    const renderedComponents = []
    const output = []
    let i = initialIndex

    components.map((component: any) => {
      // if (typeof component === 'object') {

      // }
      const state = this.states[i] || {}
      const instance = new component.type(component.props, state)
      instance.setState = newState => {
        console.log("SETTING STATE")
        debug("SET STATE", newState)
        this.states[i] = newState
        this.renderScreen()
      }
      if (!instance.render) {
        throw "line must define a render method"
      }

      const content = instance.render()
      const contentArr = Array.isArray(content) ? content : [content]

      contentArr.forEach(l => {
        if (typeof l === "string") {
          renderedComponents.push(component)
          const text = `${i === this.activeLineIndex ? "> " : "  "}${l}`
          i++
          output.push(text)
        } else {
          renderedComponents.push(component)

          const children = this.buildOutput([l], i)
          i += children.content.length

          output.push(...children.content)
          renderedComponents.push(...children.lines)
        }
      })

      // cursor.write(i + this.scrollPos === this.activeLineIndex ? "> " : "  ")
    })

    return { lines: renderedComponents, content: output }
  }

  renderScreen() {
    if (this.clearScreen) {
      console.clear()
      process.stdout.write("\x1b[3J")
    } else {
      console.log()
      console.log(" ============================================ ")
      console.log()
    }
    console.log(Math.random())
    const output = this.buildOutput()
    output.content.slice(this.scrollPos, this.scrollPos + this.height).forEach(line => {
      console.log(line)
    })
    if (this.debug) {
      console.log()
      console.log()
      console.log({
        height: this.height,
        scroll: this.scrollPos,
        index: this.activeLineIndex,
        total: this.renderLength(),
        output,
        states: this.states
      })
    }
  }
}
