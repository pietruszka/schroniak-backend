const Router = require("express").Router;
const RegisterRouter = require('./RegisterRouter');
const PetRouter = require('./PetRouter');

class Routes {
    constructor() {
        this.router = Router();
        this.router.use(new RegisterRouter().getRouter());
        this.router.use(new PetRouter().getRouter());
    }

    getRouter() {
        return this.router;
    }
}

module.exports = Routes;