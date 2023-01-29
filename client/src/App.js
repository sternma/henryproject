import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Post from './components/Posts/Post/Post';
import memories from './images/memories.png';
import useStyles from './styles';

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
                    <Grid container justifyContent = "space-between" alignItems = "stretch" spacing = {3}>
                        <Grid item xs = {12} sm = {7}>
                            <Post name='Monday'/>
                        </Grid>
                        <Grid item xs = {12} sm = {7}>
                            <Post name='Tuesday'/>
                        </Grid>
                        <Grid item xs = {12} sm = {7}>
                            <Post name='Wednesday'/>
                        </Grid>
                        <Grid item xs = {12} sm = {7}>
                            <Post name='Thursday'/>
                        </Grid>
                        <Grid item xs = {12} sm = {7}>
                            <Post name='Friday'/>
                        </Grid>
                        <Grid item xs = {12} sm = {7}>
                            <Post name='Saturday'/>
                        </Grid>
                        <Grid item xs = {12} sm = {7}>
                            <Post name='Sunday'/>
                        </Grid>
                    </Grid>
                </Container>

            </Grow>
        </Container>
    );
}

export default App;  