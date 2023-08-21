const express=require('express')
const router=express.Router()

const upload=require("../middleware/multer")
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const { route } = require('./main');


router.get("/:id", ensureAuth, postsController.getPost);
router.post("/createPost",upload.single("file"),postsController.createPost)
router.put("/likePost/:id",postsController.likePost)
router.delete("/deletePost/:id",postsController.deletePost)
router.post("/comment/:userName/:postId",postsController.postComment)
module.exports=router
