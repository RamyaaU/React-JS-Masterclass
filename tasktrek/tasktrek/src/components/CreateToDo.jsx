import React , {useState} from "react";

const CreateToDo = () => {
    let tasks = 0;
    //using use state 
    const [count, setCount] = useState(0);
    //const tasks = 0;
    //const hideButton =  false
    // const countTasks = () =>
    // {
    //   return tasks === 0 ?  "No tasks available " : `Tasks : ${tasks}`
    // }
    
    //click event function 
    const handleClick = () => {
        tasks ++ ;
        //utilizing setcount
        setCount(count + 1);
        console.log("Add Task", tasks);
    }

    return (
        <React.Fragment>
        <h1> Tasks : {tasks} </h1>
        <button onClick={handleClick} value="Add task button">Add Task</button>
     </React.Fragment>
    )
}

export default CreateToDo;