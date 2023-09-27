const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')

module.exports = function (passport) {
  passport.use(new LocalStrategy({ usernameField: 'username' }, async (username, password, done) => {
    console.log("in localStrategy")
    
    try{
    const user= await User.findOne({ "username": username})
    
      user.comparePassword(password, (err, isMatch) => {
        console.log("in comapre password")
        if (err) { return done(err) }
        if (isMatch) {
          return done(null, user)
        }
        return done(null, false, { msg: 'Invalid email or password.' })
      })}
    catch(err){
      console.log(err)
    }
    }))
      passport.serializeUser((user, done) => {
    console.log("serialize user")
    console.log("user in serialize user:",user)
    done(null, user.id)
  })

  passport.deserializeUser(async (id, done) => {
    console.log("deserialize user");
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });
    
    }
    





