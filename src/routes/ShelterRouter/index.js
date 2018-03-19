const Router = require("express").Router;
const User = (require("./../../data/db").getConnection()).model("User");
const {
    getShelter ,
    changeShelter,
    deleteShelter
} = require('./controller');

class ShelterRoute {
    constructor() {
        this.router = Router();
        this.router.get('/api/shelter/:id', getShelter);
        this.router.get('/api/shelter', getShelter);
        this.router.put('/api/shelter/:id', changeShelter);
        this.router.delete('/api/shelter/:id', deleteShelter);
    }

    getRouter() {
        return this.router;
    }
}

module.exports = ShelterRoute;