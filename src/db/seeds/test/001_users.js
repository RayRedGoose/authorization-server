"use strict";

const { User } = require("../../../server/models");
const usersData = require("../data/users");

exports.seed = (knex) =>
  knex(User.tableName)
    .del()
    .then(() => Promise.all(usersData.map((user) => User.create(user))))
    .catch((err) => console.log("err: ", err));
