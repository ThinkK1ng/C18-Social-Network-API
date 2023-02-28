const router = require('express').Router();
const { getUser,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend } = require('../../controllers/userController');

// /api/users
router
    .route('/')
    .get(getUser)
    .post(createUser);

// /api/users/:id
router
    .route('/:id')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;
