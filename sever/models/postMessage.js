import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    date: {
        type: Date,
        default: new Date()
    }
});

const postMessage = mongoose.model('postMessage', postSchema);

export default postMessage;