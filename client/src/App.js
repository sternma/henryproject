import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/Posts/Posts';
import memories from './images/memories.png';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    return (
        <Container maxidth = "lg">
            <AppBar className={classes.appBar} position = "static" color = "inherit">
                <img className={classes.image} src= {memories} alt = "Week Schedule" height = "60" />
                <Typography className={classes.heading} varaint = "h2" align = "center">Week Schedule</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent = "center" alignItems = "center" spacing = {3}>
                        <Grid item xs = {12} sm = {7}>
                            <Posts />
                        </Grid>
                    </Grid>
                </Container>

            </Grow>
        </Container>
    );
}

export default App;  