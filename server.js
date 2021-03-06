'use strict';
require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const morgan = require('morgan');
const passport = require('passport');
const ExerciseService = require('./services/exerciseService');
const path = require('path');
// creating routers
const waterRouter = require('./water/router');
const exerciseRouter = require('./exercise/router');
const weightbmiRouter = require('./weight-bmi/router');
const {router: usersRouter} = require('./users');
//const {router: exerciseRouter} = require('./exercise');
const {router: authRouter, localStrategy, jwtStrategy} = require('./auth');
const {PORT, DATABASE_URL} = require('./config');
const app = express();
// CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    if (req.method === 'OPTIONS') {
      return res.send(204);
    }
    next();
});


passport.use(localStrategy);
passport.use(jwtStrategy);
const jwtAuth = passport.authenticate('jwt', {session:false});
// routes
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/weightandbmi', weightbmiRouter);
app.use('/exercise', exerciseRouter);
app.use('/water', waterRouter);
// protected endpoin

app.get('/protected', jwtAuth, (req,res) =>{
    return res.json({
        data: 'protected data'
    });
});
// ?? 
app.use('*', (req,res) => {
    return res.status(400).json({
        message: 'Not Found'
    });
});
let server;
function runServer(databaseUrl, port = PORT){
    return new Promise((resolve, reject) => {
        mongoose.connect(databaseUrl, err => {
            if(err){
                return reject(err);
            }
            server = app.listen(port, () => {
                console.log(`Your app is listening on port ${port}`);
                resolve();
            })
            .on('error', err =>{
                mongoose.disconnect();
                reject(err);
            });
        });
    });
}

function closeServer(){
    return mongoose.disconnect().then(() => {
        return new Promise((resolve, reject)=> {
            console.log('Closing server');
            server.close(err => {
                if(err){
                    return reject(err);
                }
                resolve();
            });
        });
    });
}

if(require.main === module){
    runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = {app, runServer, closeServer}




