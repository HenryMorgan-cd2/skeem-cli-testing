import chalk from "chalk"

export function highlight(word, needle) {
  return word.split(needle).join(chalk.red(needle))
}

"Hello\u001b[31mWorld\u001b[39m!"

const ansiStrings = {
  red: "\u001b[31m",
  black: "\u001b[39m"
}

// export function matches(path: string[], query: string) {
//   query = query.toLowerCase()
//   const result = [""]
//   const parts = query.split(/\s*/)

//   let pathIndex = 0
//   let pathPart = path[0]
//   let char = parts.shift()

//   let isOpen = false

//   function open() {
//     const symbol = isOpen ? "" : "["
//     isOpen = true
//     return symbol
//   }

//   function close() {
//     const symbol = isOpen ? "]" : ""
//     isOpen = false
//     return symbol
//   }

//   while (char && pathPart) {
//     let i = pathPart.toLowerCase().indexOf(char)

//     while (pathPart && i === -1) {
//       result[pathIndex] += close() + pathPart
//       pathPart = path[++pathIndex]
//       if (!pathPart) return false
//       result[pathIndex] = ""
//       i = pathPart.toLowerCase().indexOf(char)
//     }

//     if (i === -1) return false

//     if (i === 0) {
//       result[pathIndex] += open() + pathPart[0]
//     } else {
//       result[pathIndex] += close() + pathPart.slice(0, i) + open() + pathPart.slice(i, i + 1)
//     }

//     pathPart = pathPart.slice(i + 1)

//     if (!pathPart) {
//       result[pathIndex] += close()
//       pathPart = path[++pathIndex]
//       if (pathPart) {
//         if (isOpen) {
//           isOpen = false
//           result[pathIndex] = open()
//         } else {
//           result[pathIndex] = ""
//         }
//       }
//     }

//     char = parts.shift()
//     if (!pathPart && char) return false
//   }
//   if (pathPart) result[pathIndex] += close() + pathPart
//   return result.concat(path.slice(result.length))
// }

export function matches(haystack, needle) {
  let index = 0
  let highlighted = ""
  const seachLower = haystack.join("$").toLowerCase()
  const seach = haystack.join("$")
  for (const letter of needle) {
    const idx = seachLower.indexOf(letter, index)
    if (idx > -1) {
      highlighted += seach.slice(index, idx)
      highlighted += chalk.red(letter)
      index = idx + 1
    } else {
      return false
    }
  }
  highlighted += seach.slice(index)
  return highlighted.split("$")
}

export function arrayWrap<T>(el: T | T[]): T[] {
  return Array.isArray(el) ? el : [el]
}