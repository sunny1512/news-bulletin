const express = require('express');
const mongoose = require('mongoose');
var newsinfo = require('../model/news');
var newsRouter = express.Router();


newsRouter.route('/')
.get((req,res,next)=>{

newsinfo.find({})
.then((news)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    
    res.json(news);
},(err)=>next(err))
.catch((err)=>next(err));
}
)


module.exports= newsRouter;
