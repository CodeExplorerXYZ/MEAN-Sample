const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./User/user.model'); // Import the User model

const app = express();
const port = 8000; // You can change this to any available port.

// MongoDB connection setup (replace 'your_database_url' with your MongoDB URL)
mongoose.connect('mongodb://localhost:27017/MEAN002', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Define a route to handle POST requests for storing user data
app.post('/api/store-user', async (req, res) => {
  const { name } = req.body;

  try {
    const newUser = new User({ name });
    await newUser.save();
    res.status(200).json({ message: 'User data stored successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while storing user data.' });
  }
});
app.delete('/api/store-user', async (req, res) => {
  const { name } = req.body;

  try {
    const newUser = new User({ name });
    await newUser.save();
    res.status(200).json({ message: 'User data stored successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while storing user data.' });
  }
});
app.get('/api/store-user', async (req, res) => {
  const { name } = req.body;

  try {
    const newUser = new User({ name });
    await newUser.find();
    res.status(200).json({ message: 'User data stored successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while storing user data.' });
  }
});
app.update('/api/store-user', async (req, res) => {
  const { name } = req.body;

  try {
    const newUser = new User({ name });
    await newUser.save();
    res.status(200).json({ message: 'User data stored successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while storing user data.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
