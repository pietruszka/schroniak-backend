const Pet = (require("./../../data/db").getConnection()).model("Pet");


const getPet = async (req, res) => {
    try {
        let foundPets;
        let id = req.params.id;
        let skip = req.query.skip;
        let limit = req.query.limit;
        if(id) {
            foundPets = await Pet.findById(id);
            res
                .status(200)
                .json({
                    success: true,
                    result: foundPets
                });
        } else {
            if(skip & limit) foundPets = await Pet.find(id).skip(Number(skip)).limit(Number(limit));
            else if(limit) foundPets = await Pet.find(id).limit(Number(limit));
            else if(skip) foundPets = await Pet.find(id).skip(Number(skip));
            else foundPets = await Pet.find(id);

            res
                .status(200)
                .json({
                    success: true,
                    result: foundPets
                });
        }
    } catch (err) {
        res.status(403)
            .json({
                success: false,
                message: 'Endpoint err ' + err.toString(),
            });
    }

};

const addPet = async (req, res) => {
    try {
        req.checkBody('name', 'Invalid name field').notEmpty();

        var errors = req.validationErrors();
        if (errors) {
            res.send(errors);
            return;
        } else {
            let name = req.body.name;

            let result = await new Pet({
                name,
            }).save();

            if(result) res
                .status(200)
                .json({
                    success: true,
                    result,
                });
            else res
                .status(403)
                .json({
                    success: false,
                    message: 'Adding pet error',
                });
        }
    } catch (err) {
        res.status(403)
            .json({
                success: false,
                message: 'Endpoint err ' + err.toString(),
            });
    }
};

const changePet = async (req, res) => {
    try {
        req.checkBody('name', 'Invalid name field').optional();
        req.checkParams('id', 'Invalid name field').notEmpty();
        req.checkParams('id', 'Expect mongo object id field').isMongoId();

        var errors = req.validationErrors();
        if (errors) {
            res.send(errors);
            return;
        } else {
            let id = req.params.id;
            let changeObject = {};
            if(req.body.name) changeObject.name = req.body.name;

            let result = await Pet.findByIdAndUpdate(id, changeObject);
            if(result) res
                .status(200)
                .json({
                    success: true,
                    result,
                });
            else res
                .status(403)
                .json({
                    success: false,
                    message: 'Changing pet error',
                });
        }
    } catch (err) {
        res.status(403)
            .json({
                success: false,
                message: 'Endpoint err ' + err.toString(),
            });
    }
};

const deletePet = async (req, res) => {
    try {
        req.checkParams('id', 'Invalid name field').notEmpty();
        req.checkParams('id', 'Expect mongo object id field').isMongoId();

        var errors = req.validationErrors();
        if (errors) {
            res.send(errors);
            return;
        } else {
            let id = req.params.id;
            if(id) {
                let result = await Pet.findByIdAndRemove(id);
                if(result) res
                    .status(200)
                    .json({
                        success: true,
                    });
                else res
                    .status(403)
                    .json({
                        success: false,
                        message: 'Pet doesnt exist',
                    });
            } else res
                .status(403)
                .json({
                    success: false,
                    message: 'Missing id',
                });
        }
    } catch (err) {
        res
            .status(403)
            .json({
                success: false,
                message: 'Endpoint err ' + err.toString(),
            });
    }
};

module.exports = {
    getPet,
    addPet,
    changePet,
    deletePet,
};
