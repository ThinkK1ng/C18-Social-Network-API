const router = require('express').Router();
// Import all API routes from /api/index.js
const apiRoutes = require('./api');

// Add prefix of `/api` to all API routes imported from the `api` directory
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;