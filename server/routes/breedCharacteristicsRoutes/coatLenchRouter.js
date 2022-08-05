const express = require('express');
const router = express.Router();
const coatLengthController = require('../../controllers/breedCharacteristicsControllers/coatLengthController')
const roleControlMiddleware = require('../../middleware/roleControlMiddleware')
const enums = require('../../enums/enums')


router.post('/', roleControlMiddleware([enums.Roles.ADMIN]), coatLengthController.create)
router.get('/', coatLengthController.getAll)


module.exports = router;
