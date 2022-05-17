const mysql = require("mysql");

class Account {
  //Properties
  interestRate;
  minimumAmount;

  constructor(accNo, customerNIC, accType, agentID, balance) {
    this.accNo = accNo;
    this.customerNIC = customerNIC;
    this.agentID = agentID;
    this.accType = accType;
    this.balance = balance;
  }
  getInterstRate(accType) {}
}
