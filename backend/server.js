require('dotenv').config();
const express = require('express');
const blog = require('./routes/blog');

const app = express();

app.get('/', blog)

app.listen(process.env.PORT, console.log('Listening on port'))