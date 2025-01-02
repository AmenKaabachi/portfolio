require('dotenv').config({ path: '../config/.env' });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const contactRoutes = require('./routes/contact');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/contact', contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
