const express = require("express");
const router = express.Router(); 
const Query = require("../Models/Query");
const mongoose = require("mongoose");

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


module.exports = router;
