const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController')
const upload = require('../middleware/multerUploadMiddleware')
const roleControlMiddleware = require('../middleware/roleControlMiddleware')
const enums = require('../enums/enums')

router.get('/', articleController.getAll)
router.post('/', roleControlMiddleware([enums.Roles.AUTHOR]), upload.single('articleImage'), articleController.create)
router.get('/info/:id', articleController.getOne)

module.exports = router;
