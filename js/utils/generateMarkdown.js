// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let badge

function renderLicenseBadge(license) {
  if (license == 'none') {
    return '';
  } else if (license === "GNU GPL v3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (license === "The Unlicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license == 'none') {
   return ''; 
  } else if (license === 'GNU GPL v3') {
    return  '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'MIT') {
    return  '[MIT](https://opensource.org/licenses/MIT)'
  } else if (license === 'Mozilla Public License 2.0') {
    return  '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)'
  } else if (license === 'The Unlicense') {
    return  '[The Unlicense](http://unlicense.org/)'
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return ``;
  } else {
    return `## License 
This project is licensed under the ${renderLicenseLink(license)} license.`
  }
}
// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ username, email, title, description, license, installation, tests, usage, contributing }) => {
  return `# ${title}
${renderLicenseBadge(license)}

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

${renderLicenseSection(license)}

## Contributing
${contributing}

## Tests
To run tests, run the following command:
~~~
${tests}
~~~

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${username}](https://github.com/${username}).`
}

module.exports = generateMarkdown;
