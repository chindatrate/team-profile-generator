const { TestWatcher } = require('jest');
const Employee = require('../lib/employee');

test('creates an employee object', () => {
    const employee = new Employee('Pam Beesly', 3568, 'pbeesly@dundermifflin.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.number).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Pam Beesly', 3568, 'pbeesly@dundermifflin.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID'), () => {
    const employee = new Employee('Pam Beesly', 3568, 'pbeesly@dundermifflin.com');

    expect(employee.Id()).toEqual(expect.any(Number));
};

test('gets employee email'), () => {
    const employee = new Employee('Pam Beesly', 3568, 'pbeesly@dundermifflin.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
};

test('gets employee role'), () => {
    const employee = new Employee('Pam Beesly', 3568, 'pbeesly@dundermifflin.com');

    expect(employee.getRole()).toEqual("Employee");
};

