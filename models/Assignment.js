const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    week: { type: mongoose.Schema.Types.ObjectId, ref: 'Week', required: true },
    day: { type: String, required: true },
    subject: { type: String, required: true },
    homework: { type: String, required: true },
});

module.exports = mongoose.model('Assignment', assignmentSchema);
