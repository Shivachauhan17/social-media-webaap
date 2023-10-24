module.exports = {
    getIndex: (req, res,next) => {

      res.json({user:req.user})
    },
  };