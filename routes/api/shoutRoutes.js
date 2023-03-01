const router = require('express').Router();
const { getShouts, 
    createShout, 
    getOneShout, 
    updateShout, 
    deleteShout } = require('../../controllers/shoutController');

// /api/shouts
router
    .route('/')
    .get(getShouts)
    .post(createShout);

// /api/shouts/:id
router
    .route('/:id')
    .get(getOneShout)
    .put(updateShout)
    .delete(deleteShout);

    // /api/shouts/:shoutId/reactions POST reaction to shout
router
    .route('/:shoutId/reactions')
    .post(createReaction);

    // /api/shouts/:shoutId/reactions/:reactionId DELETE reaction by Id
router
    .route('/:shoutId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;