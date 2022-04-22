import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/Demo';
import Todo from './components/Todo';
let todos = [
  {task: 'Learn Javascript', completed: true, priority: 'High'},
  {task: 'Learn React ', completed: false, priority: 'Medium'},
  {task: 'Learn Node Js', completed: false, priority: 'Low'},
]
function App() {
  return (
    <div>
      <h1 className='title'  >React ToDo List</h1>
      <Todo task="task 1" priority={todos[0].priority} status={todos[0].completed} />
      <Todo task={todos[1].task} priority={todos[1].priority} status={todos[1].completed} />
      <Todo task={todos[2].task} priority={todos[2].priority} status={todos[2].completed} />
    </div>
  );
}

export default App;
