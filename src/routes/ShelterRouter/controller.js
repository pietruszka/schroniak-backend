const Shelter = (require("./../../data/db").getConnection()).model("Shelter");

const getShelter = async (req, res) => {
    try {
        let foundShelters;
        let id = req.params.id;
        let skip = req.query.skip;
        let limit = req.query.limit;
        if(id) {
            foundShelters = await Shelter.findById(id);
            res
                .status(200)
                .json({
                    success: true,
                    result: foundShelters
                });
        } else {
            if(skip & limit) foundShelters = await Shelter.find(id).skip(Number(skip)).limit(Number(limit));
            else if(limit) foundShelters = await Shelter.find(id).limit(Number(limit));
            else if(skip) foundShelters = await Shelter.find(id).skip(Number(skip));
            else foundShelters = await Shelter.find(id);

            res
                .status(200)
                .json({
                    success: true,
                    result: foundShelters
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

const changeShelter = async (req, res) => {
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

            let result = await Shelter.findByIdAndUpdate(id, changeObject);
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

const deleteShelter = async (req, res) => {
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
                let result = await Shelter.findByIdAndRemove(id);
                if(result) res
                    .status(200)
                    .json({
                        success: true,
                    });
                else res
                    .status(403)
                    .json({
                        success: false,
                        message: 'Shelter doesnt exist',
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
    getShelter ,
    changeShelter,
    deleteShelter
};
