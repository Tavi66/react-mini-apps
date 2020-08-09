const path = require('path');
const express = require('express');
const port = process.env.PORT  || 5000;
const app = express();

//const publicPath = path.join(__dirname,'..','public');

app.use(express.static(path.join(__dirname,"..","build")) );

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'build',  'index.html'));
});

app.listen( port, () => {
    console.log(`Server running on port ${port}!`);
});
