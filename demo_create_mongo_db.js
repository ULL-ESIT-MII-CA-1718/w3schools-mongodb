var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

/* 
 * connect(url[, options], callback)
*/
MongoClient.connect(url, function(err, db) {
  /* The first parameter will contain the Error object if an error
    occured, or null otherwise. While the second parameter will contain
    the initialized db object or null if an error occured.
  */
  if (err) {
      console.log("callback: Arranca el deamon con 'gulp start'");
      return null;
  }
  console.log("Database created!");
  console.log("db  class is: "+db.constructor.name);
  /*
   * Close the current db connection, including all the child db instances. Emits close event and calls optional callback.
   * close([forceClose], callback)
   *   Arguments:
   *     [forceClose] (boolean) – connection on can never be reused.
   *     callback (function) – this will be called after executing this method. 
   *       * The first parameter will contain the Error object if an error occurred, or null otherwise. 
   *       * While the second parameter will contain the results or null if an error occurred.
   * Returns:
   * null
   */
  db.close((err, res) => { console.log("Database closed! err: "+err+" res: "+res); });
});

