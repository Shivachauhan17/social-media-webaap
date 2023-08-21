const mongoose=require('mongoose')

const commentsSchema=mongoose.Schema({
    comment:{
        type:String,
        required:true,
    },
    person:{
        type:String,
        required:true,
    },
    post:{
        type:String,
        required:true,
    },
})

module.exports=mongoose.model('Comment',commentsSchema)