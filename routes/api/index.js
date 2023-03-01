const router = require('express').Router();
const userRoutes = require('./userRoutes');
const shoutRoutes = require('./shoutRoutes');

router.use('/users', userRoutes);
router.use('/shouts', shoutRoutes);

module.exports = router;