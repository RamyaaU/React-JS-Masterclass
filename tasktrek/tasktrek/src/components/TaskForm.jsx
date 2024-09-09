import React, {useState} from 'react'
import './TaskForm.css';
import Tag from './Tag';

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
      task: "",
      status: "todo",
      tags: []
  });

  const selectTag = (tag) => {
     console.log(tag);
     if(taskData.tags.some(item => item === tag))
     {
      const filterTags = taskData.tags.filter(item => item !== tag)
      setTaskData(prev => {
        return{...prev, tags : filterTags}
      })
     }
     else{
      setTaskData(prev => {
        return {...prev, tags: [...prev.tags, tag]}
      })
     }
  }

  const handleChange = (e) => {
      const { name, value } = e.target;  
      setTaskData((prev) => {
          return { ...prev, [name]: value };
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
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
                <Tag tagName = "Html" selectTag={selectTag} />
                <Tag tagName = "CSS" selectTag={selectTag}/>
                <Tag tagName = "Javascript" selectTag={selectTag}/>
                <Tag tagName = "React" selectTag={selectTag}/>
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
