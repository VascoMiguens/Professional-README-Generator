const questions = require("./utils/questions.js");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

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
  .catch((err) => {
    console.log(err);
  });
