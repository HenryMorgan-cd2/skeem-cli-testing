import chalk from "chalk";
import { arrayWrap } from './utils'
import { IFormElement, formElements } from './formElements'

type IForm = IFormElement[];


export interface IFormState {
  data: Record<string, any>;
  errors: Record<string, any>;
  meta: Record<string, Record<string, any>>;
  focusIndex: number;
}

export interface IKey {
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

type IFormOptions = {
  fields: IForm;
  debug?: boolean;
};

export function runForm<T>(opts: IFormOptions): Promise<T> {
  return new Promise<T>(resolve => {
    let state: IFormState = {
      data: {},
      errors: {},
      meta: {},
      focusIndex: 0,
    };

    process.stdin.on("keypress", keyPressHandler);
    renderForm(opts, state);

    function submitForm(data: T) {
      process.stdin.off("keypress", keyPressHandler);
      resolve(data);
    }

    async function keyPressHandler(str: string, key: IKey) {
      key.isChar =
        key.sequence.length === 1 &&
        (key.name === undefined || key.name.length === 1);
      key.str = str;

      let newState = await keyPressReducer(opts.fields, state, key, submitForm);
      processNewState(newState);
    }

    function processNewState(newState: IFormState) {
      // if the state is the exact same, do nothing
      if (newState === state) {
        return;
      }

      state = newState;
      renderForm(opts, state);
    }
  });
}

export type IFormReducerContext = {
  elements: IForm,
  focusPrevious(state: IFormState): IFormState,
  focusNext(state: IFormState): IFormState,
  submit(state: IFormState, data: any): IFormState

  getMeta(state: IFormState, name: string): Record<string, any>
  setMeta(state: IFormState, name: string, newMeta: Record<string, any>): IFormState
}

type IFormRenderContext = {

}



function keyPressReducer(
  form: IForm,
  state: IFormState,
  key: IKey,
  submitForm: (data: any) => void
): IFormState | Promise<IFormState> {
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
      const prevHandler = formElements[prevType]

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
      const nextHandler = formElements[nextType]

      // is the element is focusable, then return state with the index set to that position
      if (nextHandler.isFocusable !== false) {
        return { ...state, focusIndex: nextIndex }
      }
    }

  }

  function submit(_state, data) {
    submitForm(data)
    return _state
  }


  function getMeta(state, name) {
    return state.meta[name] || {}
  }
  function setMeta(state, name, newMeta) {
    return { ...state, meta: { ...state.meta, [name]: newMeta } }
  }

  const formContext: IFormReducerContext = {
    elements: form,
    focusNext,
    focusPrevious,
    submit,
    getMeta,
    setMeta,
  }



  const handler = formElements[currentElement.type]
  if (!handler) {
    throw new Error(`unknown element type ${currentElement.type}`)
  } else if ('onKeyPress' in handler) {
    return handler.onKeyPress(currentElement, state, key, formContext)
  } else {
    return state
  }

}


export async function validateForm(form: IForm, state: IFormState): Promise<{ isValid: boolean, errors: Record<string, any> }> {
  const errors = {}

  for (const element of form) {

    if (!('name' in element)) {
      continue
    }

    const handler = formElements[element.type]

    if (!handler) {
      throw new Error(`unknown element type "${element.type}"`)
    }

    if ('validate' in handler && handler.validate !== undefined) {
      const elementErrors = await handler.validate(element, state)
      if (elementErrors) {
        errors[element.name] = elementErrors
      }
    }
  }

  const isValid = Object.keys(errors).length === 0
  return { isValid, errors }
}

function renderForm(form: IFormOptions, state: IFormState) {
  function write(data) {
    process.stdout.write(data);
  }

  console.clear();
  write("\x1b[3J");

  if (form.debug) {
    write("-------------------\n");

    console.log(JSON.stringify(state));

    write("-------------------\n");
  }

  form.fields.forEach((element, i) => {
    const isFocussed = state.focusIndex === i;

    const handler = formElements[element.type]
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


}
