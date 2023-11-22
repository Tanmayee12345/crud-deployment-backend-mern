const express=require("express");

const cartRoute=express.Router();
const mongoose=require("mongoose");


const cartSchema=require('../models/cart')











cartRoute.post("/create-cart",(req,res)=>{
  cartSchema.create(req.body, (err,data) => {
    if(err){
      return err;
  }
  else{
      try {
          const data = cartSchema(req.body);
          res.json(data);
      } catch (err) {
          res.status(500).json({ error: err.message });
      }
  }
  })
})


cartRoute.get("/get-cart",(req,res)=>{
cartSchema.find((err,data)=>{
  if(err)
  return err;
else
   res.json(data);
})
})


cartRoute.route("/update-cart/:id")
.get((req,res)=>{
  cartSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
    if(err)
    return err;
  else
  return res.json(data);
  })
  }
).put((req,res)=>{
  cartSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
  {$set: req.body},
  (err,data)=>{
      if(err)
          return err;
      else
          res.json(data);
  })
})

cartRoute.delete("/delete-cart/:id",(req,res)=>{
  cartSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
  (err,data)=>{
      if(err)
          return err;
      else
          res.json(data);
  })
})

// app.post("/login",(req,res)=>{
//   const{email,password}=req.body;
//   EmployeeModel.findOne({email:email})
//   .then(user =>{
//     if(user){
//       if(user.password ===password){
//         res.json("sucess")
//       }else{
//         res.json("the password is incorect")
//       }
//     }else{
//       res.json("no record exists")
//     }
//   })
// })


// app.post('/register',(req,res)=>{
//   EmployeeModel.create(req.body)
//   .then(employees=>res.json(employees))
//   .catch(err=>res.json(err
//     ))
// })







module.exports = cartRoute;