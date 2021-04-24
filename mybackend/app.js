const express=require('express');
const bodyParser = require('body-parser');
const cors=require("cors");
const app=express();
const mongoose=require("mongoose");
const request=require("request");
app.use(bodyParser.json());
app.use(cors());
const port=3001;



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:qlvasMVGIxDLCbDA@cluster0.ivv8d.mongodb.net/KartavyaDB?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});


const querySchema=mongoose.Schema({
    name:String,
    email:String,
    contact:String,
    course:String,
    joined:String
});

const Query=mongoose.model("Query",querySchema);



app.post("/query",function(req,res){
    const query=req.body;
    Query.create(query,function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
})

app.get("/query",function(req,res){
        Query.find(function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
})


app.listen(port,function(){
    console.log(`Server is initiated at port ${port}`);
})