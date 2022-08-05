const express = require('express');
const router = express.Router();
const  userController = require('../controllers/userController')
const authenticationMiddleware = require('../middleware/authenticationMiddleware')
const roleControlMiddleware = require('../middleware/roleControlMiddleware')
const enums = require('../enums/enums')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authenticationMiddleware, userController.check)

router.post('/save-article', roleControlMiddleware([enums.Roles.USER, enums.Roles.AUTHOR]),  userController.saveArticle)
router.post('/delete-article', roleControlMiddleware([enums.Roles.USER, enums.Roles.AUTHOR]),  userController.deleteArticle)


module.exports = router;
