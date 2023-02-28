import axios from 'axios';

const url = 'http://localhost:5001/posts';

export const fetchPosts = (date) => axios.post(url, date);
export const createPost = (newPost) => axios.post(`${url}/create`, newPost);