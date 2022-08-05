const express = require('express');
const router = express.Router();

// --------------

const landingRouter = require('./landingRouter')

const breedRouter = require('./breedRouter')
const breedCharacteristicsRouter = require('./breedCharacteristicsRoutes/index')

const userRouter = require('./userRouter')
const articleRouter = require('./articleRouter')
const articleCategoryRouter = require('./articleCategoryRouter')

// --------------

router.use('/', landingRouter)
router.use('/breeds', breedRouter)
router.use('/breed-characteristics', breedCharacteristicsRouter)

router.use('/user', userRouter)
router.use('/article', articleRouter)
router.use('/article-category', articleCategoryRouter)


module.exports = router;
