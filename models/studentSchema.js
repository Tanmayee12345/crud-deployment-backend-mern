const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
  "category":{type:String},
  "name":{type:String},
  "email":{type:String},
  "rollNo":{type:Number},
  "summary":{type:String}
 
},{
  collection:"books"
})
module.exports=mongoose.model("studentSchema",studentSchema);






