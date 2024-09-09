import React, {useState} from 'react'
import './TaskForm.css';
import Tag from './Tag';

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
      task: "",
      status: "todo"
  });

  const handleChange = (e) => {
      const { name, value } = e.target;  
      setTaskData((prev) => {
          return { ...prev, [name]: value };
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  // const[task, setTask]  = useState("");
  // const[status, setStatus] = useState("todo");

  // //handleTaskChange function captures the user input 
  // const handleTaskChange = e => {
  //   setTask(e.target.value);
  // }

  // //dropdown values are captured
  // const handleTaskStatus = e => {
  //   setStatus(e.target.value);
  // }

  return (
    <div className='app'>
    
    <header className='app_header'>
        <form onSubmit={handleSubmit}>
            <input type='text' 
            name="task" className='task_input' placeholder='Enter your task' 
              onChange={handleChange}/>
            <div className='task_form_bottom_line'>
                <div>
                {/* <button className='tag'>HTML</button> */}
                <Tag tagName = "Html"/>
                <Tag tagName = "CSS" />
                <Tag tagName = "Javascript"/>
                <Tag tagName = "React"/>
                {/* <button className='tag'>CSS</button>
                <button className='tag'>JS</button>
                <button className='tag'>React</button> */}
                </div>
                <div>
                <select className='task_status' name="status" onChange={handleChange}>
                    <option value='todo'>To Do</option>
                    <option value='doing'>Doing</option>
                    <option value='done'>Done</option>
                </select>
                </div>
                <button type='submit' className='task_submit'> +Add Task</button>
            </div>
        </form>
    </header>
    </div>
  )
}

export default TaskForm
