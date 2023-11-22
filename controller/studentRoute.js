const express=require("express");
const studentSchema = require("../models/studentSchema");
const EmployeeModel=require('../models/employee')
const studentRoute=express.Router();
const mongoose=require("mongoose");
const app=express()
const cors = require("cors");

app.use(express.json())
app.use(cors())













studentRoute.post("/create-student",(req,res)=>{
  studentSchema.create(req.body, (err,data) => {
      if(err)
          return err;
      else
          res.json(data);
  })
})


studentRoute.get("/",(req,res)=>{
studentSchema.find((err,data)=>{
  if(err)
  return err;
else
   res.json(data);
})
})



studentRoute.get("/view/:id",(req,res)=>{
  studentSchema.find((err,data1)=>{
    if(err)
    return err;
  else
     res.json(data1);
  })
  })

studentRoute.delete("/delete-student/:id",(req,res)=>{
  studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
  (err,data)=>{
      if(err)
          return err;
      else
          res.json(data);
  })
})











module.exports = studentRoute;