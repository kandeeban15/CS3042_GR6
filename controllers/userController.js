const db = require("./dbOperations");
//const dbConfig = require("../dbConfig");

const tableCols =
  "(CustomerNIC, Name, ConatctNumber, Address, Birthday, Password)";
const tableName = "customer";

exports.createUSer = async (req, res) => {};
exports.getAllUsers = async (req, res) => {
  try {
    const sqlStatement = `SELECT * FROM ${tableName}`;
    const result = await db.query(sqlStatement);

    res.status(200).json({
      status: "Success",
      data: {
        customers: result,
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
exports.getUser = async (req, res) => {};
exports.updateUser = async (req, res) => {};
exports.deleteUser = async (req, res) => {};
