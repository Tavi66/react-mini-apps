const MongoClient = require('mongodb').MongoClient;

// const dbName = 'data';
const user = 'user';
const pwd = 'pwd';
const uri = `mongodb+srv://${user}:${pwd}@cluster0-uo1y8.mongodb.net/data?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true });

var db;
//Initialize mongodb connection once
const connect = () => {
MongoClient.connect(uri, { useNewUrlParser: true }, function(err,database) {
    if(err) throw err;
    db = database;
    console.log('Connected to mongoDB.');
});
}

 const getDb = () => {
   return db;
}

 const closeDb = () => {
   db.close();
   console.log('mongoDB db connection closed.');
}
exports.connect = connect;
exports.getDb = getDb;
exports.closeDb = closeDb;