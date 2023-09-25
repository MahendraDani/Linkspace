const { statusCodes } = require("../../utils/statusCodes");
const { User } = require("../../models/User");
const bcrypt = require("bcryptjs");

const changePassword = async (req, res) => {
  try {
    const userID = req.params.id;
    if (!userID) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "User ID is required" });
      return;
    }

    const user = await User.findOne({ userID });
    if (!user) {
      res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect user ID" });
      return;
    }
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Both passwords are required" });
      return;
    }

    const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordMatch) {
      res
        .status(statusCodes.UNAUTHORIZED)
        .json({ message: "Password didn't match" });
      return;
    }
    const newPasswordHashed = await bcrypt.hash(newPassword, 10);
    const updatedDocument = await User.findOneAndUpdate(
      { userID },
      { $set: { password: newPasswordHashed } },
      { new: true }
    );
    res
      .status(statusCodes.SUCCESS)
      .json({ message: "Password changed successfully", updatedDocument });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { changePassword };
