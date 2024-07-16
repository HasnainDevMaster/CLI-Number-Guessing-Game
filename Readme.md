CLI Number Guessing Game 🎲
============================
Welcome to the CLI Number Guessing Game! This project is a simple command-line game built using TypeScript. Players try to guess a randomly generated number within a specific range.

Features 🌟

Random Number Generation: The game generates a random number between 0 and 9 for players to guess.
User Input: Players input their guesses via the command line.
Feedback: After each guess, the game provides feedback on the actual number.
User-Friendly Interface: Enjoy easy gameplay with a clean interface.
Statically-Typed Code: Written in TypeScript for improved code maintainability and scalability.

Prerequisites: 🛠️

Before running the game, ensure you have the following installed:

Node.js: To run the game, you’ll need Node.js installed on your system. You can download it from nodejs.org.
TypeScript: The game is written in TypeScript, so you’ll need to install TypeScript. Use the following command in your terminal:
npm install -g typescript

Installation: 🚀

Clone this repository to your local directory:
git clone https://github.com/HasnainDevMaster/CLI-Number-Guessing-Game.git

Install the dependencies by running the following command in your terminal (cmd):
npm install

Additionally, install inquirer for user input prompts:
npm i inquirer

Running the Game: ▶️

To play the game, use the following command in your terminal (cmd):

tsc && node index.js

Example: 🎯

Welcome to the Number Guessing Game!
I have picked a random number between 1 and 10. Try to guess it!
? Your guess: 1
Sorry, the correct number was 7. Try again!
? Your guess: 4
Sorry, the correct number was 8. Try again!
? Your guess: 7
Sorry, the correct number was 8. Try again!
? Your guess: 7
Sorry, the correct number was 8. Try again!
? Your guess: 8
Sorry, the correct number was 1. Try again!
? Your guess: 5
Sorry, the correct number was 1. Try again!
? Your guess: 5
Congratulations! You guessed the correct number in 7 attempts! 🎉

Note: 📝

This application only accepts integers as input.

Conclusion: 🎈

Congratulations! Whether you guessed the correct number quickly or took a few attempts, the thrill of anticipation and the joy of hitting the bullseye are what make this game so engaging. Happy guessing! 🚀