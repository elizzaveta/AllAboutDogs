const express = require('express');
const router = express.Router();
const kidsFriendlyController = require('../../controllers/breedCharacteristicsControllers/kidsFriendlyController')
const roleControlMiddleware = require('../../middleware/roleControlMiddleware')
const enums = require('../../enums/enums')


router.post('/',roleControlMiddleware([enums.Roles.ADMIN]), kidsFriendlyController.create)
router.get('/', kidsFriendlyController.getAll)


module.exports = router;
