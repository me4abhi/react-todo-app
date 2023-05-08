import "./styles/task_card.css";
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

function TaskCard({ task, index }) {
  return (
    <div className="task-card" key={index}>
      <h3 className="task-description">{task}</h3>
      <p className="task-date">Date & Time</p>
      <div className="task-ops">
        <div className="task-icons">
          <DriveFileRenameOutlineOutlinedIcon fontSize="medium" className="edit-task" />
        </div>
        <div className="task-icons">
          <DoneAllOutlinedIcon fontSize="medium" className="finish-task" />
        </div>
        <div className="task-icons">
          <DeleteForeverOutlinedIcon fontSize="medium" className="remove-task" />
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
