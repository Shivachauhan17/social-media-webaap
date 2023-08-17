const express=require('express')
const router=express.Router()
const authController=require('../controllers/auth.js')
const homeController=require('../controllers/home')
// const postsController=require('controllers/posts')

router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, postsController.getProfile);
// router.get("/feed",postsController.getFeed)
router.get("/login",authController.getLogin)
router.post("/login",authController.postLogin)
router.get("/logout",authController.getLogout)
router.get("/signup",authController.getSignup)
router.post("/signup",authController.postSignup)

module.exports=router
