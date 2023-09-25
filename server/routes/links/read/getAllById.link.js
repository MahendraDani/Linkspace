const express = require("express");
const router = express.Router();
const {
  getAllLinksById,
} = require("../../../controllers/links/read/getAllById.link");

router.get("/links/all/:id", getAllLinksById);

module.exports = router;
