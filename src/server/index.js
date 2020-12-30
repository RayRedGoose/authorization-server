"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const jwtMiddleware = require("./middleware/token_middleware");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.disable("x-powered-by");

app.all("/users/:id", jwtMiddleware);
app.use("/", routes);

module.exports = app;
