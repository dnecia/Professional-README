// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `<img src="https://img.shields.io/badge/license-${license}-ff69b4.svg">`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `* [License](#license)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    
    This Project is licensed under ${license}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 


  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}


  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)




  ## Installation
  ${data.installation}
  
  ## Usage 
  ${data.usageInformation}

  ${renderLicenseSection(data.license)}


  ## Contributing 
  ${data.contributionGuidelines}
  
  ## Tests
  To run tests, run the following:
  \`
  ${data.testInstructions}
  \`
  ## Questions
  Questions about this repository? Please contact me at [${
    data.email
  }](mailto:${data.email}). View more of my work in GitHub at [${
    data.github
  }](https://github.com/${data.github}) 
  `;
}

module.exports = generateMarkdown;
