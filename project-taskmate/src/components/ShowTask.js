import React from 'react';

export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {

    const handleEdit = (selectedTask) => {
        // Set the task for editing
        setTask(selectedTask);
    };

    const handleDelete = (id) => {
        // Filter logic - creating an array to leave the one with id no passed 
        const updatedTaskList = tasklist.filter(task => task.id !== id);
        setTasklist(updatedTaskList);
    };

    return (
        <section className='showTask'>
            <div className='head'>
                <div>
                    <span className='title'>Todo</span>
                    <span className='count'>{tasklist.length}</span>
                </div>
                <button className='clearAll' onClick={() => setTasklist([])}>Clear All</button>
            </div>
            <ul>
                {tasklist.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className='name'>{task.name}</span>
                            <span className='time'>{task.time}</span>
                        </p>
                        <i 
                            onClick={() => handleEdit(task)} 
                            className="fa-regular fa-pen-to-square"
                        ></i>
                        <i 
                            onClick={() => handleDelete(task.id)} 
                            className="fa-solid fa-trash"
                        ></i>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ShowTask;
