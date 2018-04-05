'use strict';
// 
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var User = require('mongoose').model('User');
//
// module.exports = function() {
//   passport.use('local', new LocalStrategy({
//       usernameField: 'email',
//       passwordField: 'password'
//     },
//     function(email, password, done) {
//       User.authenticate(email, password, function(err, user) {
//         if (err) {
//           return done(err);
//         }
//
//         if (!user) {
//           return done(null, false, { message: 'Invalid email or password.' });
//         }
//
//         return done(null, user);
//       });
//     }
//   ));
// };



//
// var passport = require('passport');
// var mongoose = require('mongoose');
// var User = mongoose.model('User');

// module.exports.init = function(app) {
//   passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });
//
//   passport.deserializeUser(function(id, done) {
//     User.findById(id, done);
//   });
//
//   // load strategies
//   require('./strategies/local')();
// };
