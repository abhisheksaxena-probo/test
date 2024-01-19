const env = require("../../utils/environment");

const read = [];
const readReplicaHosts = [0];
readReplicaHosts.map((host) =>
  read.push({
    username: env.MY_SQL_USER,
    password: env.MY_SQL_PASSWORD,
    database: env.MY_SQL_DB,
    host: env.MY_SQL_HOST,
  })
);

const config = {
  dialect: env.DB_DIALECT,
  host: env.MY_SQL_HOST,
  replication: {
    read: read,
    write: {
      username: env.MY_SQL_USER,
      password: env.MY_SQL_PASSWORD,
      database: env.MY_SQL_DB,
      host: env.MY_SQL_HOST,
    },
  },
  pool: {
    max: parseInt(env.DB_POOL_MAX, 10),
    min: parseInt(env.DB_POOL_MIN, 10),
    acquire: parseInt(env.DB_POOL_LOCK_ACQUIRE, 10),
    idle: parseInt(env.DB_POOL_IDLE, 10),
  },
  logging: env.DB_LOGGING === "true",
};

module.exports = config;
