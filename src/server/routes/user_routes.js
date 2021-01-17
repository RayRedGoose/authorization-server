"use strict";

const router = require("express").Router();
const {
  getUser,
  putUser,
  deleteUser,
} = require("../controllers/user_controller");

router.route("/users").get(getUser);
router.route("/users/:id").put(putUser).delete(deleteUser);

module.exports = router;
