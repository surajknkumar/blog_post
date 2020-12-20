/**
 * @format
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Sumitra - only for interview purpose
 */

const express = require('express');
const articleController = require('./routes/controller/article.controller');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  next();
});

app.use('/articleController', articleController);

mongoose
  .connect('mongodb://localhost/blogs', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(port, () =>
      console.log(
        `Server and Database running on ${port}, http://localhost:${port}`
      )
    );
  })
  .catch((err) => {
    console.log(err);
  });
