const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./configs/database");

const createTaskRoute = require("./routes/createTaskRoute");
const getAllTasks = require("./routes/getAllTasksRoute");
const updateTaskRoute = require("./routes/updateTaskRoute");
const deleteTaskRoute = require("./routes/deleteTaskRoute");
const setStatusRoute = require("./routes/setStatusRoute");
const singleTastRroute = require("./routes/singleTaskRoute");

const port = process.env.PORT || 3000;

const app = express();
dotenv.config();

connectDB();

app.use(express.json());

const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.use("/get-all-tasks", getAllTasks);
app.use("/create-task", createTaskRoute);
app.use("/update-task/", updateTaskRoute);
app.use("/delete-task/", deleteTaskRoute);
app.use("/update-status", setStatusRoute);
app.use("/task/", singleTastRroute);

app.listen(port, (error) => {
  if (!error) {
    console.log(`server live on: ${port}`);
  } else {
    console.log(error);
  }
});
