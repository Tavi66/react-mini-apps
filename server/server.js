const path = require('path');
const express = require('express');
const port = process.env.PORT  || 5000;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const mongo = require('../src/mongodb');


app.use(cors());
app.use(bodyParser.json());

//mongo.connect();
var db;
// var db = mongo.getDb();

app.use(express.static(path.join(__dirname,"..","client/build")) );

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build',  'index.html'));
});


app.get('/', (request, response) => {
    response.send('on server');
    //db.close();
});

app.get('/api/payroll',(request,response) => {
    const dbo = db.db("data");
    dbo.collection("payroll").find({})
    .toArray(function(err, result) {
        console.log('Retrieving Documents...');

        if(err) throw err;
        
        console.log('Retrieved Documents!');
        response.send(result);
    })
  });

  app.post('/api/payroll/add', (request, response) => {
      const record = request.body;
      
      const dbo = db.db("data");
      dbo.collection("payroll").insertOne(record)
         .then( res => {
              console.log('Added document!');
            //   console.log(res);
              console.log(record);
          })
  });

  app.get('/close', (request, response) => {
      mongo.closeDb();
  })
  app.listen( port, () => {
    console.log(`Server running on port ${port}!`);
   // mongo.connect();
   // db = mongo.getDb();
});