const express = require("express");
const router = express.Router();

const {
  updateTagById,
} = require("../../../controllers/tags/update/updateTagById");

router.put("/tags/update/:id", updateTagById);

module.exports = router;
