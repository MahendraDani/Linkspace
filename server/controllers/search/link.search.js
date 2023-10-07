const { Link } = require("../../models/Link");
const { statusCodes } = require("../../utils/statusCodes");
const { searchLinks } = require("../../utils/search/searchLink.tag");

const searchLinksByTagName = async (req, res) => {
  try {
    const userID = req.params.id;
    if (!userID) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "User ID is required!" });
      return;
    }

    const { tagName } = req.body;
    if (!tagName) {
      res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "A tag is required to search the link" });
      return;
    }

    const links = await Link.find({ userID });
    const searchedLinks = searchLinks(links, tagName);

    if (searchedLinks.length === 0) {
      res
        .status(statusCodes.NOT_FOUND)
        .json({ message: " No links found associated with given tag" });
      return;
    }

    res.status(statusCodes.SUCCESS).json({ links: searchedLinks });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { searchLinksByTagName };
