// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./src/generateMarkdown.js");
console.log(inquirer);

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your Project?",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your project?",
    },
    {
      type: "input",
      name: "usage information",
      message: "How do you use this project?",
    },
    {
      type: "input",
      name: "contribution guidelines",
      message: "How can someone contribute to this project?",
    },
    {
      type: "input",
      name: "test instructions",
      message: "How do you test this project?",
    },
  ])
  .then((answers) => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Information successfully transferred to README");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then;
}

// Function call to initialize app
init();
