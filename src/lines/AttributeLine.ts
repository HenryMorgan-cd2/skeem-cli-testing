import chalk from "chalk"
import { IKey } from "../Cli"
import { Line } from "../Line"
import { highlight, matches } from "../utils"
import { ModelLine } from "./ModelLine"
import { debugLog } from "../Cli"
export class AttributeLine extends Line {
  model: { name: string }
  attribute: {
    name: string
    type: string
    data: any
  }
  constructor(model, attribute) {
    super()
    this.model = model
    this.attribute = attribute
  }
  handleInput(key: IKey) {
    if (this.attribute.type === "association") {
      if (key.name === "return") {
        const modelLine = this.cli.lines.find(
          line => line instanceof ModelLine && line.model.name === this.attribute.data.model
        )
        this.cli.setState({ query: "" })
        this.cli.setActiveLine(modelLine, { scroll: "middle" })
      }
    }
  }

  render() {
    const match = this.getMatchingThing()
    const name = match ? match[1] : this.attribute.name
    return `    ${name} (${this.attribute.type})`
  }

  onGlobalStateChange() {
    if (this.cli.globalState.query && this.getMatchingThing()) {
      this.hidden = false
    } else {
      this.hidden = true
    }
  }

  getMatchingThing() {
    debugLog(
      this.cli.globalState.query,
      [this.model.name, this.attribute.name],
      matches([this.model.name, this.attribute.name], this.cli.globalState.query)
    )
    return matches([this.model.name, this.attribute.name], this.cli.globalState.query)
  }
}
