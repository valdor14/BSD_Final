const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.nrs;
    if (!token) {
      return res.status(401).json({ errorMessage: "Unauthorized" });
    }
    const validatedUser = jwt.verify(token, process.env.JWT_SECRET);
    req.user = validatedUser.id;

    const myUser = await User.findById(req.user);
    if (myUser.validation === false) {
      res.status(401).send({ errorMessage: "Unauthorized" });
    }

    next();
  } catch (err) {
    return res.status(401).json({ errorMessage: "Unauthorized" });
  }
}


module.exports = auth;
