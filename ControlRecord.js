
const mongoose = require('mongoose');
const ControlRecordSchema = new mongoose.Schema({
  roomId: { type: String, required: true },
  action: { type: String, required: true },
  details: { type: Object },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('ControlRecord', ControlRecordSchema);
