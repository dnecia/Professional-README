// Packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your Project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your Project?",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your project?",
  },
  {
    type: "input",
    name: "usageInformation",
    message: "How do you use this project?",
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "How can someone contribute to this project?",
  },
  {
    type: "input",
    name: "testInstructions",
    message: "How do you test this project?",
  },
  {
    type: "list",
    name: "license",
    message: "What is the license your project will use?",
    choices: ["ISC", "MIT", "GNU", "APACHE2.0", "none"],
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your e-mail",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your github username",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(path.join(fileName), data, (err) => {
    if (err) throw err;
    console.log("Information successfully transferred to README");
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown({ ...userInput }));
  });
}

// Function call to initialize app
init();
