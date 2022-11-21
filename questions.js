module.exports = [
  {
    type: "input",
    message: "Project name: ",
    name: "title",
  },
  {
    type: "input",
    message: "Description of your project: ",
    name: "description",
  },
  {
    type: "confirm",
    message: "Does your project require any installation instruction?",
    name: "requiresInstallation",
  },
  {
    type: "input",
    message: "Usage Information:",
    name: "usage",
  },
  {
    type: "input",
    message: "How to contribute to your project: ",
    name: "contrites",
  },
  {
    type: "input",
    message: "Test instructions: ",
    name: "test",
  },
  {
    type: "list",
    message: "Choose a license: ",
    name: "license",
    choices: [
      {
        value: "Apache", //Apache License Version 2.0
      },
      {
        value: "GNU Version 3.0", //GNU GENERAL PUBLIC LICENSE Version 3
      },
      {
        value: "MIT", //MIT License
      },
      {
        value: "BSD 2-Clause", //
      },
      {
        value: "BSD 3-Clause", //BSD 2-Clause License
      },
      {
        value: "Boost Software License", //BSD 3-Clause License
      },
      {
        value: "Creative Commons Zero v1.0 Universal", //Creative Commons Zero v1.0 Univrersal
      },
      {
        value: "Eclipse", //Eclipse Public License - v 2.0
      },
      {
        value: "GNU AFFERO", //GNU AFFERO GENERAL PUBLIC LICENSE Version 3
      },
      {
        value: "GNU Version 2.0", //GNU GENERAL PUBLIC LICENSE Version 2
      },
      {
        value: "GNU Lesser", //GNU LESSER GENERAL PUBLIC LICENSE Version 2.1
      },
      {
        value: "Mozilla", //Mozilla Public License Version 2.0
      },
      {
        value: "The Unlicense", //The Unlicense
      },
      {
        value: "None",
      },
    ],
  },
  {
    type: "input",
    message: "Github Username: ",
    name: "username",
  },
  {
    type: "input",
    message: "Email: ",
    name: "email",
  }
];