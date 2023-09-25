const { Tag } = require("../../../models/Tag");
const { statusCodes } = require("../../../utils/statusCodes");

const deleteTagById = async (req, res) => {
  try {
    const tagID = req.params.id;
    if (!tagID) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "Tag ID is required" });
      return;
    }

    const isTag = await Tag.findOne({ tagID });
    if (!isTag) {
      res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect tag ID" });
      return;
    }

    await Tag.findOneAndRemove({ tagID });
    res
      .status(statusCodes.SUCCESS)
      .json({ message: "Tag deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteTagById };
