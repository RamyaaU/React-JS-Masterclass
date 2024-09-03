import './App.css';
import Card from "./components/Card.jsx";
import CreateToDo from './components/CreateToDo.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <Card /> 
        <CreateToDo />
      </header>
    </div>
  );
}

export default App;
