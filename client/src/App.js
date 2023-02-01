import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Post from './components/Posts/Post/Post';
import memories from './images/memories.png';
import useStyles from './styles';
import Posts from './components/Posts/Posts';

const App = () => {
    const classes = useStyles();
    return (
        <Container maxWidth = "lg">
            <AppBar className={classes.appBar} position = "static" color = "inherit">
                <img className={classes.image} src= {memories} alt = "Week Schedule" height = "60" />
                <Typography className={classes.heading} varaint = "h2" align = "center">Week Schedule</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Posts/>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;  