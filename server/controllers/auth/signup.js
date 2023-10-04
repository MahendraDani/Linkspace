const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { statusCodes } = require("../../utils/statusCodes");
const { User } = require("../../models/User");
const { setTime } = require("../../utils/time");
const { date } = require("../../utils/date");
const { id } = require("../../utils/generateID");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "All credentials are required!" });
    }
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(statusCodes.CONFLICT)
        .json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await new User({
      userID: id,
      name,
      email,
      password: hashedPassword,
      createdOn: date,
      createdAt: setTime(),
    });
    await user.save();

    const token = await jwt.sign(
      {
        userID: user.userID,
        name: user.name,
        email: user.email,
        password: user.password,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    return res.status(statusCodes.SUCCESS).json({ user, accessToken: token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signup };
