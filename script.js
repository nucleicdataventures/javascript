const x = 10
const y = true

var firstVariable = "This is the value"

prompt = require("prompt-sync")()

const name = prompt("What is your name? ")

console.log(`Hello, ${name}! Welcome to JavaScript learning.`)

if (true) {
    let secondVariable = 50
    console.log(secondVariable)
}
console.log(firstVariable)

console.log(Number(x) + Number(y)) // 11

console.log(x == "10")