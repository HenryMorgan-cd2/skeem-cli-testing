import * as inquirer from "inquirer"
import { questions } from "./prebuiltQuestions"
// inquirer.registerPrompt("autocomplete", require("inquirer-autocomplete-prompt"))

const migrationsTypes = [
  "models/create",
  "models/remove",
  "models/attributes/create",
  "models/attributes/update",
  "models/attributes/destroy",
  "models/scopes/create",
  "models/scopes/update",
  "models/scopes/destroy",
  "models/permissions",
  "sessions/providers/create",
  "roles/create",
  "models/activateLive"
]

async function runMigrationWizard() {
  console.log("Create Migration")
  const { type } = await inquirer.prompt({
    type: "list",
    name: "type",
    message: "type:",
    choices: migrationsTypes
  })

  const data = await getDataForType(type)

  console.log({ type, data })

  const result: any = await inquirer.prompt({
    type: "confirm",
    name: "confirm",
    message: "Is this correct?",
    default: false
  })
  if (result.confirm) {
    console.log("created")
    return data
  } else {
    return null
  }
}

const typeHandlers = {
  "models/create": async () => {
    const answers = await inquirer.prompt([questions.word("name", "model name:")])
    return answers
  },
  "models/attributes/create": async () => {
    const answers: any = await inquirer.prompt([
      questions.word("model"),
      questions.word("name"),
      {
        type: "list",
        name: "type",
        message: "type:",
        choices: [
          "string",
          "number",
          "boolean",
          "date",
          "association",
          "image",
          "password",
          "computed",
          "uuid"
        ]
      }
    ])

    answers.data = await getDataForAttributeType(answers.type)
    return answers
  }
}

async function defaultHandler() {
  const { data } = await inquirer.prompt([questions.json("data")])
  return data
}

async function getDataForType(type: string) {
  let handler = typeHandlers[type]
  if (!handler) {
    handler = defaultHandler
  }
  const data = await handler()
  return data
}

const attributeDataHandlers = {
  string() {
    return {}
  },
  association() {
    return inquirer.prompt([
      questions.word("model", "association model:"),
      {
        name: "many",
        type: "list",
        message: "association type:",
        choices: ["many", "one"],
        filter: choice => choice === "many"
      }
    ])
  }
}

async function getDataForAttributeType(type: string) {
  let handler = attributeDataHandlers[type]
  if (!handler) {
    handler = defaultHandler
  }
  const data = await handler()
  return data
}

runMigrationWizard().then(() => process.exit())
