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


newsRouter.route('/sort')
.get((req,res,next)=>{

newsinfo.find({}).sort('publisher')
.then((news)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    
    res.json(news);
},(err)=>next(err))
.catch((err)=>next(err));
}
)

newsRouter.route('/:publisher_name')
.get((req,res,next)=>{
console.log(req.params.publisher_name);
newsinfo.find({publisher : req.params.publisher_name})
.then((news)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    
    res.json(news);
},(err)=>next(err))
.catch((err)=>next(err));
}
)




module.exports= newsRouter;
