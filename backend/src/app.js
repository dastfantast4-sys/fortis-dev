const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

connectDB();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check
app.get('/ping', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

app.use('/api/auth', authRoutes);
app.use('/api/applications', applicationRoutes);

app.use(errorHandler);

module.exports = app;
