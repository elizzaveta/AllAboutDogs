const express = require('express');
const router = express.Router();
const activityLevelController = require('../../controllers/breedCharacteristicsControllers/activityLevelController')
const roleControlMiddleware = require('../../middleware/roleControlMiddleware')
const enums = require('../../enums/enums')


router.post('/',roleControlMiddleware([enums.Roles.ADMIN]), activityLevelController.create)
router.get('/', activityLevelController.getAll)


module.exports = router;
