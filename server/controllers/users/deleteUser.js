const { User } = require("../../models/User");
const { Link } = require("../../models/Link");
const { statusCodes } = require("../../utils/statusCodes");

const deleteUserById = async (req, res) => {
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
    const links = await Link.find({ userID });
    if (!links) {
      res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "invalid or incorrect user ID" });
      return;
    }

    for (let i = 0; i < links.length; i++) {
      await Link.findOneAndRemove({ userID });
    }
    await User.findOneAndRemove({ userID });
    res
      .status(statusCodes.SUCCESS)
      .json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteUserById };
