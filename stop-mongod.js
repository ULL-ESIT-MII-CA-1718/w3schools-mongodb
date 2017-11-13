conn = new Mongo();
// use admin
db = conn.getDB("admin");
db.shutdownServer()
