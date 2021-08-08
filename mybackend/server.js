const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const app = express();
const mongoose = require("mongoose");
const axios = require("axios");
const dotenv = require("dotenv");
const router = express.Router();
const routesUrl = require("./routes/routes");
const User = require('./Models/User'); 
const LocalStrategy= require("passport-local");
var flash = require('connect-flash');
dotenv.config();


// app.set("view engine","ejs");
// app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3001;

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
},()=>{
  console.log("Database Connected")
});


app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));



app.use(express.json())
app.use(cors())
app.use(flash())
app.use("/api", routesUrl);

app.listen(PORT, function () {
  console.log(`Server is active at port ${PORT}`);
});