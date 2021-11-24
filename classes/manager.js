const Employee = require("./employee")

class Manager extends Employee {
    constructor(empName, id, email, officeNumber) {
        super(empName, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        console.log("Manager")
        return "Manager";
    }
}

module.exports = Manager;