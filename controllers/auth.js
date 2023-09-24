const passport=require('passport')
const  validator=require('validator')
const User=require('../models/User');
const { hash } = require('bcrypt');
const { json } = require('body-parser');
const genPassword=require('../lib/passwordUtils').genPassword;

exports.getProfile=(req,res)=>{
  res.json({user:req.user})
}

exports.getLogin=(req,res)=>{
    if(req.user){
        return res.json({user:"op"})
        
    }
    res.json({user:null})
}

exports.postLogin=(req,res)=>{

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

    exports.getSignup = (req, res) => {
    if (req.user) {
        return res.json(json({user:req.user.id}))
    }
    res.json({user:null})
    }


    exports.postSignup = async (req, res, next) => {
        const validationErrors = []
        console.log(req.body)
        if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long' })
        if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' })
       
        if (validationErrors.length) {
          return res.json({error:validationErrors})
        }
        

        const user = new User({
          username: req.body.userName,
          password:req.body.password
        })
        try{
        const existingUser=await User.findOne({$or:[{username:req.body.userName}]})
        console.log(existingUser)
        if(existingUser !== null && existingUser !== undefined){ return res.json({message:"user already exists"})}
          user.save()

            req.logIn(user,(err)=>{
              if(err) return res.json({error:err})
              res.json({user:user})
            })
          }
          catch(err){
            return res.json({error:err})
          }
          
       
    }
        