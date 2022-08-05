const {CoatLength} = require("../../models/models");

class CoatLengthController {

    async create(req, res) {
        const {level, name} = req.body
        const coatLength = await CoatLength.create({level, name})
        return res.json(coatLength)
    }

    async getAll(req, res){
        const coatLengths = await CoatLength.findAll()
        return res.json(coatLengths)
    }

}

module.exports = new CoatLengthController()


