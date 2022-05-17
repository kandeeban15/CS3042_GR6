const mysql = require("mysql2/promise");

const query = async (sql, params) => {
  const connection = await mysql.createConnection();
  const [results, fiels] = await connection.execute(sql, params);

  return results;
};

module.exports = query;
