const Employee = require("./Employee");

class Engineer extends Employee {
  //to Employee's properties and methods + github
  constructor(name, id, email, github) {
    //I will call parent constructor here
    super(name, id, email);

    this.github = github;
  }
  getGithub() {
    return this.github;
  }

  //Overridden getRole
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
