const express = require("express");
const bodyParser = require("body-parser");
const User = require("../model/userModel");
const router = express.Router();
const bcrypt = require("bcryptjs");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//Get All USers

router.get("/users", (req, res) => {
  User.find({}, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

//Register User
router.post("/register", (req, res) => {
  //encrypt password
  let hashPassword = bcrypt.hashSync(req.body.password, 8);
  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
      phone: req.body.phone,
      role: req.body.role ? req.body.role : "User",
    },
    (err, data) => {
      if (err) return res.send("Error while registering user: " + err.message);
      res.send("Registration Successfull!");
    }
  );
});

module.exports = router;
