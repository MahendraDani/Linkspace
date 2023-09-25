const { Link } = require("../../../models/Link");
const { statusCodes } = require("../../../utils/statusCodes");

const deleteAllById = async (req, res) => {
  try {
    const userID = req.params.id;
    if (!userID) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "User ID is required" });
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

    res
      .status(statusCodes.SUCCESS)
      .json({ message: "All links deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteAllById };
