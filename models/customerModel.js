const mysql = require("mysql2");

class Customer {
  // pass req.data to the constructor
  constructor(data) {
    this.tableName = "customer";
    this.data = data;

    this.validateData();

    this.customerID = data.customerID;
    this.password = data.password;
    this.customerNIC = data.customerNIC;
    this.name = data.name;
    this.contactNumber = data.contactNumber;
    this.address = data.address;
    this.birthday = new Date(data.birthday);
  }
  validateData() {} // Run a vaidator

  generateInsertStatement() {
    const cols =
      "(`Password`, `CustomerNIC`, `Name`, `ContactNumber`, `Address`, `Birthday`)";
    var statement = `INSERT INTO ${this.tableName} ${cols} VALUES`;
    var values = `('${this.password}', '${this.customerNIC}', '${this.name}', '${this.contactNumber}', '${this.address}', '${this.birthday}')`;
    return `${statement} ${values}`;
  }
}
