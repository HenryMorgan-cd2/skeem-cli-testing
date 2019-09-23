import { getKey, Cli, IKey } from "./Cli"
export abstract class Line {
  key = getKey()
  cli: Cli
  isActive = false
  _children: Line[] = []
  parent?: Line
  changed = true
  setActive(state) {
    this.isActive = state
    this.changed = true
  }
  handleInput(key: IKey) {}
  onAfterMount() {}
  onGlobalStateChange(newState: any) {}
  abstract render(): string
  _hidden = false

  get context() {
    return this.cli.globalState
  }

  get hidden() {
    return (
      this !== this.cli.activeLine && (this._hidden && this.children.every(child => child.hidden))
    )
  }
  set hidden(newVal) {
    this._hidden = newVal
    this.onHiddenChange(newVal)
  }
  onHiddenChange(hidden: boolean) {}
  toJSON() {
    return `${this.constructor.name} ${this.key}`
  }
  set children(val) {
    val.forEach(line => (line.parent = this))
    this._children = val
  }
  get children() {
    return this._children
  }
}
