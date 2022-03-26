const Intern = require('../lib/intern');

test('gets employee name', () => {
    const intern = new Intern('Pam Beesly', 3568, 'pbeesly@dundermifflin.com', 'Pratt Institute');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern school', () => {
    const intern = new Intern('Pam Beesly', 3568, 'pbeesly@dundermifflin.com', 'Pratt Institute');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets employee role', () => {
    const intern = new Intern('Pam Beesly', 3568, 'pbeesly@dundermifflin.com', 'Pratt Institute');

    expect(intern.getRole()).toEqual("Intern");
});