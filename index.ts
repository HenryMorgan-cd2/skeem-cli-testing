import readline from "readline";
import { runForm } from './src/form'

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode!(true);

process.stdin.on("keypress", (str: string, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit();
  }
});


async function run() {


  const results = await runForm([
    { type: "string", name: "name", validations: { presence: true } },
    { type: "string", name: "body" },
    { type: "boolean", name: "published" },
    {
      type: "select",
      name: "color",
      options: ["green", "blue", "yellow"],
    },
    { type: "space" },
    {
      type: "button", name: "Submit", onClick(context: any) {
        context.submit()
      }
    },
    {
      type: "button", name: "Cancel", onClick(context: any) {
        context.cancel()
      }
    }
  ])
  console.log(results);
}
run();
