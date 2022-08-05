const express = require('express');
const router = express.Router();
const trainabilityController = require('../../controllers/breedCharacteristicsControllers/trainabilityController')
const roleControlMiddleware = require('../../middleware/roleControlMiddleware')
const enums = require('../../enums/enums')

router.post('/', roleControlMiddleware([enums.Roles.ADMIN]),  trainabilityController.create)
router.get('/', trainabilityController.getAll)


module.exports = router;
