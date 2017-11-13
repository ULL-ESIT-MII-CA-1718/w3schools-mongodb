### Tutorial MongoDB and NodeJS W3Schools

* [W3Schools: Node.Js MongoDB tutorial](https://www.w3schools.com/nodejs/nodejs_mongodb.asp)
   * [MongoDB Get Started](https://www.w3schools.com/nodejs/nodejs_mongodb.asp) 
   * [MongoDB Create Database](https://www.w3schools.com/nodejs/nodejs_mongodb_create_db.asp) 
   * [MongoDB Create Collection](https://www.w3schools.com/nodejs/nodejs_mongodb_createcollection.asp) 
   * [MongoDB Insert](https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp) 
   * [MongoDB Find](https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp) 
   * [MongoDB Query](https://www.w3schools.com/nodejs/nodejs_mongodb_query.asp) 
   * [MongoDB Sort](https://www.w3schools.com/nodejs/nodejs_mongodb_sort.asp) 
   * [MongoDB Delete](https://www.w3schools.com/nodejs/nodejs_mongodb_delete.asp) 
   * [MongoDB Drop Collection](https://www.w3schools.com/nodejs/nodejs_mongodb_drop.asp) 
   * [MongoDB Update](https://www.w3schools.com/nodejs/nodejs_mongodb_update.asp) 
   * [MongoDB Limit](https://www.w3schools.com/nodejs/nodejs_mongodb_limit.asp) 
   * [MongoDB Join](https://www.w3schools.com/nodejs/nodejs_mongodb_join.asp)

### Version used

```shell
[~/javascript/mongo/w3schools-mongodb]$ mongod --version
db version v3.4.10
git version: 078f28920cb24de0dd479b5ea6c66c644f6326e9
OpenSSL version: OpenSSL 1.0.2m  2 Nov 2017
allocator: system
modules: none
build environment:
    distarch: x86_64
    target_arch: x86_64
```

### Runnning the deamon

```js
var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("pre-install-mongo", shell.task([
      "brew update && brew install mongodb",
]));
```


#### brew

If you have mongodb installed via homebrew, homebrew actually has a handy brew services command. To show current running services:

brew services list

To start mongodb:

  brew services start mongodb

To stop mongodb if it's already running:

  brew services stop mongodb

NOTE: I have not found the way to specify options for mongodb when running brew services dtart mongodb

By default, MongoDB listens for connections from clients on port 27017, and stores data in the /data/db directory.

#### Setting the place to store data files 

If you want mongod to store data files at a path other than /data/db you can specify a dbPath. The dbPath must exist before you start mongod. 
If it does not exist, create the directory and the permissions so that mongod can read and write data to this path. 

To specify a dbPath for mongod to use as a data directory, use the --dbpath option. 

  https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/#start-mongod-processes

#### Stopping the server

Shut down the mongod from the mongo shell using the db.shutdownServer() method as follows:

  use admin
  db.shutdownServer()

The --shutdown option cleanly and safely terminates the mongod process. When invoking mongod with this option you must set the --dbpath option either directly or by way of the configuration file and the --config option.

https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/#stop-mongod-processes

WARNING: Never use kill -9 (i.e. SIGKILL) to terminate a mongod instance.


The --shutdown option is available only on Linux systems.


