const intern = require("../classes/intern")

test('Can set the school using constructor', () => {
    const testValue = "intern school test"
    const testIntern = new intern("Name", 1, "test@test.com", testValue)
    expect(testIntern.school).toBe(testValue)
})

test("Sets an ID via a constructor", () => {
    const idValue = 5;
    const y = new intern("testName", idValue);
    expect(y.id).toBe(idValue);
})

test("Receives correct callout from getRole() function", () => {
    const z = new intern("Veronica", 15, "Veronica@Veronica.com", "UW");
    expect(z.getRole()).toBe("Intern")
})