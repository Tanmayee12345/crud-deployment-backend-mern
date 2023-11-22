const mongoose=require('mongoose');

const cart=mongoose.Schema({
  "id":{type:String},
  "bookid":{type:String},
  "bookname":{type:String}
},{
  collection:"cartlist"
})

module.exports=mongoose.model('cart',cart)