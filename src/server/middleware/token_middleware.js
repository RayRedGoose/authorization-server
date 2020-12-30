"use strict";

const dotenv = require("dotenv");
dotenv.config();

const jwt = require("jsonwebtoken");
// // Token generation used for token validation
const privateKey = process.env.PRIVATE_KEY || "my-secret";

const authenticateToken = (req, res, next) => {
  // Gather the jwt access token from the request header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, privateKey, (err, user) => {
    const tokenID = String(user.id);
    const enteredID = String(req.params.id);

    if (err || tokenID !== enteredID) return res.sendStatus(403);

    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
