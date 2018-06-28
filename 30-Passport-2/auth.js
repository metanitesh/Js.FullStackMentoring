const express = require('express');
const { MongoClient } = require('mongodb');
const passport = require('passport');

const authRouter = express.Router();

console.log("auth")

function getAuth(){
    authRouter.route('/')
    .get((req,res)=>{
        res.redirect("/")
    }).post((req, res)=>{
        console.log("in post");
        console.log(req.body)
        res.send()
    })

}

module.exports = getAuth