const inquirer = require("inquirer")
const Engineer = require("./classes/engineer")
const Intern = require("./classes/intern")
const Manager = require("./classes/manager")
const HTMLgen = require("./HTMLgen")
const teamArray = []

function managerQuestion() {
    inquirer.prompt([
        {
            type: "input",
            name: "empName",
            message: "Please enter your name",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter you office number",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your employee ID number",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email",
        },
    ])
        .then((answers) => {
                let manager = new Manager(answers.empName, answers.id, answers.email, answers.officeNumber)
                teamArray.push(manager)
                teamQuestions()
        })
}

function teamQuestions() {
    inquirer.prompt([
        {
            type: "list",
            name: "employeeType",
            message: "Please select the type of employee card you would like to create",
            choices: ["Intern", "Engineer"],
        },
        // engineer question
        {
            type: "input",
            name: "gitHub",
            message: "Please enter your GitHub username",
            when: (answers) => answers.employeeType === "Engineer"
        },
        // intern question
        {
            type: "input",
            name: "school",
            message: "Please enter your school name",
            when: (answers) => answers.employeeType === "Intern"
        },
        // employee questions
        {
            type: "input",
            name: "empName",
            message: "Please enter your name",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your employee ID number",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email",
        },
    ])
        .then((answers) => {
            if (answers.employeeType === "Engineer") {
                let engineer = new Engineer(answers.empName, answers.id, answers.email, answers.gitHub)
                teamArray.push(engineer)
            }
            else {
                let intern = new Intern(answers.empName, answers.id, answers.email, answers.school)
                teamArray.push(intern)
            }
            addTeamMember()
        })
}

function addTeamMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "addEmployee",
            message: "Would you like to create another employee?",
            choices: [
                "Yes",
                "No",
            ],
        },
    ])
        .then((answers) => {
            if (answers.addEmployee === "Yes") {
                teamQuestions()
            }
            else {
                HTMLgen(teamArray);
            }
        })
}

managerQuestion();