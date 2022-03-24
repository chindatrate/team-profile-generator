const Intern = require('../lib/intern');

test('gets employee name', () => {
    const intern = new Intern('Pam Beesly', 3568, 'pbeesly@dundermifflin.com');

    expect(intern.getName()).toEqual(expect.any(String));
});

test('gets intern school'), () => {
    const intern = new Intern('Pam Beesly', 3568, 'pbeesly@dundermifflin.com');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
};

test('gets employee role'), () => {
    const intern = new Intern('Pam Beesly', 3568, 'pbeesly@dundermifflin.com');

    expect(intern.getRole()).toEqual("Intern");
};