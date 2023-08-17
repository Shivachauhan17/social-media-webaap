const express=require('express')
const app=express()
const mongoose=require('mongoose')
const {urlencoded}=require('body-parser')
const passport=require('passport')
const session=require('express-session')
const MongoStore=require('connect-mongo')
const flash=require('express-flash')
const logger=require('morgan')


const connectDB=require('./config/database')
require("dotenv").config({ path: "./config/.env" });

const mainRoutes=require('./routes/main')
// const postRoutes=require('./routes/post')

require('./config/passport')(passport)

connectDB()
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(logger('dev'))

let store = new MongoStore({
    mongoUrl: process.env.DB_STRING,
    collection: "sessions"
  });


app.use(
session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    // so we are gonna have our session info in our mongo database
    // store: new MongoStore({ mongooseConnection: mongoose.connection }),
    store:store,
})
)

app.use(passport.initialize())
app.use(passport.session())
app.use(flash())


//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
// app.use("/post", postRoutes);

//Server Running
PORT=8000
app.listen(PORT, () => {
  console.log("Server is running, you better catch it!");
});


