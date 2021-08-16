// User:
// - email: string
// - password: string
// - username: string
// - profile+pic: string
// - post: array of object ref Post
// - reviews: array of object ref Review

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')
const schema = mongoose.Schema;
const UserSchema = new Schema({
    email: string,
    image: string,
    post: [
        {
            type: schema.types.ObjectID,
            ref: 'Post'
        }
    ]
})

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);