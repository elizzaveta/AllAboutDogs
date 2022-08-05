const express = require('express');
const router = express.Router();
const articleCategoryController = require('../controllers/articleCategoryController')
const roleControlMiddleware = require('../middleware/roleControlMiddleware')
const enums = require('../enums/enums')

router.get('/', articleCategoryController.getAll)
router.post('/', roleControlMiddleware([enums.Roles.ADMIN]), articleCategoryController.create)

module.exports = router;
