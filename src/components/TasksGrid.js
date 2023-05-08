import TaskCard from "./TaskCard";
import "./styles/tasks_grid.css";

function TasksGrid({ toggleComplete, tasks }) {
  return (
    <div id="tasks-grid">
      {/* Try using the 'index' argument of array.map() */}
      {tasks.map(({id, task, date_added, completed}) => (
        <TaskCard key={id} toggleComplete={toggleComplete} id={id} task={task} date={date_added} completed={completed} 
         />
      ))}
    </div>
  );
}

export default TasksGrid;