"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ansi_1 = __importDefault(require("ansi"));
const cursor = ansi_1.default(process.stdout);
class BufferedLogger {
    newBuffer() {
        let fullText = "";
        return {
            print(text) {
                fullText += text;
            },
            println(text) {
                fullText += `${text}\n`;
            },
            flush: (opts = {}) => {
                this.flush(fullText, opts);
                fullText = "";
            }
        };
    }
    flush(text, opts = {}) {
        const lines = text.replace(/\n$/, "").split("\n");
        if (!opts.full && this.lastLines) {
            const diff = lines.reduce((acc, line, i) => {
                const lastLine = this.lastLines[i];
                if (line !== lastLine) {
                    acc[i] = line;
                }
                return acc;
            }, {});
            for (const index in diff) {
                cursor.goto(0, Number(index) + 1);
                cursor.eraseLine();
                cursor.write(diff[index]);
            }
            let numberOfLinesRemoved = this.lastLines.length - lines.length;
            while (numberOfLinesRemoved-- > 0) {
                cursor.goto(0, lines.length + numberOfLinesRemoved + 1);
                cursor.eraseLine();
            }
        }
        else {
            console.clear();
            process.stdout.write("\x1b[3J");
            lines.forEach((line, i) => {
                if (i !== 0) {
                    cursor.write("\n");
                }
                cursor.write(line);
            });
        }
        this.lastLines = lines;
    }
}
exports.BufferedLogger = BufferedLogger;
