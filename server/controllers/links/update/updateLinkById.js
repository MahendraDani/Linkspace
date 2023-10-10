const { Link } = require("../../../models/Link");
const { statusCodes } = require("../../../utils/statusCodes");

const updateLinkById = async (req, res) => {
  try {
    const linkID = req.params.id;
    if (!linkID) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "Link ID is required to update a link" });
    }

    const link = await Link.findOne({ linkID });
    if (!link) {
      return res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect link ID" });
    }
    const { title, url, tags } = req.body;
    const updatedFields = {};
    if (title) {
      updatedFields.title = title;
    }

    if (url) {
      updatedFields.link = url;
    }

    if (tags) {
      updatedFields.tags = tags;
    }

    const updatedLink = await Link.findOneAndUpdate(
      { linkID },
      { $set: updatedFields },
      { new: true }
    );

    return res.status(statusCodes.SUCCESS).json(updatedLink);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updateLinkById };
