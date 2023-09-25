const { Link } = require("../../../models/Link");
const { statusCodes } = require("../../../utils/statusCodes");

const deleteLinkById = async (req, res) => {
  try {
    const linkID = req.params.id;
    if (!linkID) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "Invalid or incorrect link ID" });
      return;
    }
    const link = await Link.findOne({ linkID });
    if (!link) {
      res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect link ID" });
      return;
    }
    await Link.findOneAndRemove({ linkID });
    res
      .status(statusCodes.SUCCESS)
      .json({ message: "Link deleted successfully!" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteLinkById };
