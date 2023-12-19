require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const blogs = require("./routes/blogs");

const app = express();

app.get("/", blogs);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("Connected to db");
  app.listen(process.env.PORT, () => {
    console.log("Listening on Port");
  })
})
.catch((err) => {
    console.log(err)
})

