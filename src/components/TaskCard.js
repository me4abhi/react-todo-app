import "./styles/task_card.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DoneAllIcon from '@mui/icons-material/DoneAll';

function TaskCard() {
  return (
    <div className="task-card">
      <h3 className="task-description">hello you beautiful thing</h3>
      <p className="task-date">Date & Time</p>
      <button className="mark-done">
        Mark Done
        <TaskAltIcon fontSize="medium" className="check-icon" />
      </button>
    </div>
  );
}

export default TaskCard;
