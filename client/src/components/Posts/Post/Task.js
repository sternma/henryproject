import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

const Task = ({ name, details, creator }) => {
    console.log(name)
    return(
        <Paper>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="h6">By: {creator}</Typography>
            <Typography variant="body2" gutterBottom={true} paragraph={true}>Details: {details}</Typography>
        </Paper>
    )
}

export default Task;