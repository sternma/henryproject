import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../../../api';
import Task from './Task';
import { format } from 'date-fns';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

const Post = ({name, date}) => {
    const [tasks, setTasks] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        
        async function getTasks() {
            const response = await fetchPosts({date: format(new Date(date), 'MM-dd-yyyy')});
            setTasks(response.data);
        };
        if (tasks.length === 0) {
            getTasks();
        }
    }, [date]);
    
    return (
        <Paper className={classes.paper}>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body1">{date}</Typography>
            {tasks.map(element => {
                return <Task name={element.title} details={element.message} creator={element.creator}/>
            })}
        </Paper>
    )
}

export default Post;