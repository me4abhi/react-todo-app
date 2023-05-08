import "./styles/input_task.css";

function InputTask({newTask, addNewTask, handleTasks}) {

  return (
    <form onSubmit={(e) => handleTasks(e)} id="input-task">
      <input type="text" value={newTask.task} onChange={(e) => addNewTask(e.target.value)} autoFocus required />
      <button type="submit">Add</button>
    </form>
  );
}

export default InputTask;
