import {useState} from 'react';
import '../App.css';

function AppForArrayuse()
{
    const [tasks, setTasks] = useState([
        {id:1, name : "Record lectures", completed :false}, 
        {id:2, name : "Edit lectures", completed :false}, 
        {id:3, name : "Watch lectures", completed :false}, 
        ]);


    function handleDelete(id)
    {
        setTasks(tasks.filter(task => task.id !== id));
        //console.log(tasks.id);
    }

    return(
        <div className="App">
            <h1>Task List</h1>
            <ul> 
                {/* using index -  */}
               {/* loops over all tasks using map method
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task.id}-{task.name}</span>
                        <button>Delete</button>
                        </li>
                ))} */}

                {/* {if id is passed as unique key instead of index} */}
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span>{task.id}-{task.name}</span>
                        <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
                        </li>
                ))}

            </ul>
        </div>
    )
}

export default AppForArrayuse;