const db = require("../models/supportFunctions/dbOperations");

const tableCols =
  "(TransactionID, AccountNumber, Date, Time, TransactionType, AccountType, TransactionAmount, TransactionCharge)";
const tableName = "transaction";

exports.validateBody = async (req, res) => {
  // Check if all needed data are present in the request body
};

exports.createTransaction = async (req, res) => {
  const accNo = req.body.AccountNumber;

  sqlStatement =
    `INSERT INTO ${tableName}` +
    tableCols +
    ` VALUES (value1, value2, value3, ...);`;
};

exports.getAllTransactions = async (req, res) => {
  try {
    const sqlStatement = `SELECT * FROM ${tableName}`;
    const result = await db.query(sqlStatement);

    res.status(200).json({
      status: "Success",
      data: {
        transactions: result,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed to get",
      data: {
        err,
      },
    });
  }
};

exports.getTransaction = async (req, res) => {};

exports.updateTransaction = async (req, res) => {};

exports.deleteTransaction = async (req, res) => {};
