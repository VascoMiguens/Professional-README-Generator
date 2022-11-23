const questions = require("./utils/questions.js");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

const writeToFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("README.md", data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: console.log(
          'Success! Go the "dist" folder to review your README.md file!'
        ),
      });
    });
  });
};

//Initiate app and call inquirer to follow the desired question order and save the answers in const variables
const initApp = async () => {
  const projectTitle = await inquirer.prompt(questions.projectName);
  const projectDescription = await inquirer.prompt(questions.description);
  let descriptionList, installationList;
  /*if the user chose the list option for the description 
    give the question a name and call the list function*/
  if (projectDescription.descriptionChoices == "Text and a list") {
    const descriptionListName = "descriptionItem";
    descriptionList = await questions.list(descriptionListName);
  }
  const projectInstallation = await inquirer.prompt(questions.installation);
  /*if the user chose the list option for the installation 
    give the question a name and call the list function*/
  if (projectInstallation.installationChoices == "List") {
    const installationListName = "installationItem";
    installationList = await questions.list(installationListName);
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
    remainingQuestions,
  ];
};

initApp()
  .then((questionsInfo) => {
    return generateMarkdown(questionsInfo);
  })
  .then((readmeFile) => {
    return writeToFile(readmeFile);
  })
  .catch((err) => {
    console.log(err);
  });
