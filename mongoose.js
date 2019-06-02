const mongoose = require('mongoose');
const config = require('./config')
mongoose.connect(config.mongoURL, {useNewUrlParser: true});
module.exports = mongoose
