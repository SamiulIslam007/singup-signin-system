const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

require("dotenv").config();

// Middlewares
app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);

// DB connection
mongoose.connect(process.env.DATABASE, () => {
  console.log("DB Connected!");
});

// User routes
app.use("/api", userRoutes);

const port = process.env.port || 8001;
// Starting server
app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});
