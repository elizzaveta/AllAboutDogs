const express = require('express');
const router = express.Router();
const sheddingController = require('../../controllers/breedCharacteristicsControllers/sheddingController')
const roleControlMiddleware = require('../../middleware/roleControlMiddleware')
const enums = require('../../enums/enums')


router.post('/',roleControlMiddleware([enums.Roles.ADMIN]), sheddingController.create)
router.get('/', sheddingController.getAll)


module.exports = router;
