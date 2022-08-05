const {KidsFriendly} = require("../../models/models");

class KidsFriendlyController {

    async create(req, res) {
        const {level, name} = req.body
        const kidsFriendly = await KidsFriendly.create({level, name})
        return res.json(kidsFriendly)
    }

    async getAll(req, res){
        const kidsFriendly = await KidsFriendly.findAll()
        return res.json(kidsFriendly)
    }
}

module.exports = new KidsFriendlyController()


