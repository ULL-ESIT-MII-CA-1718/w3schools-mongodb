// http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html#createCollection

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  // Create a new collection on a server with the specified options
  // Returns: Promise if no callback passed 
  db.createCollection("customers", function(err, res) {
    if (err) {
      console.log("callback: Arranca el deamon con 'gulp start'");
      return null;
    }
    console.log("Collection created!");
    db.close();
  });
});

