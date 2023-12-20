import logo from './logo.svg';
import './App.css';
import TaskList from './components/Task/TaskList';
import TaskButton from './components/Task/TaskButton';


function App() {
  return (
    <>
      <div className='container py-5'>
        <h1 className='mb-4'>Task List</h1>
        <TaskList />
        <TaskButton />
      </div>
    </>
  );
}

export default App;
