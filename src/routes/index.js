const Router = require("express").Router;
const RegisterRouter = require('./RegisterRouter');

class Routes {
    constructor() {
        this.router = Router();
        this.router.use(new RegisterRouter().getRouter());
    }

    getRouter() {
        return this.router;
    }
}

module.exports = Routes;