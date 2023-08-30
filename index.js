const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./apiRouter');
const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(apiRouter);

app.listen(PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on ${PORT}`)
})


