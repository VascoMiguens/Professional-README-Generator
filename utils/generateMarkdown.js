//get the name of the license chosen by the user and render the badge
let renderLicenseBadge = (license) => {
  if (license !== "None") {
    return `![${license}](https://img.shields.io/badge/license-${license}-blue.svg})`;
  }
};

//get the name of the license chosen by the user and return the appropriate link
let renderLicenseLink = (license) => {
  if (license !== "None") {
    switch (license) {
      case "Apache":
        return "https://choosealicense.com/licenses/apache-2.0/ ";
      case "GNU Version 3.0":
        return "https://choosealicense.com/licenses/gpl-3.0/";
      case "MIT":
        return "https://choosealicense.com/licenses/mit/";
      case "BSD 2-Clause":
        return "https://choosealicense.com/licenses/bsd-2-clause/";
      case "BSD 3-Clause":
        return "https://choosealicense.com/licenses/bsd-3-clause/";
      case "Boost Software License":
        return "https://choosealicense.com/licenses/bsl-1.0/";
      case "Creative Commons Zero v1.0 Universal":
        return "https://choosealicense.com/licenses/cc0-1.0/";
      case "Eclipse":
        return "https://choosealicense.com/licenses/lgpl-3.0/";
      case "GNU AFFERO":
        return "https://choosealicense.com/licenses/agpl-3.0/";
      case "GNU Version 2.0":
        return "https://choosealicense.com/licenses/gpl-2.0/";
      case "GNU Lesser":
        return "https://choosealicense.com/licenses/lgpl-2.1/";
      case "Mozilla":
        return "https://choosealicense.com/licenses/mpl-2.0/";
      case "The Unlicense":
        return "https://choosealicense.com/licenses/unlicense/";
    }
  }
};

//depending on the license chosen by the user this function will render the markdown with license name and link returned by the renderLicenseLink function
let renderLicenseSection = (license) => {
  if (license !== "None") {
    return `## License 
        This project is licensed under the ${license} license.
        To know more about this license visit:
            * ${renderLicenseLink(license)}`;
  }
};

let renderDescription = (description) => {
  if (description !== undefined) {
    return `${description
      .map((descriptionItem) => `\n* ${descriptionItem.descriptionItem}`)
      .join("")}`;
  }
};
//generate the markdown for the readme using the answers from the user
let generateMarkdown = (data) => {
  console.log(data);
  return `# ${data[0].title}


${renderLicenseBadge(data[5].license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Licenses](#license)
* [Questions](#questions)
  
## Description
${data[1].descriptionText}
${renderDescription(data[2])}

## Installation
${data[0].installation}

## Usage
${data[5].usageText}

## Contributing
${data[5].contributing}

## Tests
${data[5].tests}

${renderLicenseSection(data[5].license)}

## Questions
Any questuons about this project refer to:
  * [Github](${data[5].github})
  * [Email](${data[5].email})`;
};

module.exports = generateMarkdown;
