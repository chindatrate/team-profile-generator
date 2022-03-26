const Manager = require('../lib/manager');

// creates manager object
test('create manager object', () => {
    const manager = new Manager('Pam Beesly', 3568, 'pbeesly@dundermifflin.com', 65);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets manager role
test('gets employee role', () => {
    const manager = new Manager('Pam Beesly', 3568, 'pbeesly@dundermifflin.com', 65);

    expect(manager.getRole()).toEqual("Manager");
});