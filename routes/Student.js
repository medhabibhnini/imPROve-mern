const router = require("express").Router();
const Student = require("../Model/Student");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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

        const token = jwt.sign(
            {
              user: savedStudent._id,
            },
            process.env.JWT_SECRET="KbtacQQ6xs4qnjpGTVA9N6368FTR42j3GjXWMF5Z4as7eAPBwp"
          );
         res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
          }).status();  }
    catch(err)
    {
        console.error(err);
        res.status(500).send();

    }

        
});



router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // validate
  
      if (!email || !password)
        return res
          .status(400)
          .json({ errorMessage: "Please enter all required fields." });
  
      const existingUser = await Student.findOne({ email });
      if (!existingUser)
        return res.status(401).json({ errorMessage: "Wrong email or password." });
  
      const passwordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!passwordCorrect)
        return res.status(401).json({ errorMessage: "Wrong email or password." });
  
      // sign the token
  console.log(existingUser);
      const token = jwt.sign(
        {
          user: existingUser._id,
        },
        process.env.JWT_SECRET
      );
  
      // send the token in a HTTP-only cookie
  
      res
        .cookie("token", token, {
          httpOnly: true,
        })
        .send();
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });
 
  router.route("/tables").get((req, res) => {
    Student.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


module.exports = router;