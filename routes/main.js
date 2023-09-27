const express=require('express')
const router=express.Router()
const authController=require('../controllers/auth.js')
const homeController=require('../controllers/home')
const postsController=require('../controllers/posts')
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const passport = require('passport')

router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed",postsController.getFeed)
router.post("/login",authController.postLogin)
router.get("/logout",authController.getLogout)
router.post("/signup",authController.postSignup)

module.exports=router
