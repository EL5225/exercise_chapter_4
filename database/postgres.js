const Pool = require("pg").Pool;

const pool = new Pool({
  user: "nama-user",
  database: "nama-database",
  password: "passowrd",
  port: 5432,
  host: "localhost",
});

module.exports = pool;
