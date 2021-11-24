const Employee = require("./employee")

class Intern extends Employee {
    constructor(empName, id, email, school) {
        super(empName, id, email)
        this.school = school
    }
    getRole() {
        console.log("Intern")
        return "Intern";
    }
}

module.exports = Intern;