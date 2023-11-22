const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')
const validPassword = require('../lib/passwordUtils').validPassword;
const GoogleStrategy =require('passport-google-oauth20').Strategy;
const Ouser=require('../models/Ouser')
require('dotenv').config()
const GOOGLE_CLIENT_ID=process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET=process.env.GOOGLE_SECRET_ID

module.exports = function (passport) {
  passport.use(new LocalStrategy({ usernameField: 'userName' }, async (username, password, done) => {

    await User.findOne({ userName: username })
        .then((user) => {
            if (!user) { return done(null, false) }
            
            const isValid = validPassword(password, user.hash, user.salt);
            if (isValid) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
        .catch((err) => {   
            done(err);
        });

    }))



    passport.use(new GoogleStrategy({
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/google/callback"
    },
    async function(req,accessToken, refreshToken, profile, cb) {
      const username=profile._json.email.split('@')[0]
      const defaultUser={
        fullName:profile.displayName,
        email:profile._json.email,
        googleId:profile.id,
        picture:profile._json.picture,
        userName:username
      }
  try{
    const user=await Ouser.findOneAndUpdate({googleId:profile.id},defaultUser,{new:true,upsert:true})
     if(!user){
      return cb(null, false)
     }
     else{
      return cb(null,user)
     }
    }
    catch(err){
      return cb(err,false);
    }
    }
  ));


      passport.serializeUser((user, done) => {
        if(user.googleId){
        const newUser={
          id:user._id,
          googleId:true
        }
    done(null, newUser)}
    else{
      const newUser={
        id:user._id,
        googleId:false
      }
  done(null, newUser)
    }
  })

  passport.deserializeUser(async (userInfo, done) => {
    try {
      if(userInfo.googleId){
        const id=new mongoose.Types.ObjectId(userInfo.id)
        
          const user=await Ouser.findOne({_id:id})
          done(null,user)
          
      }
      else{
        const id=new mongoose.Types.ObjectId(userInfo.id)
        const user=await User.findOne({_id:id})
        done(null,user)
      }
    } catch (err) {
      done(err, null);
    }
  });
    
    }
    