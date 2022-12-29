const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signin = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "Email was not found",
      });
    }

    //   Authenticate
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email and Password does not match",
      });
    }

    // Create token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);

    // Put token in cookie
    res.cookie("token", token, { expire: new Date() + 1 });

    // Send response
    const { _id, email, name } = user;

    return res.json({
      token,
      message: "Log in successfully",
      user: {
        _id,
        email,
        name,
      },
    });
  });
};

module.exports = {
  signin,
};
