// http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html#createCollection

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) {
      console.log("callback: Start the deamon with 'gulp start'");
      return null;
  }
  // Create a new collection on a server with the specified options
  // Returns: Promise if no callback passed 
  // See demo_mongodb_createcollection_promise.js
  db.createCollection("customers", function(err, res) {
    if (err) {
      console.log("Error in createCollection: "+err);
      return null;
    }
    console.log("Collection created!");
    db.close();
  });
});

