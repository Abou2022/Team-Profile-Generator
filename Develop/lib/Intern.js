const Employee = require("./Employee");

//Extent Employee paret class
class Intern extends Employee {
  //to Employee's properties and methods + school
  constructor(name, id, email, school) {
    //I will call parent constructor here
    super(name, id, email);

    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  //Overridden getRole
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
