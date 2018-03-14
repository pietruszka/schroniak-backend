const express = require("express");
const config = require("./data/config");
const Middleware = require("./middleware");
const Routes = require("./routes");
const logger = require("./data/logger");

class Application {
    constructor() {
        this.app = express();
        this.app.use(new Middleware().getRouter());
        this.app.use(new Routes().getRouter());
        this.server = this.app.listen(config.PORT, () => {
            logger.log("info", `Server started on port ${config.PORT}`);
    });
    }
    getServerInstance() {
        return this.server;
    }
}

module.exports = Application;
