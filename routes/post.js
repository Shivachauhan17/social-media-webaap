const express=require('express')
const router=express.Router()

const postsController = require("../controllers/posts");
const multer =require('multer')
const upload=multer({dest:'uploads/'});
// const { ensureAuth, ensureGuest } = require("../middleware/auth");
// const { route } = require('./main');


// router.get("/:id", ensureAuth, postsController.getPost);
router.get("/:postId",postsController.getPost);
router.post("/",postsController.getProfilePost);

router.post("/createPost",upload.single("myfile"),postsController.createPost)
router.put("/likePost/:id",postsController.likePost)
router.delete("/deletePost/:id",postsController.deletePost)
router.post("/comment/:userName/:postId",postsController.postComment)
module.exports=router
