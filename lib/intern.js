// importing employee constructor
const Employee = require('./employee');

// intern constructor extends employee constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // returning school from input
    getSchool() {
        return this.school;
    }

    // override employee role to intern
    getRole() {
        return "Intern";
    }
}

// export
module.exports = Intern;