import { config } from 'dotenv';
config({ path: '../config/.env' });
import express from 'express';
import cors from 'cors';
import pkg from 'body-parser';
const { json } = pkg;
import db from './db.js';
import contactRoutes from './routes/contact.js';

const app = express();

// Middleware
app.use(cors());
app.use(json());

// Serve static files
app.use(express.static('../'));

// Routes
app.use('/api/contact', contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
