const {MongoClient} = require('mongodb');
const {uri} = require('./config');

MongoClient.connect(uri, function(err, db) {
    console.log("Connected correctly to server");
});