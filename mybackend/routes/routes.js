const express = require("express");
const router = express.Router();
const User= require("../Models/User");
const Query = require("../Models/Query");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose");


router.post("/register", function (req, res) {
  User.register(new User({username: req.body.username}), req.body.password, function(err, user){
    if(err){
        console.log(err);
        return res.render("register");
    }
    passport.authenticate("local")(req, res, function(){
        res.redirect("/secret");
    });
});
});

router.post("/query", function (req, res) {
  const query = req.body;
  Query.create(query, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

router.get("/query", function (req, res) {
  Query.find(function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

router.get("/correct-login", function (req, res){
  res.send("Correct login !")
})

router.get("/incorrect-login", function (req, res){
  res.send("Incorrect login !")
})
router.get('/check_authentication',function(req,res){
  //do something only if user is authenticated
  if (req.isAuthenticated()){
    console.log("The user is authenticated")
  }else{
    console.log("You need to login first")
  }
});
// function checkAuthentication(req,res,next){
//   if(req.isAuthenticated()){
//       next();
//   } else{
//       res.redirect("/login");
//   }
// }
router.post('/login',
  passport.authenticate('local'),
  function(req,res){
    console.log(res.statusCode)
  });


module.exports = router;
