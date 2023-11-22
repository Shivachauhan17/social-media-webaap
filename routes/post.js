const express=require('express')
const router=express.Router()

const postsController = require("../controllers/posts");
const multer =require('multer')
const upload=multer({dest:'uploads/'});
// const { ensureAuth, ensureGuest } = require("../middleware/auth");
// const { route } = require('./main');


// router.get("/:id", ensureAuth, postsController.getPost);
router.get("/getFeed",postsController.getFeed)

router.get("/:postId",postsController.getPost);
router.get('/getBio',postsController.getBio)
router.get('/getStats/:userName',postsController.getStats)
router.post("/",postsController.getProfilePost);
router.post("/createPost",upload.single("myfile"),postsController.createPost)
router.put("/like",postsController.likePost)
router.delete("/delete",postsController.deletePost)
router.post("/comment",postsController.postComment)
router.post('/getComments',postsController.getComments)
router.post('/addBio',postsController.addBio)
module.exports=router
