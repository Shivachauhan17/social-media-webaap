module.exports = {
    getIndex: (req, res,next) => {
      console.log('on home')
      console.log(req.user)
      res.json({user:req.user})
    },
  };