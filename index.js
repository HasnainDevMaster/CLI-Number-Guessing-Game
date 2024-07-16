#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Function to generate a random number between 1 and 10
function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
// Configure inquirer prompts
const prompt = inquirer.createPromptModule();
/**
 * Main function to play the Number Guessing Game.
 */
async function main() {
    let attempts = 0;
    let randomNumber = generateRandomNumber(); // Initial random number
    console.log(chalk.blue("Welcome to the Number Guessing Game!"));
    console.log(chalk.gray("I have picked a random number between 1 and 10. Try to guess it!"));
    while (true) {
        const { userGuess } = await prompt({
            type: "input",
            name: "userGuess",
            message: "Your guess:",
            validate: (input) => {
                const parsedInput = parseInt(input, 10);
                if (isNaN(parsedInput) || parsedInput < 1 || parsedInput > 10) {
                    return "Please enter a valid number between 1 and 10.";
                }
                return true;
            },
        });
        const guess = parseInt(userGuess, 10);
        attempts++;
        if (guess === randomNumber) {
            console.log(chalk.green(`Congratulations! You guessed the correct number in ${attempts} attempts!`));
            break; // Exit the loop when the correct number is guessed
        }
        else {
            console.log(chalk.red(`Sorry, the correct number was ${randomNumber}. Try again!`));
            randomNumber = generateRandomNumber(); // Pick a new random number
        }
    }
}
main();
