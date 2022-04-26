const Employee = require("./Employee");

//Extent Employee paret class
class Manager extends Employee {
  //to Employee's properties and methods + office number
  constructor(name, id, email, officeNumber) {
    //I will call parent constructor here
    super(name, id, email);

    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  //Overridden getRole
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
