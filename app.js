var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const csv = require('csv-parser');
const fs = require('fs');
const playerDataById = new Map();

fs.createReadStream('stats.csv')
    .pipe(csv())
    .on('data', (data) => {
        playerDataById.set(data['player_id'], data);
    })
    .on('end', () => {});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/players');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  req['playerDataById'] = playerDataById;
  next()
});
app.use('/', indexRouter);
app.use('/players', usersRouter);

module.exports = app;
