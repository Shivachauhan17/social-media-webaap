module.exports = {
    getIndex: (req, res) => {
      console.log(req.originalUrl)
      const info={
        loginUrl:"/login",
        signupUrl:"/signup",
        button1:"LOGIN",
        button2:"SIGNUP"
      }
      res.json(info);
    },
  };