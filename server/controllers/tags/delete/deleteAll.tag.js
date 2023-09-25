const { User } = require("../../../models/User");
const { Tag } = require("../../../models/Tag");
const { statusCodes } = require("../../../utils/statusCodes");

const deleteAllTagsById = async (req, res) => {
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

    const tags = await Tag.find({ userID });
    for (let i = 0; i < tags.length; i++) {
      await Tag.findOneAndRemove({ userID });
    }

    res
      .status(statusCodes.SUCCESS)
      .json({ message: "All tags deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteAllTagsById };
