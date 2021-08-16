// Review:
// - body: string
// - author: object ID ref user

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ReviewSchema = new Schema({
    body: String,
    
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Review', ReviewSchema)