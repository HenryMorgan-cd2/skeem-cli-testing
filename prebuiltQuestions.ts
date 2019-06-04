export const questions = {
  word: (name: string, message = `${name}:`) => {
    const validate = (input: string) => {
      // TODO: test if model name is taken
      if (!/^\w+$/.test(input)) {
        return "must only contain letters"
      } else {
        return true
      }
    }

    return { type: "text", name, message, validate }
  },
  json: (name: string, message = `${name}:`) => {
    return {
      type: "text",
      name,
      message,
      default: "{}",
      filter: ans => {
        try {
          return JSON.parse(ans)
        } catch {
          throw `Invalid JSON: ${ans}`
        }
      }
    }
  }
}
