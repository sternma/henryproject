import React from 'react';
import useStyles from './styles';

const Post = ({ name }) => {
    const classes = useStyles();
    return(
        <>
        <h1>{name}</h1>
        <h3>Task Name:</h3>
        <p>Sample Task</p>
        <h3>Task Details:</h3>
        <p>-Do this</p>
        <p>-Do that</p>
        <h3>Complete?</h3>
        <p>No</p>
        </>   
    )
}

export default Post;