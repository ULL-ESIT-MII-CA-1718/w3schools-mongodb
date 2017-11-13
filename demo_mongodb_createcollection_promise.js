// http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html#createCollection

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url).then(function(db) {
  // Create a new collection on a server with the specified options
  // Returns: Promise if no callback passed 
  db.createCollection("customers").then(function(res) {
    console.log("Collection created!");
    db.close();
  }).catch((err) => {
    console.log("createCollection: "+err);
  });
}).catch((err) => console.log("connect: Arranca el deamon con 'gulp start'"));

