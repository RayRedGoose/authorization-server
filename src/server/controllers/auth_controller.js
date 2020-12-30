"use strict";

const dotenv = require("dotenv");
dotenv.config();

const jwt = require("jsonwebtoken");
// // Token generation used for token validation
const privateKey = process.env.PRIVATE_KEY || "my-secret";

const { User } = require("../models");
const {
  createError,
  BAD_REQUEST,
  UNAUTHORIZED,
  CONFLICT,
} = require("../helpers/error_helper");

const postLogin = (req, res, next) => {
  const username = String(req.body.username);
  const password = String(req.body.password);

  if (!username || !password)
    next(
      createError({
        status: BAD_REQUEST,
        message: "`username` + `password` are required fields",
      })
    );

  User.verify(username, password)
    .then((user) => {
      const token = jwt.sign(user, privateKey);
      return res.json({
        ok: true,
        message: "Login successful",
        user,
        token,
      });
    })
    .catch((err) =>
      next(
        createError({
          status: UNAUTHORIZED,
          message: err,
        })
      )
    );
};

const postRegister = (req, res, next) => {
  const props = req.body.user;

  User.findOne({ email: props.email })
    .then((user) => {
      if (user)
        return next(
          createError({
            status: CONFLICT,
            message: "Email already exists",
          })
        );

      return User.create(props);
    })
    .then((rows) => {
      const user = rows[0];
      const token = jwt.sign(user, privateKey);
      return res.json({
        ok: true,
        message: "Registration successful",
        user,
        token,
      });
    })
    .catch(next);
};

module.exports = {
  postLogin,
  postRegister,
};
