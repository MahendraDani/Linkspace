const { statusCodes } = require("../../utils/statusCodes");
const { User } = require("../../models/User");

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "Email and password are required!" });
    } else {
      const newUser = await new User({
        email,
        password,
      });
      await newUser.save();
      res
        .status(statusCodes.SUCCESS)
        .json({ message: "user created successfully", newUser });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signup };
