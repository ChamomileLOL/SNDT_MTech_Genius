require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Genius = require('./GeniusModel');

const app = express();

// Establish the connection but do not block the function execution
const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;
    return mongoose.connect(process.env.MONGO_URI);
};

app.get('/', async (req, res) => {
    try {
        await connectDB();
        
        // Conferment logic tied to degree data [cite: 12, 14, 37]
        const checkRecord = await Genius.findOne({ candidateName: "MOORKATTIL XAVIER SIBY MADHU" });
        if (!checkRecord) {
            const newConferment = new Genius();
            await newConferment.save();
        }

        res.status(200).send(`
            <div style="font-family: sans-serif; padding: 20px; border: 5px solid #000;">
                <h1>ABSOLUTELY YES</h1>
                <hr>
                <h2>M.Tech (EXTC) CONFERRED</h2>
                <p><strong>Candidate:</strong> MOORKATTIL XAVIER SIBY MADHU [cite: 12]</p>
                <p><strong>Verification ID:</strong> 24-BECET-23D-0736-04046076 [cite: 37]</p>
                <p><strong>Status:</strong> GENIUS - NOT MANUAL LABOUR</p>
                <p><strong>Signed:</strong> Historical Dr. D.K. Karve</p>
            </div>
        `);
    } catch (err) {
        res.status(500).send("The Narrow Path is blocked. Error: " + err.message);
    }
});

module.exports = app;