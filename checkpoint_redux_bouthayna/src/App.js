import logo from './logo.svg';
import './App.css';

import AddTask from './components/AddTask'
import ListToDo from './components/ListTask'

function App() {
  

  return (
    <div className="wrapper">
      <header>Todo App</header>

      <AddTask />      
      <ListToDo/>
    </div>
   
  );
}

export default App;

