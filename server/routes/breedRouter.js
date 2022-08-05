const express = require('express');
const router = express.Router();
const breedController = require('../controllers/breedController')
const upload = require('../middleware/multerUploadMiddleware')
const roleControlMiddleware = require('../middleware/roleControlMiddleware')
const enums = require('../enums/enums')

router.get('/', breedController.getAll);
router.post('/', roleControlMiddleware([enums.Roles.ADMIN]), upload.single('breedImage'), breedController.create)
router.get('/info/:id', breedController.getOne)
router.get('/list', breedController.getSeveralByIds)


module.exports = router;
