const { User, Shout } = require('../models');

const shoutController = {
    // get all shouts
    getAllShouts(req, res) {
        Shout.find({})
            .populate({
                path: 'replies',
                select: '-__v',
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then((dbShoutData) => res.json(dbShoutData))
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            }
        );
    },

    // get one shout by id
    getShoutById({ params }, res) {
        Shout.findOne({ _id: params.id })
            .populate({
                path: 'replies',
                select: '-__v',
            })
            .select('-__v')
            .then((dbShoutData) => {
                // if no shout is found, send 404
                if (!dbShoutData) {
                    res.status(404).json({ message: 'No shout found with this id!' });
                    return;
                }
                res.json(dbShoutData);
            }
        )
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        }
    );
    },

    // createShout
    createShout({ body }, res) {
        Shout.create(body)
            .then((dbShoutData) => {
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { shouts: dbShoutData._id } },
                    { new: true }
                );
            }
        )
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        }
    )
    .catch((err) => res.json(err));
    },

    // updateShout by id
    updateShout({ params, body }, res) {
        Shout.findOneAndUpdate({ _id: params.id }, 
            { $set: req.body }, 
            { new: true, runValidators: true }
            ),
            .then((dbShoutData) => {
                if (!dbShoutData) {
                    res.status(404).json({ message: 'No shout found with this id!' });
                    return;
                }
                res.json(dbShoutData);
            }
        )
        .catch((err) => res.status(400).json(err));
    },

    // deleteShout
    deleteShout({ params }, res) {
        Shout.findOneAndDelete({ _id: params.id })
            .then((dbShoutData) => {
                if (!dbShoutData) {
                    res.status(404).json({ message: 'No shout found with this id!' });
                    return;
                }
                res.json(dbShoutData);
            }
        )
        .catch((err) => res.status(400).json(err));
    },

    // add reply
    addReply({ params, body }, res) {
        Shout.findOneAndUpdate(
            { _id: params.shoutId },
            { $push: { replies: body } },
            { new: true, runValidators: true }
        )
        .then((dbShoutData) => {
            if (!dbShoutData) {
                res.status(404).json({ message: 'No shout found with this id!' });
                return;
            }
            res.json(dbShoutData);
        }
    )
    .catch((err) => res.json(err));
    },

    // remove reply
    removeReply({ params }, res) {
        Shout.findOneAndUpdate(
            { _id: params.shoutId },
            { $pull: { replies: { replyId: params.replyId } } },
            { new: true }
        )
        .then((dbShoutData) => res.json(dbShoutData))
        .catch((err) => res.json(err));
    },
};

module.exports = shoutController;