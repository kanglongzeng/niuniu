
const mongoose = require('mongoose');
const GameRecordSchema = new mongoose.Schema({
  roomId: { type: String, required: true },
  round: { type: String, required: true },
  winnerId: { type: String, required: true },
  hands: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('GameRecord', GameRecordSchema);
