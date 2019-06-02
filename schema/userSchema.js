const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
  _id: ObjectId,
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('users', userSchema)
module.exports = User
