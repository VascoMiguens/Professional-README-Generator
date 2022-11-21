let renderLicenseBadge = (license) => {
  if (license !== "None") {
    return `![${license}](https://img.shields.io/badge/license-${license}-blue.svg})`;
  }
};

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

let renderLicenseSection = (license) => {
    if (license !== "None") {
        return `## License 
        This project is licensed under the ${license} license.
        To know more about this license visit:
            * ${renderLicenseLink(license)}`;
    }
};




