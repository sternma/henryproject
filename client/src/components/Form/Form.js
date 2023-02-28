import React, { useState } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';

import { createPost } from '../../actions/posts';


const Form = () => {
    const [postData, setPostData] = useState({
        'creator': '',
        'title': '',
        'message': '',
        'date': ''
    })
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
        clear();
    }

    const clear = () => {
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="Off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Task</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <TextField name="message" variant="outlined" label="Details" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
                <TextField name="date" variant="outlined" type="date" defaultValue={format(new Date(), 'MM/dd/yyyy')} fullWidth value={postData.date} onChange={(e) => setPostData({ ...postData, date: e.target.value })}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit" size="large" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;