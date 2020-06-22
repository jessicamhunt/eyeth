const express = require("express");
const gravatar = require("gravatar");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// Bring in user model
const Users = require("../../models/Users");

// @route   POST api/users
// @desc    Test route
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // Check if user exists
      let user = await user.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ msg: "User Already Exists" }] });
      }

      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      user = new User({
        name,
        email,
        avatar,
        password,
      });

      // Ecrypt password

      // Return jsonwebtoken

      res.send("Users route");
    } catch {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
