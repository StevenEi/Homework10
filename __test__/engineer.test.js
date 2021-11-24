const engineer = require("../classes/engineer")

test('Can set the GitHub account using constructor', () => {
    const testValue = "gitHubtest"
    const testEngineer = new engineer("Name",1,"test@test.com", testValue)
    expect(testEngineer.gitHub).toBe(testValue)
})

test("Sets an email via a constructor", () => {
    const testEmail = "engineeremail@emailcom";
    const y = new engineer("Bill", 2, testEmail);
    expect(y.email).toBe(testEmail);
})

test("Receives correct callout from getRole() function", () => {
    const z = new engineer("Billy", 10, "Billy@billy.com", "Billgithub");
    expect(z.getRole()).toBe("Engineer")
})