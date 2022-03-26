const { TestWatcher } = require('jest');
const Employee = require('../lib/employee');

// create employee object
test('creates an employee object', () => {
    const employee = new Employee('Pam Beesly', 3568, 'pbeesly@dundermifflin.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets employee name
test('gets employee name', () => {
    const employee = new Employee('Pam Beesly', 3568, 'pbeesly@dundermifflin.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets employee id
test('gets employee ID', () => {
    const employee = new Employee('Pam Beesly', 3568, 'pbeesly@dundermifflin.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets employee email
test('gets employee email', () => {
    const employee = new Employee('Pam Beesly', 3568, 'pbeesly@dundermifflin.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets employee role
test('gets employee role', () => {
    const employee = new Employee('Pam Beesly', 3568, 'pbeesly@dundermifflin.com');

    expect(employee.getRole()).toEqual("Employee");
});

