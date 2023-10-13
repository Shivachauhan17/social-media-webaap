const mongoose = require('mongoose')

const LikeSchema=mongoose.Schema({
    post_id:String,
    is_liked:Number,
    user:String
})


module.exports = mongoose.model('Like', LikeSchema)