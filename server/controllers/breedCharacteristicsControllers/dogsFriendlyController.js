const {DogsFriendly} = require("../../models/models");

class DogsFriendlyController {

    async create(req, res) {
        const {level, name} = req.body
        const dogsFriendly = await DogsFriendly.create({level, name})
        return res.json(dogsFriendly)
    }

    async getAll(req, res){
        const dogsFriendly = await DogsFriendly.findAll()
        return res.json(dogsFriendly)
    }

}

module.exports = new DogsFriendlyController()


