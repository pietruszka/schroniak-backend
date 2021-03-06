const mongoose = require("mongoose");


class UserModel {
    constructor(connection) {
        this.model = connection.model("User", this._userModel(), "UserSchroniak");
    }
    getModel() {
        return this.model;
    }

    _userModel() {
        return new mongoose.Schema({
            name: String,
            lastName: String,
            email: String,
            phoneNr: Number
        });
    }
}

module.exports = UserModel;