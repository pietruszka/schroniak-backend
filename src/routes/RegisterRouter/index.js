const Router = require("express").Router;
const User = (require("./../../data/db").getConnection()).model("User");
const Shelter = (require('./../../data/db').getConnection()).model('Shelter');
const Vet = (require('./../../data/db').getConnection()).model('Vet');

class RegisterRoute {
    constructor() {
        this.router = Router();
        this.router.get('/register', getRegister);

        this.router.get('/user', getUser);
        this.router.post('/user', addUser);

        this.router.get('/shelter', getShelter);
        this.router.post('/shelter', addShelter);

        this.router.get('/vet', getVet);
        this.router.post('/vet', addVet);
    }

    getRouter() {
        return this.router;
    }
}

module.exports = RegisterRoute;
