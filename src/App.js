import "./App.css";
import FinishedTasks from "./pages/RemovedTasks";
import Header from "./components/Header";
import InputTask from "./components/InputTask";
import TasksGrid from "./components/TasksGrid";
import Footer from "./components/Footer";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function App() {
  const [newTask, setNewTask] = useState({
    id: "",
    task: "",
    date_added: "",
    completed: false,
  });
  const [tasks, setTasks] = useState([]);

  function addNewTask(inputTask) {
    setNewTask({
      ...newTask,
      id: uuidv4(),
      task: inputTask,
      date_added: new Date().toISOString().slice(0, 10),
    });
  }

  function handleTasks(e) {
    e.preventDefault();
    if (newTask.task.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask({
        id: "",
        task: "",
        date_added: "",
        completed: false,
      });
    }
  }

  function toggleComplete(key) {
    const filteredList = tasks.map((task) => {
      if (task.id === key) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTasks(filteredList);
  }

  return (
    <div className="App">
      <Header />
      <InputTask
        newTask={newTask}
        addNewTask={addNewTask}
        handleTasks={handleTasks}
      />
      <TasksGrid tasks={tasks} toggleComplete={toggleComplete} />
      <Footer />
    </div>
  );
}

export default App;
