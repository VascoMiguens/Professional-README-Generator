const inquirer = require("inquirer");

// Give the Project a name
const projectName = {
  type: "input",
  message: "Project Name: ",
  name: "title",
  validate: (answer) => {
    if (answer) {
      return true;
    } else {
      console.log("Please enter your project name");
      return false;
    }
  },
};

//User selects the format of their description
const description = [
  {
    type: "list",
    message: "Choose an option for the description of your project: ",
    name: "descriptionChoices",
    choices: ["Text and a list", "Text"],
  },
  {
    tpye: "input",
    message: "Enter your description: ",
    name: "descriptionText",
    when: (answer) => answer.descriptionChoices == "Text",
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        console.log("Please enter your description");
        return false;
      }
    },
  },
  {
    tpye: "input",
    message: "Enter a short entry your description list: ",
    name: "descriptionText",
    when: (answer) => answer.descriptionChoices == "Text and a list",
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        console.log("Please enter your description");
        return false;
      }
    },
  },
];

//Function that allows the repition of the same question and saves the result in an array of objects
const list = async (items = []) => {
  const prompts = [
    {
      type: "input",
      name: "item",
      message: "Enter an item to your list: ",
      validate: (answer) => {
        if (answer) {
          return true;
        } else {
          console.log("Please enter an item to your list");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "repeat",
      message: "Enter another item? ",
      default: true,
    },
  ];
  //save the repeat boolean value
  //save answer key-value pair into an object create with spread syntax
  //callback function to be called when the repeat boolean value is checked
  const { repeat, ...answers } = await inquirer.prompt(prompts);
  //create new object and save the answer key-value pair into array
  const newItems = [...items, answers];
  //ternary operatior checks the value of repeat, if truthy call list function, if falst return newItems array
  return repeat ? list(newItems) : newItems;
};

//User selects the format of their project installation guidelines
const installation = [
  {
    type: "confirm",
    message: "Does your project require any installation instruction?",
    name: "installationConfirm",
  },
  {
    type: "list",
    message: "Choose an option for the installation of your project: ",
    name: "installationChoices",
    choices: ["Text", "List"],
    when: (answers) => answers.installationConfirm == true,
  },
  {
    type: "input",
    message: "Installation: ",
    name: "installationText",
    when: (answers) => answers.installationChoices == "Text",
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        console.log("Please provide installation instructions");
        return false;
      }
    },
  },
];

const usage = [
  {
    type: "list",
    message: "How do you want to demonstrate your project?",
    name: "usageChoices",
    choices: ["Gif", "PNG"],
  },
  {
    type: "input",
    message: "Add a sentence to introduce your demo: ",
    name: "usageText",
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        console.log("Please provide a short sentence to introduce your demo");
        return false;
      }
    },
  },
  {
    type: "input",
    message:
      "What is the name of your Gif?(Insert your gif in the utils/dist directory)",
    name: "demoName",
    when: (answer) => answer.usageChoices == "Gif",
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        console.log("Please provide the name of your demo");
        return false;
      }
    },
  },
];

const PNG = async (items = []) => {
  const prompts = [
    {
      type: "input",
      name: "imageDescription",
      message:
        "Describe the Image: (Insert your images in the utils/dist directory)",
      validate: (answer) => {
        if (answer) {
          return true;
        } else {
          console.log("Please enter a description");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "imageName",
      message: "Enter the image name: (Do not insert file type)",
      validate: (answer) => {
        if (answer) {
          return true;
        } else {
          console.log("Please enter the name of the image: ");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "repeat",
      message: "Enter another item? ",
      default: true,
    },
  ];
  //save the repeat boolean value
  //save answer key-value pair into an object create with spread syntax
  //callback function to be called when the repeat boolean value is checked
  const { repeat, ...answers } = await inquirer.prompt(prompts);
  //create new object and save the answer key-value pair into array
  const newItems = [...items, answers];
  //ternary operatior checks the value of repeat, if truthy call list function, if falst return newItems array
  return repeat ? PNG(newItems) : newItems;
};

const remainingQuestions = [
  {
    type: "input",
    message: "How to contribute to your project: ",
    name: "contributing",
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        console.log("Please provide a way to contribute");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Test instructions: ",
    name: "tests",
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        console.log("Please provide test instructions");
        return false;
      }
    },
  },
  {
    type: "list",
    message: "Choose a license: ",
    name: "license",
    choices: [
      {
        value: "Apache License v2.0",
      },
      {
        value: "GNU GENERAL PUBLIC LICENSE v3.0",
      },
      {
        value: "MIT License",
      },
      {
        value: "BSD 2-Clause License",
      },
      {
        value: "BSD 3-Clause License",
      },
      {
        value: "Boost Software License 1.0",
      },
      {
        value: "Creative Commons Zero v1.0 Universal",
      },
      {
        value: "Eclipse Public License v2.0",
      },
      {
        value: "GNU AFFERO GENERAL PUBLIC LICENSE v3.0",
      },
      {
        value: "GNU General Public License v2.0",
      },
      {
        value: "GNU Lesser General Public License v2.1",
      },
      {
        value: "Mozilla Public License v2.0",
      },
      {
        value: "The Unlicense",
      },
      {
        value: "None",
      },
    ],
  },
  {
    type: "input",
    message: "Github Username: ",
    name: "github",
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        console.log("Please provide a github username");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Email: ",
    name: "email",
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        console.log("Please provide your email");
        return false;
      }
    },
  },
];

module.exports = {
  projectName,
  description,
  installation,
  usage,
  remainingQuestions,
  list,
  PNG,
};
