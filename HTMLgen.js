const fs = require("fs");
const managerCard = [];
const internCards = [];
const engineerCards = [];

function HTMLgen(teamArray) {
    for (let i = 0; i < teamArray.length; i++) {
        if (teamArray[i].getRole() === "Intern") {
            let card =
                `<h3> My name is ${teamArray[i].empName} </h3>
            <h3> My id is ${teamArray[i].id} </h3>
            <h3> Send an email to me at: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></h3>
            <h3> My school is ${teamArray[i].school} </h3>`

            internCards.push(card)
        }
        else if (teamArray[i].getRole() === "Engineer") {
            let card =
                `<h3> My name is ${teamArray[i].empName} </h3>
            <h3> My id is ${teamArray[i].id} </h3>
            <h3> Send an email to me at: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></h3>
            <h3> My GitHub profile is found <a href="github.com/${teamArray[i].gitHub}" target="_blank">Here</a> </h3>`

            engineerCards.push(card)
        }
        else if (teamArray[i].getRole() === "Manager") {
            let card =
                `<h3> My name is ${teamArray[i].empName} </h3>
            <h3> My id is ${teamArray[i].id} </h3>
            <h3> Send an email to me at: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></h3>
            <h3> My office number is ${teamArray[i].officeNumber} </h3>`

            managerCard.push(card)
        }
    }

    const HTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <div class="jumbotron">
    <h1 class="display-4">New Project Team</h1>
    <p class="lead">In an actual project there would be a project description here</p>
    <hr class="my-4">
    <p>Below are the team members for this project:</p>
    </div>
    <body class="row">
    <div class="card border-success col-md" style="width: 18rem;">
    <div class="card-body">
        <p>Project Manager</p>
        <p class="card-text">
        ${managerCard}
    </div>
    </div>
    <div class="card border-danger col-md" style="width: 18rem;">
    <div class="card-body">
        <p>Team Engineers</p>
        <p class="card-text">
        ${engineerCards}
        </p>
    </div>
    </div>
    <div class="card border-warning col-md" style="width: 18rem;">
    <div class="card-body">
        <p>Project Interns</p>
        <p class="card-text">
        ${internCards}
        </p>
    </div>
    </div>
    </body>
    </html>
`;
    fs.writeFile('index.html', HTML, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });
};

module.exports = HTMLgen