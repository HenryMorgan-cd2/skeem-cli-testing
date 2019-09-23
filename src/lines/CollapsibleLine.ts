import { IKey } from "../Cli"
import { Line } from "../Line"
export class CollapsibleLine extends Line {
  open = false
  text: string
  constructor(opts: { text: string; lines: Line[]; defaultOpen?: boolean }) {
    super()
    this.text = opts.text
    this.children = [...opts.lines]
    this.open = opts.defaultOpen || false
  }
  handleInput(key: IKey) {
    if (key.name === "return") {
      this.open = !this.open
      this.changed = true
    }
    this.children.forEach(child => (child.hidden = !this.open))
  }
  onAfterMount() {
    this.children.forEach(child => (child.hidden = !this.open))
  }
  onHiddenChange(hidden) {
    if (hidden) {
      this.children.forEach(child => (child.hidden = hidden))
    }
  }
  render() {
    return `${this.text}[${this.open ? "-" : "+"}]`
  }
}
