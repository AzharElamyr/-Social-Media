const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
console.log(process.env.MONGO_URL);
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("Server is running");
});
