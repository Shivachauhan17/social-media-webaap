const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  salt:String
})


// // Password hash middleware.
 
//  UserSchema.pre('save', function save(next) {
//   console.log("in models pre")
//   const user = this
//   if (!user.isModified('password')) { return next() }
//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) { return next(err) }
//     bcrypt.hash(user.password, salt, (err, hash) => {
//       if (err) { return next(err) }
//       user.password = hash
//       console.log("in models pre2")
//       next()
//       console.log("not gone to serialize user")
//     })
//   })
// })


// // Helper method for validating user's password.

// UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//     cb(err, isMatch)
//   })
// }


module.exports = mongoose.model('User', UserSchema)