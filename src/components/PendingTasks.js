import TaskCard from "./TaskCard";
import "./styles/tasks_grid.css";

function PendingTasks({ tasks }) {
  return (
    <div id="tasks-grid">
      {tasks.map((task, index) => (
        <TaskCard task={task} key={index} />
      ))}
    </div>
  );
}

export default PendingTasks;
