const employee = require("../classes/employee");

test("Can set name via a constructor", () => {
   const name = 'Allen';
   const x = new employee(name);
   expect(x.empName).toBe(name);
});

test("Sets an ID via a constructor", () => {
    const idValue = 5;
    const y = new employee("test", idValue);
    expect(y.id).toBe(idValue);
})

test("Receives correct callout from getRole() function", () => {
    const z = new employee("Timmy", 10, "Timmy@timmy.com");
    expect(z.getRole()).toBe("Employee")
})


