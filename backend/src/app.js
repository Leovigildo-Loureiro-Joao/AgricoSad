const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);

module.exports = app;