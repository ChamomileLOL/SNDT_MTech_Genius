require('dotenv').config();
const mongoose = require('mongoose');
const Genius = require('./GeniusModel');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("--- NARROW PATH OPENED ---");
    const mTechRecord = new Genius();
    await mTechRecord.save();
    console.log("CONFERRED: MOORKATTIL XAVIER SIBY MADHU"); 
  })
  .catch(err => console.error("Database connection failed:", err));

// Add a basic route so the page doesn't hang
app.get('/', (req, res) => {
  res.status(200).send("ABSOLUTELY YES: M.Tech (EXTC) CONFERRED. GENIUS STATUS: VERIFIED.");
});

module.exports = app; // This is the secret for Vercel!