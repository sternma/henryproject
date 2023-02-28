import { addDays, addMinutes, subMinutes } from 'date-fns';
import PostMessage from'../models/postMessage.js';

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getPostsAtDate = async (req, res) => { 

    try {
        const reqDate = req.body.date;
        const date = subMinutes(new Date(reqDate), new Date(reqDate).getTimezoneOffset());
        const postMessages = await PostMessage.find({date: {$gte:  date, $lt: addDays(date, 1)}});
        
        res.status(200).json(postMessages);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
   
    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}