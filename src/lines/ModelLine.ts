import { schema } from "../schema"
import { ScopeLine } from "./ScopeLine"
import { AttributeLine } from "./AttributeLine"
import { highlight, matches } from "../utils"
import { JsonLine } from "./JsonLine"
import { CollapsibleLine } from "./CollapsibleLine"
import chalk from "chalk"
export class ModelLine extends CollapsibleLine {
  model: typeof schema["models"][number]
  constructor(model: any) {
    super({
      text: model.name,
      lines: [
        new CollapsibleLine({
          text: `  attributes (${model.attributes.length}) `,
          lines: model.attributes.map(attribute => new AttributeLine(model, attribute))
        }),
        new CollapsibleLine({
          text: `  scopes (${model.scopes.length})`,
          lines: model.scopes.map(scope => new ScopeLine(scope))
        }),
        new CollapsibleLine({
          text: "  permissions",
          lines: [new JsonLine(model.permissions, { indent: 4 })]
        })
      ]
    })
    this.model = model
  }
  render() {
    const match = this.getMatchingThing()
    if (match) {
      return `${chalk.green(match[0])}[${this.open ? "-" : "+"}]`
    } else {
      return super.render()
    }
    // return highlight(chalk.green(super.render()), this.cli.globalState.query)
  }
  onGlobalStateChange(newState) {
    if (this.getMatchingThing()) {
      this.hidden = false
    } else {
      this.hidden = true
    }
  }

  getMatchingThing() {
    return this.searchList()
      .map(item => matches(item, this.cli.globalState.query))
      .filter(Boolean)[0]
  }

  searchList() {
    const list = []
    this.model.attributes.forEach(attr => {
      list.push([this.model.name, attr.name])
    })
    this.model.scopes.forEach(scope => {
      list.push([this.model.name, scope.name])
    })
    return list
  }
}

function simpleMatch(x, y) {
  return x[0].includes(y)
}
