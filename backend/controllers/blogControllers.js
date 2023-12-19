const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

const getEntries = async (req, res) => {
  const entries = await Blog.find({}).sort({ createdAt: -1 });

  res.status(200).json(entries);
};

const createEntry = async (req, res) => {
  const { title, brief, description, author } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!brief) {
    emptyFields.push("brief");
  }
  if (!description) {
    emptyFields.push("description");
  }
  if (!author) {
    emptyFields.push("author");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  // add to the database
  try {
    const blog = await Blog.create({ title, brief, description, author });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { getEntries, createEntry };
