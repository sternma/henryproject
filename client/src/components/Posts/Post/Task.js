import React from 'react';

const Task = ({taskName, taskDetails, completeStatus}) => {
    return(
        <>
        <h3>Task Name:</h3>
        <p>{taskName}</p>
        <h3>Task Details:</h3>
        <ul>{
                taskDetails.map(function (detail) {
                    return '<li>' + detail + '</li>';
                })
                
            }</ul>

        
        <h3>Complete?</h3>
        <p>{completeStatus}</p>
        </>
    )
}

export default Task;