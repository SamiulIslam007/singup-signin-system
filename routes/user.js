const router = require("express").Router();
const { singnup } = require("../controllers/signup");
const { check } = require("express-validator");
const { signin } = require("../controllers/signin");
const { signout } = require("../controllers/signout");

router.post(
  "/signup",
  [
    check("name", "Name should be atleast 3 characters").isLength({ min: 3 }),
    check("email", "Email should be valid").isEmail(),
    check("password", "Password should be atleast 6 characters").isLength({
      min: 6,
    }),
  ],
  singnup
);

router.post("/signin", signin);

router.get("/signout", signout);

// Export the router
module.exports = router;
