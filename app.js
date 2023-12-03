const express = require("express");
require("dotenv").config();
const port = process.env.PORT;
const taskRoutes = require('./routes/taskRoutes');
const app = express();
// middleware

app.use(express.static('./public'));
app.use(express.json());


app.use("/tasks", taskRoutes)

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});
