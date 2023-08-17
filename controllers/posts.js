const Post = require("../models/Post");
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
        const post=Post.findById(req.params.id)
        res.render("post.ejs",{post:post,user:req.user})
    }
    catch(error){
        console.log(error)
    }
  },
  createPost:(req,res)=>{
    try{

    }
  }
}