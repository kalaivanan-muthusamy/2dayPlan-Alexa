const MongoClient = require('mongodb').MongoClient
const config = require('./config')

const uri = config.mongoURL
const mongo = new MongoClient(uri, { useNewUrlParser: true })

module.exports = mongo
