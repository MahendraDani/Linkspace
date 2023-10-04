const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { statusCodes } = require("../../utils/statusCodes");
const { User } = require("../../models/User");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "All credentials are required" });
    }

    await User.findOne({ email }).then((user) => {
      if (!user) {
        return res
          .status(statusCodes.UNAUTHORIZED)
          .json({ message: "User does not exists!" });
      }
      bcrypt.compare(password, user.password).then((isPasswordMatch) => {
        if (!isPasswordMatch) {
          return res
            .status(statusCodes.FORBIDDEN)
            .json({ message: "Invalid or incorrect password" });
        }
        const token = jwt.sign(
          {
            userID: user.userID,
            name: user.name,
            email: user.email,
            password: user.password,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "3d",
          }
        );
        return res.status(statusCodes.SUCCESS).json({
          message: "User logged in successfully",
          user,
          accessToken: token,
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { login };
