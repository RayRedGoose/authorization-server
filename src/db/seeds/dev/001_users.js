"use strict";

const { User } = require("../../../server/models");
const admin = require("../data/admin");

exports.seed = (knex) =>
  knex(User.tableName)
    .del()
    .then(() => Promise.resolve(User.create(admin)))
    .catch((err) => console.log("err: ", err));
