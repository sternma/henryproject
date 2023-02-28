import React from 'react';
import Post from './Post/Post';
import { Container, Grid } from '@material-ui/core';
import { format, getDay, isFriday, isMonday, isSaturday, isSunday, isThursday, isTuesday, isWednesday, nextMonday, nextSaturday, nextSunday, nextThursday, nextTuesday, nextWednesday, previousMonday, previousSaturday, previousThursday, previousTuesday, previousWednesday, nextFriday } from 'date-fns';

const mondayHelper = (date) => {
    if(isMonday(date)){
        return format(date, 'MM/dd/yyyy');
    }
    if(getDay(date) > 1){
        return format(previousMonday(date), 'MM/dd/yyyy');
    } else if (getDay(date) < 1) {
        return format(nextMonday(date), 'MM/dd/yyyy');
    }
}

const tuesdayHelper = (date) => {
    if(isTuesday(date)){
        return format(date, 'MM/dd/yyyy');
    }
    if(getDay(date) > 2){
        return format(previousTuesday(date), 'MM/dd/yyyy');
    } else if (getDay(date) < 2) {
        return format(nextTuesday(date), 'MM/dd/yyyy');
    }
}

const wednesdayHelper = (date) => {
    if(isWednesday(date)){
        return format(date, 'MM/dd/yyyy');
    }
    if(getDay(date) > 3){
        return format(previousWednesday(date), 'MM/dd/yyyy');
    } else if (getDay(date) < 3) {
        return format(nextWednesday(date), 'MM/dd/yyyy');
    }
}

const thursdayHelper = (date) => {
    if(isThursday(date)){
        return format(date, 'MM/dd/yyyy');
    }
    if(getDay(date) > 4){
        return format(previousThursday(date), 'MM/dd/yyyy');
    } else if (getDay(date) < 4) {
        return format(nextThursday(date), 'MM/dd/yyyy');
    }
}

const fridayHelper = (date) => {
    if(isFriday(date)){
        return format(date, 'MM/dd/yyyy');
    }
    if(getDay(date) > 5){
        return format(previousFriday(date), 'MM/dd/yyyy');
    } else if (getDay(date) < 5) {
        return format(nextFriday(date), 'MM/dd/yyyy');
    }
}

const saturdayHelper = (date) => {
    if(isSaturday(date)){
        return format(date, 'MM/dd/yyyy');
    }
    if(getDay(date) > 6){
        return format(previousSaturday(date),'MM/dd/yyyy');
    } else if (getDay(date ) < 6) {
        return format(nextSaturday(date), 'MM/dd/yyyy');
    }
}

const sundayHelper = (date) => {
    if(isSunday(date)){
        return format(date, 'MM/dd/yyyy');
    }
    if(getDay(date) > 0){
        return format( nextSunday(date), 'MM/dd/yyyy');
    }
}

const Posts = () => {
    return(
        <>
            {
                <Container>
                    <Grid container justifyContent="center" alignItems="stretch" spacing={4} direction="row">
                        <Grid item xs = {1.5}>
                            <Post name='Monday' date={mondayHelper(new Date)}/>
                        </Grid>
                        <Grid item xs = {1.5}>
                           <Post name='Tuesday' date={tuesdayHelper(new Date)}/>
                        </Grid>
                        <Grid item xs = {1.5}>
                            <Post name='Wednesday' date={wednesdayHelper(new Date)}/>
                        </Grid>
                        <Grid item xs = {1.5}>
                            <Post name='Thursday' date={thursdayHelper(new Date)}/>
                        </Grid>
                        <Grid item xs = {1.5}>
                            <Post name='Friday' date={fridayHelper(new Date)}/>
                        </Grid>
                        <Grid item xs = {1.5}>
                            <Post name='Saturday' date={saturdayHelper(new Date)}/>
                        </Grid>
                        <Grid item xs = {1.5}>
                            <Post name='Sunday' date={sundayHelper(new Date)}/>
                        </Grid>
                    </Grid>
                </Container>

            }
        </>
    )
}

export default Posts;