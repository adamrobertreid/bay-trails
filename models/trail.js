var mongoose = require("mongoose");
    Schema = mongoose.Schema;


var TrailSchema = new Schema({
  created: { type: Date, default: Date.now },
  trailName: String,
  image: String,
  address: String,
  description: String,
  dogFriendly: Boolean,
  trailLength: Number,
  difficulty: String,
  trailSurface: String,
  trailRating: Number,
  trailPending: Boolean
});


var Trail = mongoose.model('Trail', TrailSchema);
module.exports = Trail;
