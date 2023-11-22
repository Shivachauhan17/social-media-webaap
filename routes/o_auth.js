const router=require('express').Router()
const passport=require('passport')

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));


  router.get('/auth/google/callback', 
  passport.authenticate('google', {failureRedirect: 'http://localhost:3000/loginSuccessful',successRedirect:'http://localhost:3000/loginFailure' })
  );

module.exports=router