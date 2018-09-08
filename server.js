const express = require('express');
const mongoose = require('mongoose');

// Includes routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

app.get('/', (req, res) => res.send('hello'));

// DB config
const db = require('./config/keys').mongoUri;

// Connect to DB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB successfuly connected'))
  .catch(err => console.log(err));

// use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// Define Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));