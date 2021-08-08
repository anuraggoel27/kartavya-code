const mongoose = require("mongoose");
const querySchema= new mongoose.Schema({
    name:String,
    email:String,
    contact:String,
    course:String,
    date:{
      type:Date,
      default:Date.now(),
    }
  })

  module.exports= mongoose.model("queries", querySchema)