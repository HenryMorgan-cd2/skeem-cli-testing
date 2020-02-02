import { IFormState, IKey, IFormReducerContext, validateForm } from './form'
import chalk from 'chalk'

type IStringFormHandler = { type: "string", name: string, validations?: { presence?: true } }
type IBooleanFormHandler = { type: "boolean", name: string }
type ISelectFormHandler = { type: "select", name: string, options: string[] }
type IButtonFormHandler = { type: "button", name: string, onClick(context: IButtonClickContext): Promise<void | undefined> | void | undefined }
type ISubmitFormHandler = { type: "submit", name: string }
type ISpaceFormHandler = { type: "space" }
export type IFormElement = IStringFormHandler | IBooleanFormHandler | ISelectFormHandler | IButtonFormHandler | ISubmitFormHandler | ISpaceFormHandler

interface IFocusableElementHandler<T extends IFormElement = IFormElement> {
  isFocusable?: true
  onKeyPress(element: T, state: IFormState, key: IKey, formContext: IFormReducerContext): IFormState | Promise<IFormState>
  render(element: T, state: IFormState, isFocussed: boolean): string | string[]
  validate?(element: T, state: IFormState): any
}

interface IDumbElementHandler<T extends IFormElement = IFormElement> {
  isFocusable: false
  render(element: T, state: IFormState, isFocussed: boolean): string | string[]
}

type IElementHandler<T extends IFormElement = IFormElement> = IFocusableElementHandler<T> | IDumbElementHandler<T>

interface IButtonClickContext {
  submitForm(data: any): void
  validate(opts?: { showErrors?: boolean }): Promise<{ isValid: boolean, errors: Record<string, any> }>
  setErrors(errors: any): void
  getData(): any
}



const buttonHandler: IFocusableElementHandler<IButtonFormHandler> = {
  async onKeyPress(element, state, key, context) {
    if (key.name === "up") {
      return context.focusPrevious(state)
    } else if (key.name === "down") {
      return context.focusNext(state)
    } else if (key.name === "return") {
      let newState = state
      const contextForButton: IButtonClickContext = {
        ...context,
        submitForm(data) {
          newState = context.submit(state, data)
        },

        getData() {
          return newState.data
        },

        setErrors(errors) {
          newState = { ...newState, errors }
        },

        async validate(opts) {
          const validResponse = await validateForm(context.elements, newState)

          if (opts && opts.showErrors) {
            this.setErrors(validResponse.errors)
          }

          return validResponse
        }

      }

      await element.onClick(contextForButton)
      return newState
    } else {
      return { ...state, debug: key.name }
    }
  },
  render(element, state, isFocussed) {
    let line = ""

    line = isFocussed ? chalk.bgWhite(chalk.black(element.name)) : element.name
    return line
  }
}

const submitHandler: IElementHandler<ISubmitFormHandler> = {
  onKeyPress(_element, state, key, context) {
    return buttonHandler.onKeyPress({
      type: "button",
      name: "submit",
      async onClick(context) {

        const { isValid } = await context.validate({ showErrors: true })
        if (isValid) {
          context.submitForm(context.getData())
        }

      }
    }, state, key, context)
  },
  render(element, state, isFocussed) {
    return buttonHandler.render({
      type: "button",
      name: element.name,
      async onClick() { }
    }, state, isFocussed)
  }
}

const selectHandler: IElementHandler<ISelectFormHandler> = {
  onKeyPress(element, state, key, context) {
    const meta = context.getMeta(state, element.name)
    const { isOpen = false, currentIndex } = meta
    if (isOpen) {
      if (key.name === "up") {
        return context.setMeta(state, element.name, { ...meta, currentIndex: meta.currentIndex > 0 ? meta.currentIndex - 1 : 0 })
      }
      else if (key.name === "down") {
        return context.setMeta(state, element.name, { ...meta, currentIndex: meta.currentIndex < element.options.length - 1 ? meta.currentIndex + 1 : meta.currentIndex })
      }
      else if (key.name === "return") {
        return {
          ...state,
          validated: false,
          submitted: false,
          cancelled: false,
          errors: { ...state.errors, [element.name]: undefined },
          meta: { ...state.meta, [element.name]: { isOpen: false } },
          data: {
            ...state.data,
            [element.name]: element.options[currentIndex]
          }
        }
      }
      else {
        return state
      }
    }
    else {
      if (key.name === "up") {
        return context.focusPrevious(state)
      }
      else if (key.name === "down") {
        return context.focusNext(state)
      }
      else if (key.name === "space" || key.name === "return") {
        return {
          ...state, meta: { ...state.meta, [element.name]: { isOpen: true, currentIndex: 0 } }
        } as any
      }
      else {
        return state
      }
    }
  },
  render(element, state, isFocussed) {
    const lines: string[] = []
    lines.push((isFocussed ? "> " : "  ") + `${element.name}: `)
    const value = state.data[element.name]
    lines[lines.length - 1] += ((value || "|--select--|") + " ▼")
    if ((state.meta[element.name] || {}).isOpen) {
      const space = `  ${element.name}: `.replace(/./g, " ")
      element.options!.forEach((option, i) => {
        const index = (state.meta[element.name] || {}).currentIndex
        lines.push(space + ((i === index) ? "> " : "  ") + option)
      })
    }
    return lines
  }
}

const stringHandler: IElementHandler<IStringFormHandler> = {
  validate(element, state) {
    const currentValue = state.data[element.name] || ""
    if (element.validations && element.validations.presence) {
      if (currentValue.trim() === "") {
        return "must be present"
      }
    }
  },
  onKeyPress(element, state, key, context) {
    {
      if (key.name === "up") {
        return context.focusPrevious(state)
      }
      else if (key.name === "down") {
        return context.focusNext(state)
      }
      else if (key.isChar || key.name === "space") {
        const currentValue = state.data[element.name] || ""
        return {
          ...state,
          validated: false,
          submitted: false,
          cancelled: false,
          errors: { ...state.errors, [element.name]: undefined },
          data: {
            ...state.data,
            [element.name]: currentValue + key.sequence
          }
        }
      }
      else if (key.name === "backspace") {
        const currentValue = state.data[element.name] || ""
        return {
          ...state,
          validated: false,
          submitted: false,
          cancelled: false,
          errors: { ...state.errors, [element.name]: undefined },
          data: {
            ...state.data,
            [element.name]: currentValue.slice(0, -1)
          }
        }
      }
      else {
        return state
      }
    }
  },
  render(element, state, isFocussed) {
    return [(isFocussed ? "> " : "  ") + `${element.name}: ` + (state.data[element.name] || "")]
  }
}
const booleanHandler: IElementHandler<IBooleanFormHandler> = {
  onKeyPress(element, state, key, context) {
    if (key.name === "up") {
      return context.focusPrevious(state)
    }
    else if (key.name === "down") {
      return context.focusNext(state)
    }
    else if (key.name === "space" || key.name === "return") {
      const currentValue = state.data[element.name] || false
      return {
        ...state,
        validated: false,
        submitted: false,
        cancelled: false,
        errors: { ...state.errors, [element.name]: undefined },
        data: {
          ...state.data,
          [element.name]: !currentValue
        }
      }
    }
    else {
      return state
    }
  },
  render(element, state, isFocussed) {
    return [(isFocussed ? "> " : "  ") + `${element.name}: ` + (state.data[element.name] ? "✔" : "×")]
  }
}

const spaceHandler: IElementHandler<ISpaceFormHandler> = {
  isFocusable: false,
  render: () => ""
}

export const formElements: Record<string, IElementHandler> = {
  space: spaceHandler,
  button: buttonHandler,
  select: selectHandler,
  string: stringHandler,
  boolean: booleanHandler,
  submit: submitHandler
}
