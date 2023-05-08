import "./App.css";
import FinishedTasks from "./pages/FinishedTasks";
import Header from "./components/Header";
import InputTask from "./components/InputTask";
import PendingTasks from "./components/PendingTasks";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addNewTask(newTask) {
    // if (newTask.trim() !== "") {
    setNewTask(newTask);
    // }
  }

  function handleTasks(e) {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  return (
    <div className="App">
      <Header />
      <InputTask
        newTask={newTask}
        addNewTask={addNewTask}
        handleTasks={handleTasks}
      />
      <PendingTasks tasks={tasks} />
      <Footer />
    </div>
  );
}

export default App;
