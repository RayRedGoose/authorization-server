const dotenv = require("dotenv");
dotenv.config();

const admin = {
  email: "admin@mail.com",
  username: "admin",
  password: process.env.ADMIN_PSW,
};

module.exports = admin;
