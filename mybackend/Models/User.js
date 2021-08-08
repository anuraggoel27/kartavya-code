var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
  
  
var UserSchema = new Schema({   
    username: String,
    password: String
});
  
// plugin for passport-local-mongoose
UserSchema.plugin(passportLocalMongoose);
  
// export userschema
 module.exports = mongoose.model("User", UserSchema);