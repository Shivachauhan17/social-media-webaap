const express=require('express')
const app=express()
const path=require('path')
const cors=require('cors')
// const passport=require('passport')
const session=require('express-session')
const MongoStore=require('connect-mongo')
const flash=require('express-flash')
const logger=require('morgan')
const methodOverride = require('method-override');
const cookieParser=require('cookie-parser')

const connectDB=require('./config/database')
require("dotenv").config({ path: "./config/.env" });

const mainRoutes=require('./routes/main')
const postRoutes=require('./routes/post')

// require('./config/passport')(passport)

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // Allow cookies to be sent with requests
};
connectDB()
app.use(cors(corsOptions))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// app.use(
//   session({
//       secret: 'keyboard cat',
//       resave: false,//don't save session is unmodified
//       saveUninitialized: false,//don't create session untill something is stores
//       store: MongoStore.create({
//         mongoUrl: process.env.DB_STRING,
//         collection: 'sessions'
//       })  
//   })
//   )

// require('./config/passport')(passport)

// app.use(passport.initialize());
// app.use(passport.session());
// app.use((req,res,next)=>{
//   console.log("session data:",req.session);
//   console.log("user:",req.user);
//   next(); 
// })

app.use('/',mainRoutes)
app.use('/post',postRoutes)


app.listen(8000, () => {
  console.log("Server is running, you better catch it!");
});