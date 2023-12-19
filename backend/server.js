require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const blogs = require("./routes/blogs");

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/blog", blogs);

//Connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to db");
    app.listen(process.env.PORT, () => {
      console.log("Listening on Port");
    });
  })
  .catch((err) => {
    console.log(err);
  });
