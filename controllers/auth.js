const passport=require('passport')
const  validator=require('validator')
const User=require('../models/User');
const { json } = require('body-parser');



exports.postLogin=(req,res,next)=>{
  const validationErrors=[]
  if (validator.isEmpty(req.body.password)) validationErrors.push({ message: 'Password cannot be blank.' })
  if (validator.isEmpty(req.body.username)) validationErrors.push({ message: 'Username cannot be blank.' })
  
  if(validationErrors.length){
    return res.json({errors:validationErrors})
  }
  
  passport.authenticate('local',(err,user,info)=>{
    console.log('passport.authenticate')
    if(err) {return res.json({error:err})}
    
    if(!user){  
      return res.json({error:info})
    }
    
    req.logIn(user,(err)=>{
      if(err) return res.json({error:err})
      res.json({user:user})
    })
    
  })(req, res, next)

}

exports.getLogout = (req, res) => {
  try{
    req.logout(() => {
      console.log('User has logged out.')
    })
    req.session.destroy((err) => {
      if (err) console.log('Error : Failed to destroy the session during logout.', err)
      req.user = null
    })
  }
  catch(error){
    res.redirect('/')
  }
}



    exports.postSignup = async (req, res, next) => {
        const validationErrors = []
        console.log("req body in post Signup",req.body)
        if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long' })
        if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' })
       
        if (validationErrors.length) {
          return res.json({error:validationErrors})
        }
        const existingUser=await User.findOne({$or:[{username:req.body.userName}]})
        console.log("existing user:",existingUser)
        if(existingUser !== null && existingUser !== undefined){ 
          console.log("user existed")
          return res.json({error:["user already exists"]})}
        
        console.log("creating user")
        const user = new User({
          username: req.body.userName,
          password:req.body.password
        })
        try{
        
          user.save()
            req.logIn(user,(err)=>{
              if(err) return res.json({error:[err]})
              res.json({user:user})
            })
            console.log(" after req.login")
          }
          catch(err){
            return res.json({error:[err]})
          }
          
       
    }
        