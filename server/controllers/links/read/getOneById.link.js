const { statusCodes } = require("../../../utils/statusCodes");
const { Link } = require("../../../models/Link");
const getOneLinkByID = async (req, res) => {
  try {
    const linkID = req.params.id;
    if (!linkID) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "Link Id is !required" });
      return;
    }

    const link = await Link.findOne({ linkID });
    if (!link) {
      res
        .status(statusCodes.NOT_FOUND)
        .json({ message: "Invalid or incorrect link Id" });
      return;
    }
    res.status(statusCodes.SUCCESS).json(link);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getOneLinkByID };
