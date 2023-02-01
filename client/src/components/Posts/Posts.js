import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { Container, Grow, Grid } from '@material-ui/core';


const Posts = () => {
    const classes = useStyles();
    return(
        <>
            {
                <Container>
                    <Grid container justifyContent="center" alignItems="stretch" spacing={4} direction="row">
                        <Grid item xs = {1.5}>
                            <Post name='Monday'/>
                        </Grid>
                        <Grid item xs = {1.5}>
                           <Post name='Tuesday'/>
                        </Grid>
                        <Grid item xs = {1.5}>
                            <Post name='Wednesday'/>
                        </Grid>
                        <Grid item xs = {1.5}>
                            <Post name='Thursday'/>
                        </Grid>
                        <Grid item xs = {1.5}>
                            <Post name='Friday'/>
                        </Grid>
                        <Grid item xs = {1.5}>
                            <Post name='Saturday'/>
                        </Grid>
                        <Grid item xs = {1.5}>
                            <Post name='Sunday'/>
                        </Grid>
                    </Grid>
                </Container>

            }
        </>
    )
}

export default Posts;