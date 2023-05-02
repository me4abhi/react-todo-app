// import {useState} from 'react';

const TaskList = ({tasks, handleDelete}) => {
    
    return (
    <>
        <p>
            {
                tasks.map((task, index) => {
                    return (
                        <li key={index} onClick={() => handleDelete(task)}>
                            {task}
                        </li>
                    );
                })
            }
        </p>
    </>)
}

export default TaskList;