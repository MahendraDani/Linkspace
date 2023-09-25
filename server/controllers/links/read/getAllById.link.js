const { Link } = require("../../../models/Link");
const { User } = require("../../../models/User");
const { statusCodes } = require("../../../utils/statusCodes");

const getAllLinksById = async (req, res) => {
  try {
    const userID = req.params.id;
    if (!userID) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "User ID is required" });
      return;
    }

    const isUser = await User.findOne({ userID });
    if (!isUser) {
      res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect userID" });
      return;
    }

    const links = await Link.find({ userID });
    res.json(links);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllLinksById };
