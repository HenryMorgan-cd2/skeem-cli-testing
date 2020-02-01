import chalk from "chalk";
import { arrayWrap } from './utils'


type IForm = IFormElement[];


type IStringFormElement = { type: "string", name: string, validations?: { presence?: true } }
type IBooleanFormElement = { type: "boolean", name: string }
type ISelectFormElement = { type: "select", name: string, options: string[] }
type IButtonFormElement = { type: "button", name: string, onClick(context: IFormContext): void }
type ISpaceFormElement = { type: "space" }
type IFormElement = IStringFormElement | IBooleanFormElement | ISelectFormElement | IButtonFormElement | ISpaceFormElement

type IFormResults = { submitted: false; data: undefined } | { submitted: true; data: Record<string, any> };
interface IFormState {
  data: Record<string, any>;
  errors: Record<string, any>;
  meta: Record<string, Record<string, any>>;
  validated: boolean;
  focusIndex: number;
  submitted: boolean;
  cancelled: boolean;
  debug?: any
}

interface IKey {
  str: string;
  sequence: string;
  name:
  | "backspace"
  | "up"
  | "down"
  | "left"
  | "right"
  | "return"
  | "pageup"
  | "pagedown"
  | "space"
  | string;
  ctrl: boolean;
  meta: boolean;
  shift: boolean;
  isChar: boolean;
}

export function runForm(form: IForm) {
  return new Promise<IFormResults>(resolve => {
    let state: IFormState = {
      data: {},
      errors: {},
      meta: {},
      validated: false,
      focusIndex: 0,
      submitted: false,
      cancelled: false
    };

    process.stdin.on("keypress", keyPressHandler);
    renderForm(form, state);

    function submitForm() {
      process.stdin.off("keypress", keyPressHandler);
      resolve({ submitted: true, data: state.data });
    }
    function cancelForm() {
      process.stdin.off("keypress", keyPressHandler);
      resolve({ submitted: false, data: undefined });
    }

    function keyPressHandler(str: string, key: IKey) {
      key.isChar =
        key.sequence.length === 1 &&
        (key.name === undefined || key.name.length === 1);
      key.str = str;

      let newState = keyPressReducer(form, state, key);
      newState = errorsReducer(form, newState);
      processNewState(newState);
    }

    function processNewState(newState: IFormState) {
      // if the state is the exact same, do nothing
      if (newState === state) {
        return;
      }

      if (newState.submitted === true) {
        if (Object.keys(newState.errors).length === 0) {
          submitForm();
        } else {
          state = newState;
          renderForm(form, state);
        }
      } else if (newState.cancelled === true) {
        cancelForm();
      } else {
        state = newState;
        renderForm(form, state);
      }
    }
  });
}

type IFormContext = {
  elements: IForm,
  focusPrevious(state: IFormState): IFormState,
  focusNext(state: IFormState): IFormState,
  submit(state: IFormState): IFormState
  cancel(state: IFormState): IFormState

  getMeta(state: IFormState, name: string): Record<string, any>
  setMeta(state: IFormState, name: string, newMeta: Record<string, any>): IFormState
}

interface IFocusableElementHandler {
  isFocusable?: true
  reducer(element: IFormElement, state: IFormState, key: IKey, formContext: IFormContext): IFormState
  render(element: IFormElement, state: IFormState, isFocussed: boolean): string | string[]
}

interface IDumbElementHandler {
  isFocusable: false
  render(element: IFormElement, state: IFormState, isFocussed: boolean): string | string[]
}

type IElementHandler = IFocusableElementHandler | IDumbElementHandler

