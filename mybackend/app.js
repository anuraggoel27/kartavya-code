const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const app = express();
const mongoose = require("mongoose");
const request = require("request");
const { default: axios } = require("axios");


app.use(cors());
const port = 3001;


const querySchema = mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  course: String,
  joined: String,
});

const Query = mongoose.model("Query", querySchema);

app.post("/query", function (req, res) {
  const query = req.body;
  Query.create(query, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/query", function (req, res) {
  Query.find(function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.use(
  session({
    secret: "Kartavya academy is best",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const MongoClient = require("mongodb").MongoClient;
const { useTheme } = require("@material-ui/core");
const uri =
  "mongodb+srv://admin:qlvasMVGIxDLCbDA@cluster0.ivv8d.mongodb.net/KartavyaDB?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true,useCreateIndex:true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.get("/admin", function (req, res) {
  if (req.isAuthenticated()) {
    res.render("admin");
  } else {
    res.redirect("/login");
    console.log("You are not logged in!")
  }
});

app.get("/signup", function (req, res) {
  User.find(function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
app.post("/login",function(req,res){
  const user = new User({
    username:req.body.username,
    password:req.body.password
  })
  req.login(user,function(err){
    if(err){
      console.log(err);
    }else{
      passport.authenticate("local")(req,res,function(){
        console.log("Successfully logged in");
      })
    }
  })
  res.send();
})

app.post("/signup", function (req, res) {
  User.register(
    { username: req.body.username },
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
      } else {
        passport.authenticate("local")(req, res, function () {
          console.log("You are authenticated as your new account has been registered")
        });
      }
    }
  );
});

app.listen(port, function () {
  console.log(`Server is initiated at port ${port}`);
});
