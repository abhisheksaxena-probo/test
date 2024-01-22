const env = require("../../utils/environment");
console.log(env.DB_DIALECT);
console.log(env.MY_SQL_DB);
console.log(env.MY_SQL_USER);
console.log(env.MY_SQL_PASSWORD);

const config = {
  dialect: env.DB_DIALECT,
  database: env.MY_SQL_DB,
  username: env.MY_SQL_USER,
  password: env.MY_SQL_PASSWORD,
};

module.exports = config;
