const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");
const R = require('ramda');
const config = require("./../../config");
const User = (require("./../../db").getConnection()).model("User");
const Tools = require("./../other");

class UserManager {

}

module.exports = new UserManager();