const elements: Record<string, IElementHandler> = {
  space: {
    isFocusable: false,
    render: () => ""
  },
  button: {
    reducer(element: IButtonFormElement, state, key, context) {
      if (key.name === "up") {
        return context.focusPrevious(state)
      } else if (key.name === "down") {
        return context.focusNext(state)
      } else if (key.name === "return") {
        let newState
        const contextForButton = {
          ...context,
          submit: () => newState = context.submit(state),
          cancel: () => newState = context.cancel(state),
        }
        element.onClick(contextForButton)
        if (newState) {
          return newState
        } else {
          return state
        }
      } else {
        return { ...state, debug: key.name }
      }
    },
    render(element: IButtonFormElement, state, isFocussed) {
      let line = ""

      line = isFocussed ? chalk.bgWhite(chalk.black(element.name)) : element.name
      return line
    }
  },
  select: {
    reducer(element: ISelectFormElement, state, key, context) {


      const meta = context.getMeta(state, element.name)
      const { isOpen = false, currentIndex } = meta

      if (isOpen) {
        if (key.name === "up") {
          return context.setMeta(state, element.name, { ...meta, currentIndex: meta.currentIndex > 0 ? meta.currentIndex - 1 : 0 })
        } else if (key.name === "down") {
          return context.setMeta(state, element.name, { ...meta, currentIndex: meta.currentIndex < element.options.length - 1 ? meta.currentIndex + 1 : meta.currentIndex })
        } else if (key.name === "return") {
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
          };
        } else {
          return state
        }
      } else {

        if (key.name === "up") {
          return context.focusPrevious(state)
        } else if (key.name === "down") {
          return context.focusNext(state)
        } else if (key.name === "space" || key.name === "return") {
          return {
            ...state, meta: { ...state.meta, [element.name]: { isOpen: true, currentIndex: 0 } }
          } as any;
        } else {
          return state
        }
      }
    },
    render(element: ISelectFormElement, state, isFocussed) {
      const lines: string[] = []
      lines.push((isFocussed ? "> " : "  ") + `${element.name}: `);
      const value = state.data[element.name];
      lines[lines.length - 1] += ((value || "|--select--|") + " ▼");
      if ((state.meta[element.name] || {}).isOpen) {
        const space = `  ${element.name}: `.replace(/./g, " ");
        element.options!.forEach((option, i) => {
          const index = (state.meta[element.name] || {}).currentIndex
          lines.push(space + ((i === index) ? "> " : "  ") + option);
        });
      }
      return lines
    }
  },
  string: {
    reducer(element: IStringFormElement, state, key, context) {
      {
        if (key.name === "up") {
          return context.focusPrevious(state)
        } else if (key.name === "down") {
          return context.focusNext(state)
        } else if (key.isChar || key.name === "space") {
          const currentValue = state.data[element.name] || "";
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
          };
        } else if (key.name === "backspace") {
          const currentValue = state.data[element.name] || "";
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
          };
        } else {
          return state
        }
      }
    },
    render(element: IStringFormElement, state, isFocussed) {
      return [(isFocussed ? "> " : "  ") + `${element.name}: ` + (state.data[element.name] || "")]
    }
  },
  boolean: {
    reducer(element: IBooleanFormElement, state, key, context) {
      if (key.name === "up") {
        return context.focusPrevious(state)
      } else if (key.name === "down") {
        return context.focusNext(state)
      } else if (key.name === "space" || key.name === "return") {
        const currentValue = state.data[element.name] || false;
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
        };
      } else {
        return state
      }

    },
    render(element: IBooleanFormElement, state, isFocussed) {
      return [(isFocussed ? "> " : "  ") + `${element.name}: ` + (state.data[element.name] ? "✔" : "×")]
    }
  }
}

function keyPressReducer(
  form: IForm,
  state: IFormState,
  key: IKey
): IFormState {
  const currentElement = form[state.focusIndex];

  function focusPrevious(state: IFormState) {
    let prevIndex = state.focusIndex

    while (true) {
      prevIndex -= 1

      // if outside bounds, return original state as there is no element below which is valid
      if (prevIndex < 0) {
        return state
      }

      const prevType = form[prevIndex].type
      const prevHandler = elements[prevType]

      // is the element is focusable, then return state with the index set to that position
      if (prevHandler.isFocusable !== false) {
        return { ...state, focusIndex: prevIndex }
      }
    }
  }

  function focusNext(state: IFormState) {
    let nextIndex = state.focusIndex

    while (true) {
      nextIndex += 1

      // if outside bounds, return original state as there is no element below which is valid
      if (nextIndex >= form.length) {
        return state
      }

      const nextType = form[nextIndex].type
      const nextHandler = elements[nextType]

      // is the element is focusable, then return state with the index set to that position
      if (nextHandler.isFocusable !== false) {
        return { ...state, focusIndex: nextIndex }
      }
    }

  }

  function submit(state) {
    return { ...state, submitted: true }
  }

  function cancel(state) {
    return { ...state, cancelled: true }
  }

  function getMeta(state, name) {
    return state.meta[name] || {}
  }
  function setMeta(state, name, newMeta) {
    return { ...state, meta: { ...state.meta, [name]: newMeta } }
  }

  const formContext: IFormContext = {
    elements: form,
    focusNext,
    focusPrevious,
    submit,
    cancel,
    getMeta,
    setMeta,
  }



  const handler = elements[currentElement.type]
  if (!handler) {
    throw new Error(`unknown element type ${currentElement.type}`)
  } else if ('reducer' in handler) {
    return handler.reducer(currentElement, state, key, formContext)
  } else {
    return state
  }

}

function errorsReducer(form: IForm, state: IFormState): IFormState {
  // don't process errors if not submitted
  if (!state.submitted) {
    return state;
  }
  const newState = { ...state, errors: {}, validated: true };
  if (!state.data.name || state.data.name.trim() === "") {
    return { ...newState, errors: { name: "must be present" } };
  }
  return newState;
}

function renderForm(form: IForm, state: IFormState) {
  function write(data) {
    process.stdout.write(data);
  }

  console.clear();
  write("\x1b[3J");

  write("-------------------\n");

  console.log(JSON.stringify(state));

  write("-------------------\n");

  form.forEach((element, i) => {
    const isFocussed = state.focusIndex === i;

    const handler = elements[element.type]
    if (!handler) {
      throw new Error(`unknown element type ${element.type}`)
    } else {
      let lines = handler.render(element, state, isFocussed)
      lines = arrayWrap(lines)
      for (const line of lines) {
        write(line + "\n")
      }
    }


    const error = 'name' in element && state.errors[element.name];
    if (error) {
      write(`    ${chalk.red(error)}\n`);
    }
  });

  write("-------------------\n");


  if (state.debug) {
    write("(DEBUG) ")
    write(JSON.stringify(state.debug))
  }
}
