var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url).then(function(db) {
  var myobj = { name: "Company Inc", address: "Highway 37" };
  db.collection("customers").insertOne(myobj).then(function(res) {
    console.log("1 document inserted");
    db.close();
  }).catch( (err) => console.log("Error while inserting: "+err))
}).catch((err) => console.log("connect: Arranca el deamon con 'gulp start'"));
