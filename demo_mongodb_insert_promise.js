var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url).then(function(db) {
  var myobj = { name: "Company Inc", address: "Highway 37" };
  /* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#insertOne
   * insertOne(doc, options, callback) {Returns a Promise if no callback passed }
   *
   * Inserts a single document into MongoDB. If documents passed in do not contain the _id field,
   * one will be added to each of the documents missing it by the driver, mutating the document. This behavior
   * can be overridden by setting the forceServerObjectId flag.
  */
  db.collection("customers").insertOne(myobj).then(function(res) {
    console.log("1 document inserted");
    db.close();
  }).catch( (err) => console.log("Error while inserting: "+err))
}).catch((err) => console.log("connect: Arranca el deamon con 'gulp start'"));
