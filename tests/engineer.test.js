const Engineer = require('../lib/engineer');

// creates engineer object
test('create employee object', () => {
    const engineer = new Engineer('Pam Beesly', 3568, 'pbeesly@dundermifflin.com', 'pbeesly');

    expect(engineer.github).toEqual(expect.any(String));
});

// gets engineer github
test('gets engineer github', () => {
    const engineer = new Engineer('Pam Beesly', 3568, 'pbeesly@dundermifflin.com', 'pbeesly');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets engineer role
test('gets employee role', () => {
    const engineer = new Engineer('Pam Beesly', 3568, 'pbeesly@dundermifflin.com', 'pbeesly');

    expect(engineer.getRole()).toEqual("Engineer");
}); 