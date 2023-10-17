const mongoose=require('mongoose')
const Post = require("../models/Post");
const Comment=require("../models/Comment")
const Like=require('../models/Like')
const Bio=require('../models/Bio')
const cloudinary = require("../middleware/cloudinary");


module.exports = {
  getProfilePost: async (req, res) => {
    console.log(req.body)
    console.log(req.file)
    const posts=await Post.find({user:req.body.user})
    res.json({posts:posts})
  },
 

  getFeed: async(req,res)=>{
    try{
        const posts=await Post.find().sort()
        console.log("in get feed")
        return res.json({posts:posts})
    }
    catch(error){
        console.log(error)
        return res.json({msg:"error"})
    }
  },

   getPost:async (req,res)=>{
    try{
      const postId=new mongoose.Types.ObjectId(req.params.postId)
      console.log(req.params.postId)
        const post=await Post.findOne({_id:postId})
        console.log(post)
        return res.json({post:post})
    }
    catch(error){
      console.log(error)
        return res.json({msg:error})
    }
  },

  getBio:async(req,res)=>{
    try{
      const response=await Bio.findOne({username:req.params.username})
      return res.json({bio:response})
    }
    catch(error){
      console.log(error)
      return res.json({msg:"error"})
    }
  },
  
  createPost:async (req,res)=>{
    try{
      console.log(req.body)
      console.log(req.file)
      const result=await cloudinary.uploader.upload(req.file.path)

      await Post.create({
        image:result.secure_url,
        cloudinaryId:result.public_id,
        caption:req.body.caption,
        likes:0,
        user:req.body.user,
      })
      console.log("post has been added")
      return res.json({msg:"post has been added"})
    }
    catch(error){
      console.log(error)
    }
  },

  likePost:async(req,res)=>{
    try{
      const like=await Like.findOne({post_id:req.body.post_id,user:req.body.post_id})

      if(!like){

        Like.create({
          post_id:req.body.post_id,
          is_liked:1,
          user:req.body.post_id,
        })
        await Post.findOneAndUpdate({
          _id:req.body.post_id,
        },
        { 
          $inc:{likes:1},
        })
        console.log("like+1")
        const post=await Post.findOne({_id:req.body.post_id})
        return res.json({post:post})
    }
    console.log('arse')
    const post=await Post.findOne({_id:req.body.post_id})
    console.log(post)
      return res.json({post:post})

    }
    catch(error){
      return res.json({msg:"error"})
      console.log(error)
    }
  },

  deletePost:async (req,res)=>{
    try{
      await cloudinary.uploader.destroy(req.query.c_id)
      await Post.deleteOne({_id:req.query.id})
      await Like.deleteOne({_id:req.query.id})
      return res.json({"msg":"success"})
    }
    catch(err){
      console.log(err)
      return res.json({"msg":"error"})
    }
  },  
  postComment:async (req,res)=>{
    try{
      console.log(req.body)
      await Comment.create({
        comment:req.body.comment,
        person:req.body.person,
        post:req.body.post,
      })
      
      return res.json({msg:"success"})

    }
    catch(err){
      console.log(err)
      return res.json({msg:err})
    }
  },

  getComments:async(req,res)=>{
    try{
      const comments=await Comment.find({post:req.body.post})
      return res.json({comments:comments})
    }
    catch(err){
      return res.json({msg:err})
    }

  },
  addBio:async(req,res)=>{
    try{
      const newBio= new Bio({
        username:req.body.username,
        profession:req.body.profession,
        hobby:req.body.hobby,
        birthday:req.body.birthday,
        love_to_do:req.body.loveToDo
      })
      newBio.save()
      return res.json({msg:"success"})
    }
    catch(error){
      console.log(error)
      return res.json({msg:"error"})
    }

  }



}