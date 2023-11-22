module.exports = {
    getIndex: (req, res,next) => {
      console.log(req.user)
      res.json({user:req.user})
    },
  };