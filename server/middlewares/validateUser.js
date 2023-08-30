const { statusCodes } = require("../utils/statusCodes");
const jwt = require("jsonwebtoken");

const validateUser = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(statusCodes.FORBIDDEN)
      .json({ message: "Access token not found" });
  }

  const isMatch = jwt.verify(token, process.env.JWT_SECRET);
  if (!isMatch) {
    return res
      .status(statusCodes.UNAUTHORIZED)
      .json({ message: "Invalid or incorrect access token" });
  } else {
    next();
  }
};

module.exports = { validateUser };
