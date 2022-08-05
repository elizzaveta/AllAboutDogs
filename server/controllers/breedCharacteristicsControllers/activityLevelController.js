const {ActivityLevel} = require("../../models/models");

class activityLevelController {

    async create(req, res) {
        const {level, name} = req.body
        const activityLevel = await ActivityLevel.create({level, name})
        return res.json(activityLevel)
    }

    async getAll(req, res){
        const activityLevels = await ActivityLevel.findAll()
        return res.json(activityLevels)
    }

}

module.exports = new activityLevelController()


