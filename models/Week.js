const mongoose = require('mongoose');

const weekSchema = new mongoose.Schema({
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
});

module.exports = mongoose.model('Week', weekSchema);
