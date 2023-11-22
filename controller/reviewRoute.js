const express=require("express");
const reviewsRoute=express.Router();
const mongoose=require("mongoose");
const reviewsSchema=require('../models/review');
reviewsRoute.post("/create-review",(req,res)=>{
  reviewsSchema.create(req.body, (err,data) => {
      if(err)
          return err;
      else
          res.json(data);
  })
})

reviewsRoute.get("/",(req,res)=>{
    reviewsSchema.find((err,data)=>{
      if(err)
      return err;
    else
       res.json(data);
    })
    })

module.exports = reviewsRoute;