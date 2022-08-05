const express = require('express');
const router = express.Router();
const barkingController = require('../../controllers/breedCharacteristicsControllers/barkingController')
const roleControlMiddleware = require('../../middleware/roleControlMiddleware')
const enums = require('../../enums/enums')


router.post('/',roleControlMiddleware([enums.Roles.ADMIN]), barkingController.create)
router.get('/', barkingController.getAll)


module.exports = router;
