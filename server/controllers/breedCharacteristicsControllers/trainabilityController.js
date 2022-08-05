const {Trainability} = require("../../models/models");

class TrainabilityController {

    async create(req, res) {
        const {level, name} = req.body
        const trainability = await Trainability.create({level, name})
        return res.json(trainability)
    }

    async getAll(req, res){
        const trainabilities = await Trainability.findAll()
        return res.json(trainabilities)
    }
}

module.exports = new TrainabilityController()


