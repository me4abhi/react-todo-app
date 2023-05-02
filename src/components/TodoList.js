import { useState } from "react";
import TaskList from "./TaskList";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    setTaskList([...taskList, task]);
    setTask("");
  };

  const handleDelete = (taskToDelete) => {
    const filteredList = taskList.filter((listItem) => listItem !== taskToDelete);
    setTaskList(filteredList);
  };

  return (
    <>
      <h1>Todo List</h1>
      <label htmlFor="task">Add a new task: </label>
      <input
        value={task}
        type="text"
        name="task"
        id="task"
        onChange={(e) => handleInput(e)}
      />
      <button id="add-task" onClick={handleClick}>
        Add
      </button>
      <TaskList tasks={taskList} handleDelete={handleDelete} />
    </>
  );
};

export default TodoList;
