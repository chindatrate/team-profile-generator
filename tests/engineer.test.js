const Engineer = require('../lib/engineer');

test('create employee object', () => {
    const engineer = new Engineer('Pam Beesly', 3568, 'pbeesly@dundermifflin.com', 'pbeesly');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github', () => {
    const engineer = new Engineer('Pam Beesly', 3568, 'pbeesly@dundermifflin.com', 'pbeesly');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets employee role', () => {
    const engineer = new Engineer('Pam Beesly', 3568, 'pbeesly@dundermifflin.com', 'pbeesly');

    expect(engineer.getRole()).toEqual("Engineer");
}); 