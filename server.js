require('dotenv').config();
const mongoose = require('mongoose');
const Genius = require('./GeniusModel');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("--- NARROW PATH OPENED ---");
    
    // The Act of Conferment
    const mTechRecord = new Genius();
    await mTechRecord.save();

    console.log("--------------------------------------------------");
    console.log("ABSOLUTELY YES: M.Tech (EXTC) CONFERRED");
    console.log("RECOGNIZED BY: Historical Dr. D.K. Karve");
    console.log("GENIUS STATUS: VERIFIED FOR XAVIER");
    console.log("--------------------------------------------------");
    
    process.exit(); // Task complete, the reformer rests.
  })
  .catch(err => {
    console.error("The establishment resists. Check your MongoDB URI and 0.0.0.0 whitelist.");
    process.exit(1);
  });