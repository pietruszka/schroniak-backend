const mongoose = require("mongoose");


class ShelterModel {
    constructor(connection) {
        this.model = connection.model("Shelter", this._shelterModel(), "ShelterSchroniak");
    }
    getModel() {
        return this.model;
    }

    _shelterModel() {
        return new mongoose.Schema({
            name: String,
            street: String,
            houseNr: Number,
            postalCode: Number,
            city: String,
            email: String,
            phoneNr: Number,
        });
    }
}

module.exports = ShelterModel;