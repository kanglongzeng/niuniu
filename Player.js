
const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
  playerId: { type: String, required: true },
  name: { type: String, required: true },
  joinedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Player', PlayerSchema);
