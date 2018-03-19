const mongoose = require("mongoose");


class VetModel {
    constructor(connection) {
        this.model = connection.model("Vet", this._vetModel(), "VetSchroniak");
    }
    getModel() {
        return this.model;
    }

    _vetModel() {
        return new mongoose.Schema({
            name: String,
            lastName: String,
            email: String,
            phoneNr: Number,
            city: String,
            licenceNr: Number
        });
    }
}

module.exports = VetModel;