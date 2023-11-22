const mongoose=require('mongoose');

const reviews=mongoose.Schema({
  "name":{type:String},
  
  "bookname":{type:String},
  
  "category":{type:String},
  "rating":{type:Number},
  "review":{type:String}
},{
  collection:"reviews"
})

module.exports=mongoose.model('reviews',reviews)