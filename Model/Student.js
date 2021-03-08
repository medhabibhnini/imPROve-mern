const mongoose =require('mongoose');
const StudentSchema = 
new mongoose.Schema({
firstname:{type :String,required:false},
lastname:{type : String ,required:false},
password:{type : String ,required:false},
username:{type : String ,required:false},
email:{type : String,required: true},
birthdate: { type : Date, required: false},
sexe:{type : String,required: false},
cin:{type : String,required: false},
image:{type : String,required: false},
level:{type :String,required:false},
university:{type :String,required:false},
domain:{type :String,required:false},
skills :{type : Array ,"default" :[]}


},{ timestamps: true,});

const Student = mongoose.model('Student',StudentSchema);
module.exports=Student;