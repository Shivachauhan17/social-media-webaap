const mongoose=require('mongoose')
const Post = require("../models/Post");
const Comment=require("../models/Comment")
const Like=require('../models/Like')
const Bio=require('../models/Bio')
const cloudinary = require("../middleware/cloudinary");


module.exports = {
  getProfilePost4Public:async(req,res)=>{
    console.log("req body:",req.body)
    const posts=await Post.find({user:req.body.user})
    console.log(posts)
    res.json({posts:posts})
  },
  getBioPublic:async(req,res)=>{
    try{
    const username=req.body.username;
    const bio=await Bio.findOne({username:username});
    return res.json({bio:bio,username})
    }
    catch(error){
      console.log(error)
      return res.json({msg:"error"})
    }
  },
  getProfilePost: async (req, res) => {
    try{
    const posts=await Post.find({user:req.user?.userName})
    res.json({posts:posts})}
    catch(err){
      console.log(err)
      res.json({posts:[]})}
    
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
      const postId=new mongoose.Types.ObjectId(req.body.postId)
        const post=await Post.findOne({_id:postId})
        return res.json({post:post})
    }
    catch(error){
      console.log(error)
        return res.json({msg:error})
    }
  },

  getBio:async(req,res)=>{
    try{
      console.log(req.user)
      const bio=await Bio.findOne({username:req.user?.userName})
      return res.json({bio:bio,username:req.user?.userName})
    }
    catch(error){
      console.log(error)
      return res.json({msg:"error"})
    }
  },

  

  getStats:async(req,res)=>{

    try{
      console.log("in stats")
      const userName=req.params.userName
      let stats={
        likes:0,
        comments:0,
        posts:0
      }
      total_likes=0
      total_posts=0
      postIdArray=[]

      await Post.find({user:userName})
        .then((Posts)=>{
          if(total_posts===0){
            total_posts=Posts.length
          }

          Posts.forEach((element)=>{
            total_likes+=element.likes

            postIdArray.push(element._id)

          })
        })
        .catch((err)=>console.log(err))
      
      total_comments=0
      for(let i=0;i<postIdArray.length;i++){
        await Comment.find({post:postIdArray[i]})
          .then((comments)=>{
            total_comments+=comments.length
          })
          .catch((error)=>{
            console.log("error in ",i,"iteration")
            console.log(error)
          })
      }

      stats.comments=total_comments
      stats.likes=total_likes
      stats.posts=total_posts

      res.json({stats:stats})

    }
    catch(error){
      console.log(error)
      return res.json({msg:"error"})
    }
  },
  
  createPost:async (req,res)=>{
    try{
      console.log(req)
      
      const result=await cloudinary.uploader.upload(req.file.path)

      await Post.create({
        image:result.secure_url,
        cloudinaryId:result.public_id,
        caption:req.body.caption,
        likes:0,
        user:req.user?.userName,
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
      const like=await Like.findOne({post_id:req.body.post_id,user:req.body.user})

      if(!like){

        Like.create({
          post_id:req.body.post_id,
          is_liked:1,
          user:req.body.user,
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
    const post=await Post.findOne({_id:new mongoose.Types.ObjectId(req.body.post_id)})
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
      await Comment.create({
        comment:req.body.comment,
        person:req.user?.userName,
        post:req.body.post,
      })
      
      const comments=await Comment.find({post:req.body.post})
      return res.json({comments:comments})

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
      
      console.log(req.user)
        // Check if a document with the given username exists
        const existingBio = await Bio.findOne({username: req.user?.userName });
        let bio=existingBio;
        if (existingBio) {
            // Update the existing document
            existingBio.profession = req.body.profession;
            existingBio.hobby = req.body.hobby;
            existingBio.birthday = req.body.birthday;
            existingBio.love_to_do = req.body.loveToDo;

            await existingBio.save();
        } else {
            // Create a new document if it doesn't exist
            const newBio = new Bio({
                username: req.user?.userName,
                profession: req.body.profession,
                hobby: req.body.hobby,
                birthday: req.body.birthday,
                love_to_do: req.body.loveToDo,
            });

            await newBio.save();
            bio=newBio;
        }

        return res.json({ bio:bio});
    }
    catch(error){
      console.log(error)
      return res.json({msg:"error"})
    }

  }



}