const mongoose =require('mongoose');
const Schema =mongoose.Schema;


const fileSchema =new Schema({

filename:{ type:String, required:true},
path:{type:String, required: true},
size:{type: Number, required: true},
uuid:{ type: String, required: true},
sender:{ type: String, required: false}, //if requrested to get link on email, we store ithe email
reciever:{ type: String, required: false},
},{timestamps:true}) ;
 //blueprint of file will look in databse

 module.exports =mongoose.model('File',fileSchema);
