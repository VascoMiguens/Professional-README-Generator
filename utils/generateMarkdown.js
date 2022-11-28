//get the name of the license chosen by the user and render the badge
let renderLicenseBadge = (license) => {
  let badge;
  switch (license) {
    case "Apache License v2.0":
      badge = "Apache_2.0";
      break;
    case "GNU GENERAL PUBLIC LICENSE v3.0":
      badge = "GPLv3";
      break;
    case "MIT License":
      badge = "MIT";
      break;
    case "BSD 2-Clause License":
      badge = "BSD_2--Clause";
      break;
    case "BSD 3-Clause License":
      badge = "BSD_3--Clause";
      break;
    case "Boost Software License 1.0":
      badge = "Boost_1.0";
      break;
    case "Creative Commons Zero v1.0 Universal":
      badge = "CCO_1.0";
      break;
    case "Eclipse Public License v2.0":
      badge = "EPL_1.0";
      break;
    case "GNU AFFERO GENERAL PUBLIC LICENSE v3.0":
      badge = "AGPL_v3";
      break;
    case "GNU General Public License v2.0":
      badge = "GPL_v2";
      break;
    case "GNU Lesser General Public License v2.1":
      badge = "LGPL_v3";
      break;
    case "Mozilla Public License v2.0":
      badge = "MPL_2.0";
      break;
    case "The Unlicense":
      badge = "Unlicense";
      break;
  }
  if (license !== "None") {
    return `![${license}](https://img.shields.io/badge/license-${badge}-blue.svg)`;
  }
  return "";
};

//get the name of the license chosen by the user and return the appropriate link
let renderLicenseLink = (license) => {
  if (license !== "None") {
    switch (license) {
      case "Apache License v2.0":
        return "https://choosealicense.com/licenses/apache-2.0/ ";
      case "GNU GENERAL PUBLIC LICENSE v3.0":
        return "https://choosealicense.com/licenses/gpl-3.0/";
      case "MIT License":
        return "https://choosealicense.com/licenses/mit/";
      case "BSD 2-Clause License":
        return "https://choosealicense.com/licenses/bsd-2-clause/";
      case "BSD 3-Clause License":
        return "https://choosealicense.com/licenses/bsd-3-clause/";
      case "Boost Software License":
        return "https://choosealicense.com/licenses/bsl-1.0/";
      case "Creative Commons Zero v1.0 Universal":
        return "https://choosealicense.com/licenses/cc0-1.0/";
      case "Eclipse Public License v2.0":
        return "https://choosealicense.com/licenses/lgpl-3.0/";
      case "GNU AFFERO GENERAL PUBLIC LICENSE v3.0":
        return "https://choosealicense.com/licenses/agpl-3.0/";
      case "GNU General Public License v2.0":
        return "https://choosealicense.com/licenses/gpl-2.0/";
      case "GNU Lesser General Public License v2.1":
        return "https://choosealicense.com/licenses/lgpl-2.1/";
      case "Mozilla Public License v2.0":
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
  return "";
};

let renderList = (list) => {
  if (list !== undefined) {
    return `${list.map((listItem) => `\n * ${listItem.item}`).join("")}`;
  }
  return "";
};

let renderInstallation = (choices, installation) => {
  if (choices.installationChoices == "Text") {
    return `## Installation \n ${choices.installationText}`;
  } else if (choices.installationChoices == "List") {
    return `## Installation \n ${installation
      .map((installationItem) => `\n* ${installationItem.item}`)
      .join("")}`;
  }
};

let renderUsage = (choices, usage, githubUsername, projectTitle) => {
  if (choices.usageChoices === "Gif") {
    return `## Usage \n ${choices.usageText} \n ![til](https://github.com/${githubUsername}/${projectTitle}/blob/main/util/image/${choices.demoName}.gif)`;
  } else if (choices.usageChoices === "PNG") {
    return `## Usage \n ${choices.usageText} ${usage.map(
      (item) =>
        `\n ${item.imageDescription} \n !([]https://github.com/${githubUsername}/${projectTitle}/blob/main/assets/${item.imageName}.png)`
    )}`;
  }
};

let contentsInstallation = (confirm) => {
  if (confirm.installationConfirm === true) {
    return ` *[Installation](#installation)`;
  }
  return "";
};

let contentsLicense = (value) => {
  if (value !== "None") {
    return `* [License](#license)`;
  }
  return "";
};

//generate the markdown for the readme using the answers from the user
let generateMarkdown = (data) => {
  return `# ${data[0].title} ${renderLicenseBadge(data[7].license)}

## Table of Contents
* [Description](#description)
${contentsInstallation(data[3])}
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
${contentsLicense(data[7].license)}
* [Questions](#questions)
  
## Description
${data[1].descriptionText}
${renderList(data[2])}

${
  data[3].installationConfirm == true
    ? renderInstallation(data[3], data[4])
    : ""
}

${renderUsage(data[5], data[6], data[7].github, data[0].title)}
## Contributing
${data[7].contributing}
## Tests
${data[7].tests}

${renderLicenseSection(data[7].license)}

## Questions
Any questions about this project refer to:
  * [Github](${data[7].github})
  * [Email](${data[7].email})`;
};

module.exports = generateMarkdown;
