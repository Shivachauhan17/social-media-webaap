const mongoose=require('mongoose')
const Post = require("../models/Post");
const Comment=require("../models/Comment")
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
        const posts=await Post.find().sort({ createdAt:"desc"}).lean()
        res.render("feed.ejs",{posts:posts})
    }
    catch(error){
        console.log(error)
    }
  },
  getPost:async (req,res)=>{
    try{
      const postId=new mongoose.Types.ObjectId(req.params.postId)
        const post=await Post.findOne({_id:postId})
        return res.json({post:post})
    }
    catch(error){
      console.log(error)
        return res.json({msg:error})
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
      await Post.findOneAndUpdate({
        _id:req.params.id,
      },
      {
        $inc:{likes:1},
      })
      console.log("like+1")
      res.redirect(`/post/${req.params.id}`)
    }
    catch(error){
      console.log(error)
    }
  },

  deletePost:async (req,res)=>{
    try{
      let post=await Post.findById({_id:req.params.id})
      await cloudinary.uploader.destroy(post.cloudinaryId)
      await Post.deleteOne({_id:req.params.id})
      console.log("deleted post")
      res.redirect("/profile")
    }
    catch(err){
      console.log(err)
      res.redirect("/profile")
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

  }



}