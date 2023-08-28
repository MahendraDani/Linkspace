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
      const user = await new User({
        email,
        password,
      });
      await user.save();
      res.status(statusCodes.SUCCESS).json({ user });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signup };
