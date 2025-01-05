import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [tasks, setTasks] = useState([]);

  const handleAddTask = (event) => {
    event.preventDefault();

    const newTask = event.target.task.value.trim();

    if (!newTask) {
      alert('Task cannot be empty!');
      return;
    }

    if (!tasks.includes(newTask)) {
      setTasks([...tasks, newTask]); 
      event.target.reset(); 
    } else {
      alert('Task already exists!');
    }
  };

  const taskListItems = tasks.map((task, index) => (
    <TaskItem 
      key={index} 
      task={task} 
      index={index} 
      tasks={tasks} 
      setTasks={setTasks} 
    />
  ));

  return (
    <>
      <h1>Task Manager-1</h1>
      <div>
        <form onSubmit={handleAddTask}>
          <input type='text' name='task' placeholder='Enter a task...' />
          <button type='submit'>Add Task</button>
        </form>

        <div>
          <ul>{taskListItems}</ul>
        </div>
      </div>
    </>
  );
};

export default App;


function TaskItem({ task, tasks, setTasks, index }) {
  const handleDeleteTask = () => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <li className='task-item'>
      {task} <span className='delete-btn' onClick={handleDeleteTask}>&times;</span>
    </li>
  );
}
