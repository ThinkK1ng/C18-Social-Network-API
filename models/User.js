const { Schema, Model, Types } = rewuire('mongoose');

// User Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    },
    shouts: {
        type: Schema.Types.ObjectId,
        ref: 'Shout',
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
},
{
    toJSON: {
        virtuals: true,
},
id: false,
});

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// Create User Model
const User = model('User', UserSchema);

// export Model
module.exports = User;
