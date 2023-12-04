const express = require("express");
require("dotenv").config();
const taskRoutes = require("./routes/taskRoutes");
const database = require("./db/connect");
const port = process.env.PORT;
const uri = process.env.MONGO_URI;
const app = express();
// middleware

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/tasks", taskRoutes);
const start = async () => {
  try {
    await database(uri)
      .then(() => {
        console.log("database started...");
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
