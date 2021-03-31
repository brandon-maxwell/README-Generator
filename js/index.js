const inquirer = require('inquirer');
const fs = require('fs');

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
            choices: ["GNU GPL v3", "MIT", "Mozilla Public License 2.0", "The Unlicense"]
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
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
    ]

const readme = ({username, email, title, description, license, installation, tests, usage, contributing}) => {
    return `
        # ${title}
        ${license}

        ## Description

        ${description}

        ## Table of Contents

        * [Intallation](#installation)

        * [Usage](#usage)

        * [License](#license)

        * [Contributing](#contributing)

        * [Tests](#tests)

        * [Questions](#questions)

        ## Installation

        To install necessary dependencies, run the following command:

        ~~~
        ${installation}
        ~~~

        ## Usage

        ${usage}

        ## License

        This project is licensed under the ${license} license.

        ## Contributing

        ${contributing}

        ## Tests

        To run tests, run the following command:

        ~~~
        ${tests}
        ~~~

        ## Questions

        If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${username}](https://github.com/${username}).


    `
}

inquirer
    .prompt(questions)
    .then((response) => {
        const writeReadme = readme(response)
        fs.writeFile('README.md', writeReadme, (err) =>
            err ? console.error(err) : console.log('Readme successfully created!'))
    });