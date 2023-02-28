import express from 'express';

import { getPosts, createPost, getPostsAtDate } from '..//controllers/posts.js'

const router = express.Router();

//https://localhost:5000/posts

router.post('/', getPostsAtDate);
router.post('/create', createPost);


export default router;