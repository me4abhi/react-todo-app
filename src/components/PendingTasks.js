import TaskCard from "./TaskCard";
import "./styles/tasks_grid.css"

function PendingTasks() {
    return (
        <div id="tasks-grid">
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
        </div>
    );
}

export default PendingTasks;