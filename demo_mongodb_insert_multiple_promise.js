var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url).then(function(db) {
  var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
  /*
   * insertMany(docs, options, callback) {Promise if no callback passed }
   *
   * http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#insertMany
   * Inserts an array of documents into MongoDB. If documents passed in do not contain the _id field,
   * one will be added to each of the documents missing it by the driver, mutating the document. This behavior
   * can be overridden by setting the forceServerObjectId flag.
  */
  db.collection("customers").insertMany(myobj).then(function(res) {
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  }).catch( (err) => console.log("Error inserting: "+err));
}).catch((err) => console.log("Please, remember to start mongod"));
