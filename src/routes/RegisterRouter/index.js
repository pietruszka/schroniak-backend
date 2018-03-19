const Router = require("express").Router;
const User = (require("./../../data/db").getConnection()).model("User");

class RegisterRoute {
    constructor() {
        this.router = Router();
    }

    getRouter() {
        return this.router;
    }
}

module.exports = RegisterRoute;