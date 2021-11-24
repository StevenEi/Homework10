class Employee {
    constructor(empName, id, email) {
        this.empName = empName
        this.id = id
        this.email = email
    }
    getName() {
        console.log(this.empName)
        return this.empName;
    }
    getID() {
        console.log(this.id)
        return this.id;
    }
    getEmail() {
        console.log(this.email)
        return this.email;
    }
    getRole() {
        console.log("Employee")
        return "Employee";
    }
}

module.exports = Employee;