const express = require("express");
const router = express.Router(); 
const Query = require("../Models/Query");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload")

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


router.post("/upload", function(req,res){
  if(req.files===null){
    return res.status(400).json({msg:"No file was uploaded"})
  }
  const file= req.files.file;
  file.mv(`${__dirname}/../../front_end/public/uploads/${file.name}`, err=>{
    if(err){
      console.log(err)
      return res.status(500).send(err);
    }
    console.log(file)
    res.json({filename: file.name, filePath:`/uploads/${file.name}`})
  })
})
module.exports = router;
