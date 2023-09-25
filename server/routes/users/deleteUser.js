const express = require("express");
const router = express.Router();

const { deleteUserById } = require("../../controllers/users/deleteUser");

router.delete("/delete/:id", deleteUserById);

module.exports = router;
