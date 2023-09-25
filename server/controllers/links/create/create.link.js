const { User } = require("../../../models/User");
const { Link } = require("../../../models/Link");
const { v4: uuid } = require("uuid");

const { statusCodes } = require("../../../utils/statusCodes");
const { date } = require("../../../utils/date");
const { setTime } = require("../../../utils/time");

const createLink = async (req, res) => {
  try {
    const userID = req.headers.id;
    if (!userID) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "UserID is required!" });
      return;
    }

    const { link, title, tags } = req.body;
    if (!link || !title || !tags) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "All fields are required" });
      return;
    }

    const user = await User.findOne({ userID });
    if (!user) {
      res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect user ID" });
    }

    const newLink = new Link({
      linkID: uuid(),
      userID: user.userID,
      title: title,
      link: link,
      tags: tags,
      createdBy: user.name,
      createdAt: setTime(),
      createdOn: date,
    });
    await newLink.save();
    res.status(statusCodes.SUCCESS).json(newLink);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createLink };
