const Manager = require('../lib/manager');

test('gets employee name', () => {
    const manager = new Manager('Pam Beesly', 3568, 'pbeesly@dundermifflin.com');

    expect(manager.getName()).toEqual(expect.any(String));
});

test('gets employee role'), () => {
    const manager = new Manager('Pam Beesly', 3568, 'pbeesly@dundermifflin.com');

    expect(manager.getRole()).toEqual("Manager");
};