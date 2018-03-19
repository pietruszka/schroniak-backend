const bodyParser = require("body-parser");
const cors = require("cors");
const express = require('express');
const ExpressVaidator = require('express-validator');
const Router = express.Router;
const logger = require("./data/logger");
const db = require("./data/db");

class Middleware {
    constructor() {
        this.router = Router();
        this.router.use(bodyParser.json({
            limit: "100kb",
            type: "application/json",
        }));
        this.router.use(cors());
        this.router.use(express.static('public'));
        this.router.use(ExpressVaidator());
        logger;
        db;
    }

    getRouter() {
        return this.router;
    }
}


module.exports = Middleware;