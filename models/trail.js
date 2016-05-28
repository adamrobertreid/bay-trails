var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project_03");

var TrailSchema = new Schema({
  trailName: String,
  address: String,
  description: String,
  dogFriendly: Boolean,
  trailLength: Number,
  difficulty: String,
  trailSurface: String,
  trailRating: Number,
  trailPending: Boolean,
  created: { type: Date, default: Date.now }
});


var Trail = mongoose.model('Trail', trailSchema);
module.exports = Trail;
