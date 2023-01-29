import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { Container, Grow, Grid } from '@material-ui/core';


const Posts = () => {
    const classes = useStyles();
    return(
        <>
            <h1>POSTS</h1>
            <Post name='Monday'/>
            <Post name='Tuesday'/>
            <Post name='Wednesday'/>
            <Post name='Thursday'/>
            <Post name='Friday'/>
            <Post name='Saturday'/>
            <Post name='Sunday'/>
            
            {/* <Grow in>
                <Container>
                    <Grid container justifyContent = "center" alignItems = "stretch" spacing = {3} direction = "row">
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

            </Grow> */}
        </>
    )
}

export default Posts;