const manager = require("../classes/manager")

test('Can set the office number using constructor', () => {
    const officeNumb = 6
    const testManager = new manager("Name",1,"test@test.com", officeNumb)
    expect(testManager.officeNumber).toBe(officeNumb)
})

test("Sets an employee name via a constructor", () => {
    const testName = "Betty";
    const y = new manager(testName);
    expect(y.empName).toBe(testName);
})

test("Receives correct callout from getRole() function", () => {
    const z = new manager("Betty", 10, "Betty@Betty.com", 3);
    expect(z.getRole()).toBe("Manager")
})