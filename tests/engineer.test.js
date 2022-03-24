const Engineer = require('../lib/engineer');

test('gets employee name', () => {
    const engineer = new Engineer('Pam Beesly', 3568, 'pbeesly@dundermifflin.com');

    expect(engineer.getName()).toEqual(expect.any(String));
});

test('gets engineer github'), () => {
    const engineer = new Engineer('Pam Beesly', 3568, 'pbeesly@dundermifflin.com');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
};

test('gets employee role'), () => {
    const engineer = new Engineer('Pam Beesly', 3568, 'pbeesly@dundermifflin.com');

    expect(engineer.getRole()).toEqual("Engineer");
};