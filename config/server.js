const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const path = require("path");

const app = express();

/************** configurações *********/
//views
app.set("view engine", "ejs");
app.set("views", "app/views");

//middleware

app.use(express.static("app/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

//autoload
consign()
  .include("app/routes")
  .then("app/models")
  .then("app/controllers")
  .into(app);

module.exports = app;
