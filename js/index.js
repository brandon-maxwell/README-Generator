// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions =
    [
        {
            type: 'input',
            name: 'username',
            message: 'Enter GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'Project Title:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project:',
            choices: ["GNU GPL v3", "MIT", "Mozilla Public License 2.0", "The Unlicense", "none"]
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be run to install dependencies?',
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
            default: 'npm run test'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?',
        },
        {
            type: 'input',
            name: 'file',
            message: 'What do you want to name your file?',
            default: 'README.md'
        },
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, util(data), (err) =>
            err ? console.error(err) : console.log('Readme successfully created!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile(response.file, response)
    })
}
// Function call to initialize app
init();