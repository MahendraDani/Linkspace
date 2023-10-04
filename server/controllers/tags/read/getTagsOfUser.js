const { Tag } = require("../../../models/Tag");
const { statusCodes } = require("../../../utils/statusCodes");

const getTagsOfUser = async (req, res) => {
  try {
    const userID = req.params.id;
    if (!userID) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "UserID is required" });
    }

    const tags = await Tag.find({ userID });
    if (tags.length === 0) {
      return res
        .status(statusCodes.NOT_FOUND)
        .json({ message: "No tags found " });
    }

    res.status(statusCodes.SUCCESS).json({ tags });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTagsOfUser };
