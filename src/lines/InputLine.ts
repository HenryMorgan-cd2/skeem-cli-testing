import chalk from "chalk"
import { IKey } from "../Cli"
import { Line } from "../Line"
///////////
export class InputLine extends Line {
  prompt: string
  field: string
  constructor(prompt: string, field: string) {
    super()
    this.prompt = prompt
    this.field = field
  }
  handleInput(key: IKey) {
    if (key.name === "backspace") {
      this.value = this.value.slice(0, -1)
    } else if (key.isChar) {
      this.value += key.str
    }
    this.changed = true
  }
  get value() {
    return this.context[this.field] || ""
  }
  set value(newVal) {
    this.cli.setState({ [this.field]: newVal })
  }
  render() {
    const prompt = this.isActive ? chalk.bgWhite(chalk.black(this.prompt)) : this.prompt
    return `${prompt}: ${this.value}`
  }
}
