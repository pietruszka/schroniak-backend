const Router = require("express").Router;
const User = (require("./../../data/db").getConnection()).model("User");
const {
    getPet ,
    addPet,
    changePet,
    deletePet
} = require('./controller');

class RegisterRoute {
    constructor() {
        this.router = Router();
        this.router.get('/api/pet/:id', getPet);
        this.router.get('/api/pet', getPet);
        this.router.post('/api/pet', addPet);
        this.router.put('/api/pet/:id', changePet);
        this.router.delete('/api/pet/:id', deletePet);
    }

    getRouter() {
        return this.router;
    }
}

module.exports = RegisterRoute;