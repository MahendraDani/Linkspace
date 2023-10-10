const express = require("express");
const router = express.Router();

const {
  updateLinkById,
} = require("../../../controllers/links/update/updateLinkById");
router.put("/links/update/:id", updateLinkById);

module.exports = router;
