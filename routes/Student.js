
const Student = require("../Model/Student");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();

//import auth from '../middleware/auth.js'

//register
router.post("/",async (req,res)=>{
   
try {
 const salt = await  bcrypt.genSalt();
 const passwordHash=req.body.password;
  const password = await bcrypt.hash(passwordHash, salt)
    const username =req.body.username;
    const firstname=req.body.firstname;
    const lastname=req.body.lastname;
    const email= req.body.email;
    const sexe=req.body.sexe;
    const birthdate=req.body.birthdate;
    const cin =req.body.cin;
    const image = req.body.image;
    const level =req.body.level;
    const university=req.body.university;
    const domain = req.body.domain;
    const skills =req.body.skills;
    if(!firstname || !lastname || !password || !username|| !email || !birthdate || !sexe || ! cin || ! image || ! level || !university || !domain  )
    return res.status(400) .json({errorMessage :"please enter all required field"});
    if (password.length < 6)
    return res.status(400).json({
      errorMessage: "Please enter a password of at least 6 characters.",
    });
   
    const newStudent = new Student({firstname,lastname,
        password,username,email,
        birthdate,sexe,cin,image,level,university,domain,skills});
     const savedStudent= await   newStudent.save()
        .then(()=>res.json('student added !'))
        .catch(err => res.status(400).json('Error' + err));
const token = jwt.sign({email:savedStudent.email, id: savedStudent._id},'test',{expiresIn:"1h"})
         
res.status(200).json({savedStudent, token})
         }
    catch(error)
    {
        
        res.status(500).json({message:'something went wrong'});

    }

        
});
// login user




router.post('/login', async(req , res)=>{
    const { email , password } = req.body;
     try {
         const existStudent = await Student.findOne({email});
         if (!existStudent )return res.status(404).json({message: "Student not found"})

         const isPasswordCorrect  = await bcrypt.compare(password, existStudent.password);
         if(!isPasswordCorrect) return res.status(400).json({message: "invalid credentials"})

         const token = jwt.sign({email: existStudent.email, id:existStudent._id},'test',{expiresIn:"1h"});

         res.status(200).json({result: existStudent , token});
     } catch (error) {
         res.status(500).json({message:"something went wrong."})
     }
});







module.exports = router;