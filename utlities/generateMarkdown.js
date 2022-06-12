// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge =(license) =>{
  const badges = {
    mit: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    isc: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
    gnuplv3: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

    `

  }
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license)=> {
  const licenseLinks = {
    mit: `[MIT](https://opensource.org/licenses/MIT)`,
    isc: `[isc](https://opensource.org/licenses/ISC)`,
    gnuplv3: `[GNUGPLv3](https://www.gnu.org/licenses/gpl-3.0)

    `

  }
  return licenseLinks[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "mit" || license === "isc" || license === "gnuplv3"){
    
    let badge = renderLicenseBadge(license)
    let link = renderLicenseLink(license)
    return `${badge} ${link}`
  }
  else return

  ''

}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
 let renderedLicense = renderLicenseSection(answers.license)
  return `
  # ${answers.title}
  ## Table of Contents
  - [Project description](#Description)
  - [Useage](#Usage)
  - [Installation](#Installation)
  - [Contributors](#Contributors)
  - [Questions](#Questions)
  - [License](#License)

  ## Description
  ${answers.description}

  ## Usage
  ${answers.usage}

  ## Installation
  ${answers.installation}

  ## Contributors
  ${answers.contributors}

  ## Tests
  ${answers.tests}

  ## Questions
  If you have questions about this project, please contact developer at:
  - email: ${answers.email} 
  - github: [link](https://github.com/${answers.github})

  ## License
  ${renderedLicense}




`
}

module.exports = generateMarkdown;
