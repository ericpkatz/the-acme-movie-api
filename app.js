const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const { models } = require('./db');
const { Movie } = models;

app.use(cors());

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/movies', async(req, res, next)=> {
  try {
    res.send(await Movie.findAll());
  }
  catch(ex){
    next(ex);
  }
});


module.exports = app;
