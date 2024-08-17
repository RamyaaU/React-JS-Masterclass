import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from '../src/components/AddTask';
import ShowTask from '../src/components/ShowTask';

function App() {

  //Initialize an empty array as the initial task list
  const [tasklist,setTasklist] = useState([]);
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
