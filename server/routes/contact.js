const express = require('express');
const db = require('./db');
const router = express.Router();

// Handle contact form submission
router.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    try {
        const [result] = await db.query(
            'INSERT INTO received_messages (name, email, subject, message) VALUES (?, ?, ?, ?)',
            [name, email, subject, message]
        );
        
        res.status(201).json({
            success: true,
            message: 'Message received successfully'
        });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to save message'
        });
    }
});

module.exports = router;
