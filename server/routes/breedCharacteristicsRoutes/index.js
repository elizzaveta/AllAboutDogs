const express = require('express');
const router = express.Router();

// --------------

const trainabilityRouter = require('./trainabilityRouter')
const coatLengthRouter = require('./coatLenchRouter')
const barkingRouter = require('./barkingRouter')
const activityLevelRouter = require('./activityLevelRouter')
const sheddingRouter = require('./sheddingRouter')
const dogsFriendlyRouter = require('./dogsFriendlyRouter')
const kidsFriendlyRouter = require('./kidsFriendlyRouter')

// --------------

router.use('/trainability', trainabilityRouter)
router.use('/coat-length', coatLengthRouter)
router.use('/barking', barkingRouter)
router.use('/activity-level', activityLevelRouter)
router.use('/shedding', sheddingRouter)
router.use('/dogs-friendly', dogsFriendlyRouter)
router.use('/kids-friendly', kidsFriendlyRouter)

module.exports = router