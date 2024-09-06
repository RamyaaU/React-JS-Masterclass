// import './App.css';
// import Card from "./components/Card.jsx";
// import CreateToDo from './components/CreateToDo.jsx';

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <Card /> 
//         <CreateToDo />
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import '../src/App.css'
import TaskForm from './components/TaskForm'

const App = () => {
  return (
    <div className='app'>
       <TaskForm />    
      <header className='app_header'>Header section </header>
      <main className='app_main'>
        <section className='task_column'>Section 1</section>
        <section className='task_column'>Section 2</section>
        <section className='task_column'>Section 3</section>
      </main>
    </div>
  )
}

export default App

