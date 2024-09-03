import React from "react";

const CreateToDo = () => {

    const tasks = 1;
    const hideButton =  true
    // const styles =  {
    //     backgroundColor : "red"
    // }
    const countTasks = () =>
    {
      return tasks === 0 ?  "No tasks available " : `Tasks : ${tasks}`
    }
    
    return (
        <React.Fragment>
        <h1> {countTasks()} </h1>
        <button  disabled={hideButton} value="Add task button">Add Task</button>
     </React.Fragment>
    )
}

export default CreateToDo;