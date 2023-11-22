const express=require('express')
const app=express()
const path=require('path')
const cors=require('cors')
const passport=require('passport')
const session=require('express-session')
const MongoStore=require('connect-mongo')
const logger=require('morgan')

const connectDB=require('./config/database')
require("dotenv").config({ path: "./config/.env" });

const mainRoutes=require('./routes/main')
const postRoutes=require('./routes/post')
const OauthRoutes=require('./routes/o_auth')

require('./config/passport')(passport)

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // Allow cookies to be sent with requests
};
connectDB()
app.use(cors(corsOptions))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(
  session({
      secret: 'keyboard cat',
      resave: false,//don't save session is unmodified
      saveUninitialized:true,//don't create session untill something is stores
      store: MongoStore.create({
        mongoUrl: process.env.DB_STRING,
        collection: 'sessions'
      }),
      cookie:{
        maxAge:1000*60*60*24
      }    
  })
  )

require('./config/passport')(passport)

app.use(passport.initialize());
app.use(passport.session());


// app.use((req,res,next)=>{
//   console.log("user info : ",req.user);
//   console.log("session _info",req.session);
//   next();
// })

app.use('/',mainRoutes)
app.use('/post',postRoutes)
app.use('/',OauthRoutes)



app.listen(8000, () => {
  console.log("Server is running, you better catch it!");
});