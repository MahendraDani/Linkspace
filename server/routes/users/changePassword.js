const express = require("express");
const router = express.Router();
const { changePassword } = require("../../controllers/users/changePassword");

router.patch("/update/password/:id", changePassword);

module.exports = router;
