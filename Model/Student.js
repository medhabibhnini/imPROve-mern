const mongoose =require('mongoose');
const StudentSchema = 
new mongoose.Schema({
    firstname:{type :String,required:true},
lastname:{type : String ,required:true},
password:{type : String ,required:true},
username:{type : String ,required:true},
email:{type : String,required: true},
birthdate: { type : Date, required: true},
sexe:{type : String,required: false},
cin:{type : String,required: true},
image:{type : String,required: true},
    level:{type :String,required:true},
    university:{type :String,required:true},
    domain:{type :String,required:true},
    skills :{type : Array ,"default" :[]}


},{ timestamps: true,});

const Student = mongoose.model('Student',StudentSchema);
module.exports=Student;