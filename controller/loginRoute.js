const express=require('express');
const mongoose=require('mongoose');

const loginRoute=express.Router();

loginRoute.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await EmployeeModel.findOne({ email: email });
    
    if (user) {
      if (user.password === password) {
        if(user.email==='admin@gmail.com' && user.password==='Admin@123'){
          res.json(["success",user._id,user.name,1]);
        }
        else{
          res.json(["success",user._id,user.name,2]);
        }
        
      } else {
        res.status(401).json("Incorrect password");
      }
    } else {
      res.status(404).json("No record exists");
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

loginRoute.post('/signup', async (req, res) => {
  try {
    const newUser = await EmployeeModel.create(req.body);
    res.json(newUser);
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports=loginRoute;