module.exports = {
    getIndex: (req, res,next) => {
      try{
      if(req.user!==null && req.user?.userName!==undefined){
        res.json({user:req.user?.userName})
      }
      else{
        res.json({user:""})
      }
    }
    catch(err){
      console.log(err);
      res.json({user:""});
    }
  }
  };