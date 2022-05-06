const mysql = require("mysql");
const dotenv = require("dotenv");

port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
