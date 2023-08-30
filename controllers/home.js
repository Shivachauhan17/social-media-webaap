module.exports = {
    getIndex: (req, res) => {
      const info={
        loginUrl:"/login",
        signupUrl:"/signup",
        button1:"LOGIN",
        button2:"SIGNUP"
      }
      res.json(info);
    },
  };