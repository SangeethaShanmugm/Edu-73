const express = require("express");
const bodyParser = require("body-parser");
const User = require("../model/userModel");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
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

//login User

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.send({ auth: false, token: "Error while logging" });
    if (!user) return res.send({ auth: false, token: "Invalid Credentials" });
    else {
      const passIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passIsValid)
        return res.send({ auth: false, token: "Invalid Credentials" });
      let token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400,
      }); //24hours - in sec
      res.send({ auth: true, token: token });
    }
  });
});

//userInfo
router.get("/userInfo", (req, res) => {
  let token = req.headers["x-access-token"];
  if (!token) res.send({ auth: false, token: "No Token Provided" });
  //jwqt verify
  jwt.verify(token, config.secret, (err, user) => {
    if (err) res.send({ auth: false, token: "Invalid Token" });
    User.findById(user.id, (err, result) => {
      res.send(result);
    });
  });
});

module.exports = router;
