const router=require('express').Router()
const passport=require('passport')

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));


  router.get('/auth/google/callback', 
  passport.authenticate('google', {failureRedirect: 'social-network-webaap-5lojemmso-shivas-projects-02e21579.vercel.app/loginFailure',successRedirect:'social-network-webaap-5lojemmso-shivas-projects-02e21579.vercel.app/loginSuccessful' })
  );

module.exports=router