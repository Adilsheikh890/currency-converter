#! /usr/bin/env node 
import inquirer from "inquirer";
let Converation = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1,
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1,
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1,
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Courrency :"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your converation Courrency :"
    },
    {
        type: "number",
        name: "amount",
        choices: ["PKR", "USD", "GBP"],
        message: "Enter Your converation Amount :"
    },
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = Converation[from][to] * amount;
    console.log(`your converation from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid Inputs");
}
