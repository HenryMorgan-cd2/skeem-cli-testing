import chalk from "chalk"
import stringify from "json-stringify-pretty-compact"
import { Line } from "../Line"
import { TextLine } from "./TextLine"
import { JsonLine } from "./JsonLine"
export class ScopeLine extends Line {
  lines: Line[]
  scope: {
    name: string
    query: any
    params: any
  }
  constructor(scope) {
    super()
    this.scope = scope
    const text = `
  ${stringify(this.scope.params)}
  ${stringify(this.scope.query)}
    `.trim()
    let children = []
    if (this.scope.params && this.scope.params.length) {
      children.push(new TextLine("      Params: "))
      children.push(new JsonLine(this.scope.params, { indent: 8 }))
    }
    children.push(new TextLine("      Query: "))
    children.push(new JsonLine(this.scope.query, { indent: 8 }))
    this.children = children
  }

  onAfterMount() {
    this.children.forEach(child => (child.hidden = this.hidden))
  }
  onHiddenChange(hidden) {
    this.children.forEach(child => (child.hidden = hidden))
  }
  render() {
    return `    ${chalk.cyan(this.scope.name)}`
  }
}
