const bcrypt = require("bcryptjs");

const { statusCodes } = require("../../utils/statusCodes");
const { User } = require("../../models/User");
const { time } = require("../../utils/time");
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
      createdAt: time,
    });
    await user.save();
    return res.status(statusCodes.SUCCESS).json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signup };
