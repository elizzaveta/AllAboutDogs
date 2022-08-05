const express = require('express');
const router = express.Router();
const dogsFriendlyController = require('../../controllers/breedCharacteristicsControllers/dogsFriendlyController')
const roleControlMiddleware = require('../../middleware/roleControlMiddleware')
const enums = require('../../enums/enums')


router.post('/',roleControlMiddleware([enums.Roles.ADMIN]), dogsFriendlyController.create)
router.get('/', dogsFriendlyController.getAll)


module.exports = router;
