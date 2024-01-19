const express = require("express");
const cors = require("cors");
const contractRouter = require("./rotues/contractRoutes");
// const dbConnection = require("./db/model/index");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/contracts", contractRouter);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message });
});

Promise.resolve()
  .then(async () => {
    // await dbConnection;
  })
  .then(() => {
    app.listen(3600, () => {
      console.log("server running on port 3500");
    });
  });

module.exports = { app };
