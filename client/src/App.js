import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import memories from './images/memories.png';
import useStyles from './styles';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPostsAtDate } from './actions/posts';

const App = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPostsAtDate({date: new Date()}));
      }, [dispatch]);

    return (
        <Container maxWidth = "lg">
            <AppBar className={classes.appBar} position = "static" color = "inherit">
                <img className={classes.image} src= {memories} alt = "Week Schedule" height = "60" />
                <Typography className={classes.heading} variant = "h2" align = "center">Week Schedule</Typography>
            </AppBar>
            <Grid container spacing={2} direction="column">
                <Grid item xs={12}>
                    <Grow in>
                        <Container>
                            <Posts/>
                        </Container>
                    </Grow>
                </Grid>
                <Grid item xs={12}>
                    <Form/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;  