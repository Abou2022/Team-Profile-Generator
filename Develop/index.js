const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./util/generateHtml");

const fs = require("fs");
const teamMembers = [];

//promprt team member with their information
//email link operationel from html
//github link operationel from html
//run the app in the terminal i got the question
//menu choice with option
//file out my choice form
//after chool go back to the menu
//exit application and generate my html

function promptManager() {
  return inquirer
    .prompt([
      {
        // prompted to enter the team manager’s name
        type: "input",
        name: "name",
        message: "What is your name? (Required)",
      },
      {
        //prompted to enter the team manager’s employee ID
        type: "input",
        name: "employeeId",
        message: "What is your employee ID? (Required)",
      },
      {
        //prompted to enter the team manager’s employee email
        type: "input",
        name: "email",
        message: "What is your email address?(Required)",
      },
      {
        //prompted to enter the team manager’s employee Office number
        type: "input",
        name: "officeNumber",
        message: "What is your office number?(Required)",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      promptMenu();
    });
}

function promptMenu() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please select your option",
        choices: ["add an Engineer", "add an Intern", "finish with my team"],
      },
    ])
    .then((userChoice) => {
      //I gonna use switch to catch user choice
      switch (userChoice.menu) {
        case "add an Engineer":
          promptEngineer();
          break;
        case "add an Intern":
          promptIntern();
          break;

        default:
          buildTeam();
      }
    });
}

function promptEngineer() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineer name? (Required)",
      },
      {
        //prompted to enter the team Engineer’s employee ID
        type: "input",
        name: "employeeId",
        message: "What is your employee ID? (Required)",
      },
      {
        //prompted to enter the team Engineer’s employee email
        type: "input",
        name: "email",
        message: "What is your email address?(Required)",
      },
      {
        //prompted to enter the team Engineer’s employee github
        type: "input",
        name: "githubUserName",
        message: "What is your git hub profile name?(Required)",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.githubUserName
      );
      teamMembers.push(engineer);
      promptMenu();
    });
}

function promptIntern() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Intern name? (Required)",
      },
      {
        //prompted to enter the team Intern’s employee ID
        type: "input",
        name: "employeeId",
        message: "What is your employee ID? (Required)",
      },
      {
        //prompted to enter the team Intern’s employee email
        type: "input",
        name: "email",
        message: "What is your email address?(Required)",
      },
      {
        //prompted to enter the team Intern’s employee school
        type: "input",
        name: "school",
        message: "What is your office number?(Required)",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      promptMenu();
    });
}

function buildTeam() {
  //   if (!fs.existsSync(DEVELOP_DIR)) {
  //     fs.mkdirSync(DEVELOP_DIR);
  //   }
  fs.writeFileSync(`./team/myteam.html`, generateHtml(teamMembers), "utf-8");
}

promptManager();
