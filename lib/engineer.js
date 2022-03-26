// importing employee constructor
const Employee = require("./employee");

// engineer constrictor extends employee constructor
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // returning github from input
    getGithub() {
        return this.github;
    }

    // override employee role to engineer
    getRole() {
        return "Engineer";
    }
}

// export
module.exports = Engineer;