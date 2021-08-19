const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userController = require("./controllers/user");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/user", userController);

app.get("/", async (req, res) => {
  res.send("hey");
});

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => app.listen(port))
  .then(console.log("SERVER IS RUNNING"))
  .catch((err) => console.log(err));
