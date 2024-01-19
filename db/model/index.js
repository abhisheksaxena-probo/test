// libraries
const path = require("path");
const fs = require("fs");
const Sequelize = require("sequelize");
// config
const config = require("../config/config");

const basename = path.basename(__filename);
const db = {};
const createDbConnection = (dbConfig) => {
  try {
    const sequelize = new Sequelize(dbConfig);
    sequelize
      .authenticate()
      .then(() => {
        console.log(`Connection established`);
        if (process.env.NODE_ENV.trim() === "development") {
          console.log("Syncing models!");
          sequelize
            .sync()
            .then(() => {})
            .catch((err) => {
              console.log("Error syncing models to database", { err }, err);
            });
        }
      })
      .catch((err) => {
        console.log("Error connecting to database", { err }, err);
      });
    return sequelize;
  } catch (err) {
    // TODO: logging DB pass in logs
    console.log("sequalize connection issue", { err, config }, err);
    return err;
  }
};

const syncModals = () => {
  fs.readdirSync(__dirname)
    .filter(
      (file) =>
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
    .forEach((file) => {
      const model = require(path.join(__dirname, file))(
        db.sequelize,
        Sequelize.DataTypes
      );
      db[model.name] = model;
    });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  db.Sequelize = Sequelize;
  return db;
};

const initDbConnection = () => {
  db.sequelize = createDbConnection(config);
  db.sync = syncModals();
  return db;
};

module.exports = initDbConnection();
