const { Tag } = require("../../../models/Tag");
const { User } = require("../../../models/User");
const { statusCodes } = require("../../../utils/statusCodes");
const { id } = require("../../../utils/generateID");
const { date } = require("../../../utils/date");
const { setTime } = require("../../../utils/time");

const createTag = async (req, res) => {
  try {
    const userID = req.params.id;
    if (!userID) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "User ID is required!" });
      return;
    }

    const user = await User.findOne({ userID });
    if (!user) {
      res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect user iD" });
      return;
    }
    const { purpose, name } = req.body;
    if (!purpose || !name) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "All fields are required" });
      return;
    }
    const tag = new Tag({
      tagID: id,
      userID: user.userID,
      purpose: purpose,
      tagName: name.toLowerCase(),
      createdBy: user.name,
      createdOn: date,
      createdAt: setTime(),
    });

    await tag.save();
    res
      .status(statusCodes.SUCCESS)
      .json({ message: "Tag created successfully", tag: tag });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createTag };
