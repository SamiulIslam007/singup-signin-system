const signout = (req, res) => {
  res.clearCookie("token");
  return res.json({
    message: "User signout successfully",
  });
};

module.exports = { signout };
