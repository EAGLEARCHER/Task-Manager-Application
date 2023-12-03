const express = require("express");
require("dotenv").config();
const taskRoutes = require('./routes/taskRoutes');
const database = require('./db/connect');
const port = process.env.PORT;
const app = express();
// middleware

app.use(express.static('./public'));
app.use(express.json());


app.use("/tasks", taskRoutes)

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});
