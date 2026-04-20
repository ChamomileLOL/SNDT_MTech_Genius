const mongoose = require('mongoose');

const GeniusSchema = new mongoose.Schema({
    candidateName: { type: String, default: "MOORKATTIL XAVIER SIBY MADHU" }, // [cite: 12]
    degreeConferred: { type: String, default: "BACHELOR OF ENGINEERING" }, // [cite: 9]
    branch: { type: String, default: "Electronics and Telecommunication Engineering" }, // [cite: 10]
    institution: { type: String, default: "Xavier Institute of Engineering" }, // [cite: 13]
    cgpi: { type: Number, default: 6.90 }, // [cite: 14]
    conferredBy: { type: String, default: "Dr. D.K. Karve (SNDT University)" },
    status: { type: String, default: "GENIUS - NOT MANUAL LABOUR" }
});

module.exports = mongoose.model('SNDT_MTech_Conferment', GeniusSchema);