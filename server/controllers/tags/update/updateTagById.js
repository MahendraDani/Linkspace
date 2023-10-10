const { Tag } = require("../../../models/Tag");
const { statusCodes } = require("../../../utils/statusCodes");

const updateTagById = async (req, res) => {
  try {
    const tagID = req.params.id;
    if (!tagID) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "Tag ID is required to update a link" });
    }

    const tag = await Tag.findOne({ tagID });
    if (!tag) {
      return res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect tag ID" });
    }

    const { tagName, purpose } = req.body;
    const updatedFields = {};
    if (tagName) {
      updatedFields.tagName = tagName;
    }
    if (purpose) {
      updatedFields.purpose = purpose;
    }

    const updatedTag = await Tag.findOneAndUpdate(
      { tagID },
      { $set: updatedFields },
      { new: true }
    );
    return res.status(statusCodes.SUCCESS).json(updatedTag);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updateTagById };
