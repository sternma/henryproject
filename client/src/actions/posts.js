import { CREATE, FETCH_AT_DATE } from "../constants/actionTypes";

import * as api from '../api/index.js';

export const getPostsAtDate = (date) => async (dispatch) => {
    try {
        const { data } = date !== undefined ? await api.fetchPosts(date) : [];

        dispatch({ type: FETCH_AT_DATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };