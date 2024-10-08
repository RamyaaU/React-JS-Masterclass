import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from '../src/components/AddTask';
import ShowTask from '../src/components/ShowTask';

function App() {

  //Initialize an empty array as the initial task list
  //const [tasklist,setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [tasklist, setTasklist] = useState(() => {
    try {
      //fetches the tasks from local storage 
      const savedTasklist = localStorage.getItem("tasklist");
      //if tasks found returns the task else it will return empty array
      return savedTasklist ? JSON.parse(savedTasklist) : [];
    } catch (error) {
      console.error("Error parsing tasklist from localStorage:", error);
      return []; // Fallback to an empty array
    }
  });

  //using use effect whenevr the task list chnages teh useeffect will save the
  //latest to browsers local storage 
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist))
  }, [tasklist]);
  
  const [task, setTask] = useState([]);

  return (
    <div className="App">
      <Header/>
      {/* displays the current list of tasks stored in tasklist */}
      <ShowTask 
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}/>
      {/* form where users can add new tasks  */}
      <AddTask tasklist={tasklist} 
                setTasklist={setTasklist} 
                task={task}
                setTask={setTask}/>
          </div>
  );
}

export default App;
