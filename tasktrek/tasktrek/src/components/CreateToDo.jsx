import React , {useState} from "react";

const CreateToDo = () => {
    //let tasks = 0;
    //using use state 
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("")
    const tasks = ["Task1", "Task2"]
    //const tasks = 0;
    //const hideButton =  false
    // const countTasks = () =>
    // {
    //   return tasks === 0 ?  "No tasks available " : `Tasks : ${tasks}`
    // }
    
    //click event function 
    const handleClick = () => {
        //utilizing setcount
        setCount(count + 1);
    }

    const handleChange =  (event) => 
    {
        setInput(event.target.value);
    }

    return (
        <React.Fragment>
        <h1> Tasks : {tasks} </h1>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick} value="Add task button">Add Task</button>
        <h1>Input : {input}</h1>
        {/* <ul>
            tasks.map(task => <li>{task}</li>)
        </ul> */}
        <ul>
        {tasks.map((task, index) => <li key={index}>{task}</li>)}
        </ul>

     </React.Fragment>
    )
}

export default CreateToDo;