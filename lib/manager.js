// importing employee constructor
const Employee = require('./employee');

// manager constructor extends employee constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // override employee role to manager
    getRole() {
        return "Manager";
    }
}

// export
module.exports = Manager;