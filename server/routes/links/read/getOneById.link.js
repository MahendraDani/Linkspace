const express = require("express");
const router = express.Router();

const {
  getOneLinkByID,
} = require("../../../controllers/links/read/getOneById.link");

router.get("/links/:id", getOneLinkByID);

module.exports = router;
