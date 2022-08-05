const ApiError = require('../errors/ApiError')
const {Breed, Barking, Trainability, ActivityLevel, CoatLength, Shedding, KidsFriendly, DogsFriendly} = require("../models/models");
const url = require('url');
const pagination = require('./pagination/pagination')

class BreedController {

    // get all breeds for grid display
    async getAll(req, res) {
        let filterQuery = url.parse(req.url, true).query

        const {limit, offset} = pagination(req)

        delete filterQuery.limit
        delete filterQuery.page

        const breeds = await Breed.findAndCountAll({
            attributes: ['id', 'name', 'image'],
            where: filterQuery,
            limit,
            offset
        })
        return res.json(breeds)
    }

    // get detailed breed information via JOIN
    async getOne(req, res) {
        const {id} = req.params
        const breed = await Breed.findOne({
            attributes: [
                'name',
                'height_min',
                'height_max',
                'weight_min',
                'weight_max',
                'life_expectancy_min',
                'life_expectancy_max',
                'about',
                'nutrition',
                'health',
                'image'],
            where: {id},
            include: [
                {model: Barking, as: 'barking'},
                {model: Trainability, as: 'trainability'},
                {model: ActivityLevel, as: 'activityLevel'},
                {model: CoatLength, as: 'coatLength'},
                {model: Shedding, as: 'shedding'},
                {model: KidsFriendly, as: 'kidsFriendly'},
                {model: DogsFriendly, as: 'dogsFriendly'}
            ]
        });
        return res.json(breed)
    }

    // get breed information for comparing several breeds
    async getSeveralByIds(req, res) {
        // get array of breed ids
        let query = req.url.toString()
        let pairs = query.split('&')
        let ids = pairs.map(pair => parseInt(pair.substring(pair.indexOf('=') + 1)))

        const breeds = await Breed.findAll({
            attributes: [
                'name',
                'height_min',
                'height_max',
                'weight_min',
                'weight_max',
                'life_expectancy_min',
                'life_expectancy_max',
                'image'],
            where: {
                id: ids
            },
            include: [
                {model: Barking, as: 'barking'},
                {model: Trainability, as: 'trainability'},
                {model: ActivityLevel, as: 'activityLevel'},
                {model: CoatLength, as: 'coatLength'},
                {model: Shedding, as: 'shedding'},
                {model: KidsFriendly, as: 'kidsFriendly'},
                {model: DogsFriendly, as: 'dogsFriendly'}]
        })
        return res.json(breeds)
    }

    // add new breed
    async create(req, res) {
        const breed = await Breed.create({
            name: req.body.name,
            height_min: req.body.height_min,
            height_max: req.body.height_max,
            weight_min: req.body.weight_min,
            weight_max: req.body.weight_max,
            life_expectancy_min: req.body.life_expectancy_min,
            life_expectancy_max: req.body.life_expectancy_max,
            about: req.body.about,
            nutrition: req.body.nutrition,
            health: req.body.health,
            activityLevelId: req.body.activityLevelId,
            trainabilityId: req.body.trainabilityId,
            coatLengthId: req.body.coatLengthId,
            sheddingId: req.body.sheddingId,
            barkingId: req.body.barkingId,
            dogsFriendlyId: req.body.dogsFriendlyId,
            kidsFriendlyId: req.body.kidsFriendlyId,
            image: req.file.path
        })
        return res.json(breed);
    }

    async check(req, res, next) { // figure out where to use it
        const id = req.params.id
        if (isNaN(id)) {
            return next(ApiError.badRequest('Breed id is not valid!'))
        }
        res.json(id)
    }
}

module.exports = new BreedController()


