const Post = require("../models/Post");
const Comment=require("../models/Comment")
const cloudinary = require("../middleware/cloudinary");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("profile.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
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
        const post=await Post.findById(req.params.id)
        const comment=await Comment.find({post:post.id})
        res.render("post.ejs",{post:post,user:req.user,comments:comment})
        console.log(req.user)
    }
    catch(error){
        console.log(error)
    }
  },
  createPost:async (req,res)=>{
    try{
      const result=await cloudinary.uploader.upload(req.file.path)

      await Post.create({
        title:req.body.title,
        image:result.secure_url,
        cloudinaryId:result.public_id,
        caption:req.body.caption,
        likes:0,
        user:req.user.id,
      })
      console.log("post has been added")
      res.redirect("/profile")
    }
    catch(error){
      console.log(err)
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
      await Comment.create({
        comment:req.body.comment,
        person:req.params.userName,
        post:req.params.postId,
      })
      res.redirect(`/post/${req.params.postId}`)
    }
    catch(err){
      console.log(err)
    }
  }



}