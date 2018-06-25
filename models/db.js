let mongoose = require('mongoose');
// let dbURI = 'mongodb://localhost/audience';

let dbURI = 'mongodb://herokudev:msgmyfriends1@ds263740.mlab.com:63740/heroku_vsxzwx9q';

mongoose.connect(dbURI, { useMongoClient: true });

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

require('./audience.model');