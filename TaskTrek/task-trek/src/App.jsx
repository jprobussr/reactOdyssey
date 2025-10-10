import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm.jsx';
import TaskColumn from './components/TaskColumn.jsx';
import TodoIcon from './assets/direct-hit.png';
import DoingIcon from './assets/glowing-star.png';
import DoneIcon from './assets/check-mark-button.png';

const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log('Task', tasks);
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn title="To do" icon={TodoIcon} tasks={tasks} status="todo" />
        <TaskColumn
          title="Doing"
          icon={DoingIcon}
          tasks={tasks}
          status="doing"
        />
        <TaskColumn title="Done" icon={DoneIcon} tasks={tasks} status="done" />
      </main>
    </div>
  );
};

export default App;
