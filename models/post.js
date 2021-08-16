// Post:
// - title : string
// - price: string
// - description: string
// - images: array of string
// - location: string
//    + lat: number
//    + long: number
// - author: object ID ref Post
// - reviews: array of objects

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    price: String,
    description: String,
    images: [String],
    location: String,
    lat: Number,
    long: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: schema.types.ObjectID,
            ref: 'Reviews'
        }
    ]
})

module.exports = mongoose.model('Post', PostSchema)