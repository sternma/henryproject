import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
    const classes = useStyles();
    return(
        <>
            <h1>POSTS</h1>
            <Post name='Monday'/>
            <Post name='Tuesday'/>
            <Post name='Wednesday'/>
            <Post name='Thursday'/>
            <Post name='Friday'/>
            <Post name='Saturday'/>
            <Post name='Sunday'/>
        </>
    )
}

export default Posts;