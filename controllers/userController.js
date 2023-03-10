const { User, Shout } = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            },
        );
    },
            // get one user by id
            getOneUser(req, res) {
                User.findOne({ _id: params.id })
                    .populate({
                        path: 'shouts',
                        select: '-__v',
                    })
                    .select('-__v')
                    .populate({
                        path: 'friends',
                        select: '-__v',
                    })
                    .select('-__v')
                    .then((dbUserData) => {
                        // if no user is found, send 404
                        if (!dbUserData) {
                            res.status(404).json({ message: 'No user found with this id!' });
                            return;
                        }
                        res.json(dbUserData);
                    }
                )
                .catch((err) => {
                    console.log(err);
                    res.status(500).json(err);
                });
            },
            // createUser
            createUser({ body }, res) {
                User.create(body)
                    .then((dbUserData) => res.json(dbUserData))
                    .catch((err) => res.status(500).json(err));
            },
            // updateUser
            updateUser({ params, body }, res) {
                User.findOneAndUpdate(
                    { _id: params.id },
                    body,
                    { new: true, runValidators: true }
                )
                .then((dbUserData) => {
                    if (!dbUserData) {
                        res.status(404).json({ message: 'No user found with this id!' });
                        return;
                    }
                    res.json(dbUserData);
                }
            )
            .catch((err) => res.status(500).json(err));
            },
            // deleteUser
            deleteUser({ params }, res) {
                User.findOneAndDelete({ _id: params.id })
                    .then((dbUserData) => {
                        if (!dbUserData) {
                            res.status(404).json({ message: 'No user found with this id!' });
                            return;
                        }
                        res.json(dbUserData);
                    }
                )
                .catch((err) => res.status(500).json(err));
            },
            // addFriend
            addFriend({ params }, res) {
                User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { friends: params.friendId } },
                    { new: true }
                )
                .then((dbUserData) => {
                    if (!dbUserData) {
                        res.status(404).json({ message: 'No user found with this id!' });
                        return;
                    }
                    res.json(dbUserData);
                }
            )
            .catch((err) => res.status(500).json(err));
            },
            // removeFriend
            removeFriend({ params }, res) {
                User.findOneAndUpdate(
                    { _id: params.userId },
                    { $pull: { friends: params.friendId } },
                    { new: true }
                )
                .then((dbUserData) => {
                    if (!dbUserData) {
                        res.status(404).json({ message: 'No user found with this id!' });
                        return;
                    }
                    res.json(dbUserData);
                }
            )
            .catch((err) => res.status(500).json(err));
            },
        };

        module.exports = userController;