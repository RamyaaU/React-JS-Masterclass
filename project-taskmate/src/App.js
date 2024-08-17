import './App.css';
import Header from './components/Header';
import AddTask from '../src/components/AddTask';
import ShowTask from '../src/components/ShowTask';

function App() {
  return (
    <div className="App">
      <Header/>
      <ShowTask />
      <AddTask />
    </div>
  );
}

export default App;
