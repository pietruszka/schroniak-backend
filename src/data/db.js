const mongoose = require("mongoose");
const config = require("./config");
const logger = require("./logger");
const UserModel = require("./models/user");
const VetModel = require("./models/vet");
const ShelterModel = require("./models/shelter");
const PetModel = require("./models/pet");

class DB {
    constructor() {
        this.init();
    }
    getConnection() {
        return this.connection;
    }
    init() {
        this.connection = mongoose.createConnection(config.DB_URL, {
            auth: {
                password: config.DB_URL_AUTH.PASSWORD,
                user: config.DB_URL_AUTH.USER,
            },
        });

        this.connection.on("open", () => {
            logger.log("info", "Connected to DB");
        });
        this.connection.on("disconnected", () => {
            logger.log("info", "Disconnected from DB");
        });
        this.connection.on("error", () => {
            logger.log("error", "DB connection error");
        });
        mongoose.Promise = global.Promise;

        this.loadSchame();
    }
    loadSchame() {
        this.userModel = new UserModel(this.connection).getModel();
        this.vetModel = new UserModel(this.connection).getModel();
        this.shelterModel = new ShelterModel(this.connection).getModel();
        this.petModel = new PetModel(this.connection).getModel();
    }
}

module.exports = new DB();
