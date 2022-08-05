const {Shedding} = require("../../models/models");

class SheddingController {

    async create(req, res) {
        const {level, name} = req.body
        const shedding = await Shedding.create({level, name})
        return res.json(shedding)
    }

    async getAll(req, res){
        const sheddings = await Shedding.findAll()
        return res.json(sheddings)
    }
}

module.exports = new SheddingController()


