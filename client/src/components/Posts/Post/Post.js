import React from 'react';
import useStyles from './styles';

const Post = ({ name }) => {
    const classes = useStyles();
    return(
        <h1>{name}</h1>
    )
}

export default Post;