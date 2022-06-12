//Creates Badge with link for license
const renderLicenseBadge = (license) => {
  const badges = {
    mit: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    isc: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
    gnuplv3: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
  }
  return badges[license]
}

//returns badge for license
function renderLicenseSection(license) {
  if (license === "mit" || license === "isc" || license === "gnuplv3") {
    let badge = renderLicenseBadge(license)
    return ` ${badge} `
  } else return

  ;("")
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  let renderedLicense = renderLicenseSection(answers.license)
  return `

  # ${answers.title}
  
  ${renderedLicense}

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
  - ${answers.email} 
  - [GitHub](https://github.com/${answers.github})

  ## License
  ${renderedLicense}


`
}

module.exports = generateMarkdown
