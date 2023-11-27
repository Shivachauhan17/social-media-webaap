const passport=require('passport')
const  validator=require('validator')
const User=require('../models/User');
const { json } = require('body-parser');
const genPassword=require('../lib/passwordUtils').genPassword
const validPassword=require('../lib/passwordUtils').validPassword

exports.postLogin=async (req,res,next)=>{
  const validationErrors=[]
  if (validator.isEmpty(req.body.password)) validationErrors.push({ message: 'Password cannot be blank.' })
  if (validator.isEmpty(req.body.username)) validationErrors.push({ message: 'Username cannot be blank.' })
  
  if(validationErrors.length){
    return res.json({errors:validationErrors})
  }
  
  // passport.authenticate('local',(err,user,info)=>{
  //   console.log('passport.authenticate')
  //   if(err) {return res.json({error:err})}
    
  //   if(!user){  
  //     return res.json({error:info})
  //   }
    
  //   req.logIn(user,(err)=>{
  //     if(err) return res.json({error:err})
  //     res.json({user:user})
  //   })
    
  // })(req, res, next)
  const password=req.body.password;
  const users=await User.find({"username":req.body.username})
  const user=users[0]
  
  if(validPassword(req.body.password,user.password,user.salt)){
    return res.json({user:req.body.username})
  }
  else{
    return res.json({error:"Invalid user"})
  }

}

exports.getLogout = (req, res) => {
  try{
    
    // req.logout(() => {
    //   console.log('User has logged out.')
    // })
    req.session.destroy((err) => {
      if (err)
        console.log("Error : Failed to destroy the session during logout.", err);
      res.status(200).json({status:'ok'});
    });
  }
  catch(error){
    console.log(error)
    res.status(500).json({status:'not ok'});
  }
}



    exports.postSignup = async (req, res, next) => {
        const validationErrors = []
        if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long' })
        if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' })
       
        if (validationErrors.length) {
          return res.json({error:validationErrors})
        }
        const existingUser=await User.findOne({username:req.body.userName})
        console.log("existing user:",existingUser)
        if(existingUser !== null && existingUser !== undefined){ 
          console.log("user existed")
          return res.json({error:["user already exists"]})}
        
        console.log("creating user")
        const saltHash=genPassword(req.body.password)
        const salt=saltHash.salt;
        const hash=saltHash.hash;

        console.log("username is",req.body.username)
      
        const newUser = new User({
          userName: req.body.userName,
          password:hash,
          salt:salt
        })
        
          
        newUser.save()
        return res.json({user:req.body.userName})
       
    }
        