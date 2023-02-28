const { Schema, Model, Types} = require('mongoose');
const moment = require('moment');

// Shout Schema
const ShoutSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
        minlenght: 1,
        maxlength: 270,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a'),
    },
    reply: [replySchema],
},
{ 
    toJSON: { 
        virtuals: true,
        getters: true,
    },
    id: false,
});

// reply Schema
const replySchema = new Schema({
    replyId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    replyUsername: {
        type: String,
        required: true,
    },
    replyMessage: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 270,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a'),
    },
    },
    {
        toJson: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// get total reply count
ShoutSchema.virtual('replyCount').get(function() {
    return this.reply.length;
})

// create the Shout model using the ShoutSchema
const Shout = Model('Shout', ShoutSchema);

// export the Shout model
module.exports = Shout;