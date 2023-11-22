const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  password: String,
  salt:String
})



module.exports = mongoose.model('User', UserSchema)