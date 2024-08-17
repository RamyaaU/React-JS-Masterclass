import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const ShowTask = ({tasklist,setTasklist, task, setTask}) => {

    // const tasks = [
    //     {id:1001, name : "Task A", time: "04:05 PM 17/08/2024"},
    //     {id:1002, name : "Task B", time: "05:05 PM 17/08/2024"},
    //     {id:1003, name : "Task C", time: "04:06 PM 17/08/2024"},
    // ]

    const handleEdit = (id) => 
    {
        const selectedTask = tasklist.find(task => task.id === id);
        console.log(selectedTask);
    }

    
    const handleDelete  = (id) =>
    {
        // filter logic - creating an array to leave the one with id no passed 
        const updatedTaskList = tasklist.filter(task => task.id !== id);
        setTasklist(updatedTaskList);
    }

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

                    <i onClick={() => handleEdit(task.id)} className="fa-regular fa-pen-to-square"></i>
                    <i onClick={() => handleDelete(task.id)} className="fa-solid fa-trash"></i>

                </li>
            ))}
        </ul>
    </section>
  )
}

export default ShowTask
