import stringify from "json-stringify-pretty-compact"
import { Line } from "../Line"
import { TextLine } from "./TextLine"
export class JsonLine extends Line {
  lines: Line[]
  constructor(
    public obj: any,
    opts: {
      indent?: number
    }
  ) {
    super()
    this.lines = stringify(obj || {})
      .split("\n")
      .map(line => `${" ".repeat(opts.indent || 0)}${line}`)
      .map(text => new TextLine(text))
    this.children = this.lines.slice(1)
  }
  onAfterMount() {
    this.children.forEach(child => (child.hidden = this.hidden))
  }
  onHiddenChange(hidden) {
    this.children.forEach(child => (child.hidden = hidden))
  }
  render() {
    return this.lines[0].render()
  }
}
