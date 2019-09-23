import { Line } from "../Line"
export class TextLine extends Line {
  constructor(public text: string) {
    super()
  }
  render() {
    return this.text
  }
}
