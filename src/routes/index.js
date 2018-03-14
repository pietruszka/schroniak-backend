const Router = require("express").Router;
const UserRouter = require('./user');

class Routes {
    constructor() {
        this.router = Router();
        this.router.use(new UserRouter().getRouter());
    }

    getRouter() {
        return this.router;
    }
}

module.exports = Routes;