import "./App.css";
import FinishedTasks from "./pages/RemovedTasks";
import Header from "./components/Header";
import InputTask from "./components/InputTask";
import TasksGrid from "./components/TasksGrid";
import Footer from "./components/Footer";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [newTask, setNewTask] = useState({
    id: "",
    task: "",
    date_added: "",
    completed: false,
  });
  const [tasks, setTasks] = useState([]);
  const [taskHistory, setTaskHistory] = useState([]);

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

  function toggleComplete(id) {
    const modifiedList = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTasks(modifiedList);
  }

  function removeTask(id) {
    const remainingList = [];
    const removedList = [];

    tasks.map((task) => {
      if (task.id === id) {
        removedList.push(task);
      } else {
        remainingList.push(task);
      }
    });

    setTasks(remainingList);
    setTaskHistory(removedList);
  }

  function editTask(id, newText) {
    const editedTask = tasks.filter((task) => task.id === id);
    removeTask(id);
    setTasks([
      ...tasks,
      {
        ...editedTask,
        id: id,
        task: newText,
      },
    ]);
  }

  return (
    <div className="App">
      <Header />
      <InputTask
        newTask={newTask}
        addNewTask={addNewTask}
        handleTasks={handleTasks}
      />
      <TasksGrid
        tasks={tasks}
        toggleComplete={toggleComplete}
        removeTask={removeTask}
        editTask={editTask}
      />
      <Footer />
    </div>
  );
}

export default App;
