const jwt = require("jsonwebtoken");
const config = require("./../config");
const User = (require("./../db").getConnection()).model("User");
const R = require('ramda');

class Tools {
    translateToken(token) {
        return new Promise((resolve, reject) => {
            let id = jwt.verify(token, config.JWT_SECRET).id;
            User.findById(id, (result, err) => {
                //TODO: strange error with if
                if(!result) resolve(id);
                else resolve(null);
            });
        })
    }
}

module.exports = new Tools();
