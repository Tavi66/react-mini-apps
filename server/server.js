const path = require('path');
const express = require('express');
const port = process.env.PORT  || 3000;
const app = express();

const publicPath = path.join(__dirname,'..','public');

app.use(express.static("public"));

app.get('/', (request, response) => {
    response.sendFile(path.join(publicPath, 'public',  'index.html'));
});
app.listen( port, () => {
    console.log(`Server running on port ${port}!`);
});
