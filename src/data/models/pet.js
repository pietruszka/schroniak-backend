const mongoose = require("mongoose");


class PetModel {
    constructor(connection) {
        this.model = connection.model("Pet", this._petModel(), "PetSchroniak");
    }
    getModel() {
        return this.model;
    }

    _petModel() {
        return new mongoose.Schema({
            name: String,
        });
    }
}

module.exports = PetModel;