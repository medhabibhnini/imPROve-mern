const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load student model
const Student = require("../../Model/Student.js");

// @route POST api/students/register
// @desc Register student
// @access Public
router.post("/register", (req, res) => {
  // Form validation

//  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
 /* if (!isValid) {
    return res.status(400).json(errors);
  }*/

  Student.findOne({ email: req.body.email }).then(student => {
    if (student) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newStudent = new Student({
        email: req.body.email,
        password: req.body.password,
        username:req.body.username,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        sexe:req.body.sexe,
        birthdate:req.body.birthdate,
        cin :req.body.cin,
        image : req.body.image,
        level :req.body.level,
        university:req.body.university,
        domain : req.body.domain,
        skills :req.body.skills
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newStudent.password, salt, (err, hash) => {
          if (err) throw err;
          newStudent.password = hash;
          console.log(newStudent);
          newStudent
            .save().then(response => { 
              window.open("/auth/login");
              }).catch(errors => {
                    console.log(errors);
              })
            .then(student => res.json(student,'student added !'))
            .catch(err => res.status(400).json('Error' + err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  Student.findOne({ email }).then(student => {
    // Check if user exists
    if (!student) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, student.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: student.id,
          name: student.name
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
