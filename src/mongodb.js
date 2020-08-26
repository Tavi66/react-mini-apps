const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
//console.log(process.env.DATABASE_URL);
// const user = process.env.REACT_APP_USERNAME;
// const pwd = process.env.REACT_APP_PWD;
//console.log(process.env.DATABASE_URL);
const user = process.env.DATABASE_URL.REACT_APP_USERNAME;
const pwd = process.env.DATABASE_URL.REACT_APP_PWD;
const uri = `mongodb+srv://${user}:${pwd}@cluster0-uo1y8.mongodb.net/data?retryWrites=true&w=majority`;

var db;
const checkVar = () => {
  console.log('user: ', user);
  console.log('pwd: ', pwd);
}
//Initialize mongodb connection once
const  connect  = async () => {
  try{
    await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function(err,database) {
    if(err) throw err;

    console.log('Connected to mongoDB.');

    db = database;

  });
} catch(error) {
  throw(error);
}
};

 const getDb = async () => {
   try{
   if(db === null || db === undefined)
   {
     console.log('db is null/undefined.');
     await connect();
     return db;
   } else {
     console.log('Retrieved DB.');
     return db;
   }
  }
  catch(error){
    throw(error)
  }
}

 const closeDb = () => {
   db.close();
   console.log('mongoDB db connection closed.');
}

//Payroll get/post
const getPayrollDocuments = (response) => {
  const dbo = db.db("data");
  let documents;
  dbo.collection("payroll").find({}).toArray( function(err, result){
    //console.log('START fetchDocuments');
    console.log('Retrieving Documents...');

    if(err) throw err;
    //console.log('result: ',result);
    console.log('Retrieved Documents!');
    //console.log('END fetchDocuments');
    documents = result;
    response.send(documents);
  });
    // db.close(); 
}

const postSinglePayroll = (document) => {
  const dbo = db.db("data");
  dbo.collection("payroll").insertOne(document)
      .then( res => {
        console.log('Added document!');
        //db.close();
        //   console.log(res);
        //  console.log(document);
      });
}

exports.checkVar = checkVar;

exports.connect = connect;
exports.getDb = getDb;
exports.closeDb = closeDb;
exports.getPayrollDocuments = getPayrollDocuments;
exports.postSinglePayroll = postSinglePayroll;