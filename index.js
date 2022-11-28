const questions = require("./utils/questions.js");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

//
const writetoFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./utils/dist/README.md", data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: console.log(
          "Success! Retrieve your README.md file in utils/dist folder!"
        ),
      });
    });
  });
};

//Initiate app and call inquirer to follow the desired question order and save the answers in const variables
const initApp = async () => {
  const projectTitle = await inquirer.prompt(questions.projectName);
  const projectDescription = await inquirer.prompt(questions.description);
  let descriptionList, installationList, usagePNG;
  /*if the user chose the list option for the description call the list function*/
  if (projectDescription.descriptionChoices == "Text and a list") {
    descriptionList = await questions.list();
  }
  const projectInstallation = await inquirer.prompt(questions.installation);
  /*if the user chose the list option for the installation call the list function*/
  if (projectInstallation.installationChoices == "List") {
    installationList = await questions.list();
  }
  const projectUsage = await inquirer.prompt(questions.usage);
  if (projectUsage.usageChoices == "PNG") {
    usagePNG = await questions.PNG();
  }
  //call the remaining questions
  const remainingQuestions = await inquirer.prompt(
    questions.remainingQuestions
  );

  return [
    projectTitle,
    projectDescription,
    descriptionList,
    projectInstallation,
    installationList,
    projectUsage,
    usagePNG,
    remainingQuestions,
  ];
};

initApp()
  .then((questionsInfo) => {
    return generateMarkdown(questionsInfo);
  })
  .then((readmeFile) => {
    return writetoFile(readmeFile);
  })
  .catch((err) => {
    console.log(err);
  });
