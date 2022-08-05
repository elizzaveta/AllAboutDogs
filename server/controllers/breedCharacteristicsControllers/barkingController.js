const {Barking} = require("../../models/models");

class CoatLengthController {

    async create(req, res) {
        const {level, name} = req.body
        const barking = await Barking.create({level, name})
        return res.json(barking)
    }

    async getAll(req, res){
        const barkings = await Barking.findAll()
        return res.json(barkings)
    }
}

module.exports = new CoatLengthController()


