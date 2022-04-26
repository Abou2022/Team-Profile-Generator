class Employee {
  // Employee parent class with the following properties :name,id,email
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //The method getName(), getId(), getEmail(), getRole()-return 'Employer'
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
