
const mongoose=require("mongoose");
const express=require("express");
const studentRoute = require("./controller/studentRoute");
const EmployeeModel = require('./models/employee');
const bodyParser = require("body-parser");
const cors = require("cors");
const cartRoute=require('./controller/cartRoute')
// const loginRoute=require('./controller/loginRoute')
const reviewRoute=require("./controller/reviewRoute");

const app=express();

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://test:tan12345@cluster0.czwdzca.mongodb.net/school")
var db=mongoose.connection;
db.on("open",()=>console.log("connected to db"));
db.on("error",()=>console.log("error occured"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/studentRoute",studentRoute);
app.use('/Route',cartRoute)
app.use('/reviewRoute',reviewRoute);
// app.use("/Route",loginRoute)
app.post("/login", async (req, res) => {
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
  
  app.post('/register', async (req, res) => {
    try {
      const newUser = await EmployeeModel.create(req.body);
      res.json(newUser);
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
app.listen(4000,()=>console.log("server started at 4000"));