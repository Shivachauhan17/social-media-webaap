const mongoose=require('mongoose')

const BioSchema=mongoose.Schema({
    "username":{
        type:String,
        unique:true,
        required:true,
    },
    "profession":String,
    "birthday":String,
    "hobby":String,
    "love_to_do":String
})

module.exports=mongoose.model('Bio',BioSchema)