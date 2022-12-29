const User = require("../models/User");
const { validationResult } = require("express-validator");

const singnup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array()[0].msg,
    });
  }

  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(200).json({
        message: "User created successfully",
        user,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: "Unable to add user",
      });
    });
};

module.exports = {
  singnup,
};
