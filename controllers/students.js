import bcrypt from ('bcryptjs');
import jwt from ('jsonwebtoken');

import Student from '../Model/Student.js'

export const signin = async(req , res)=>{
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
}
/*export const signup = async(req,res)=>{
    const { firstname, lastname, password,username,email,birthdate,sexe,cin,image,level,university,domain } = req.body;

    try {
        const existStudent = await Student.findOne({email});
        if (!existStudent )return res.status(404).json({message: "user already exist"})
        const hashedPassword = await bcrypt.hash(password,12);
        const result
        const result = await
    } catch (error) {
        
    }
}*/