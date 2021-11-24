const Employee = require("./employee")

class Engineer extends Employee {
    constructor(empName, id, email, gitHub) {
        super(empName, id, email)
        this.gitHub = gitHub
    }
    getRole() {
        console.log("Engineer")
        return "Engineer";
    }
}

module.exports = Engineer;