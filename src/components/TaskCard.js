import "./styles/task_card.css";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

function TaskCard({ toggleComplete, id, task, date, completed }) {
  return (
    <div
      className={completed ? "task-card completed-task" : "task-card"}
      key={id}
    >
      <h3 className="task-description">{task}</h3>
      <p className="task-date">~ {date}</p>
      <div className="task-ops">
        {!completed && (
          <div className="task-icons">
            <DriveFileRenameOutlineOutlinedIcon
              fontSize="medium"
              className="edit-task"
            />
          </div>
        )}
        <div className="task-icons" onClick={() => toggleComplete(id)}>
          {completed ? (
            <UndoOutlinedIcon fontSize="medium" className="undo-finish" />
          ) : (
            <DoneAllOutlinedIcon fontSize="medium" className="finish-task" />
          )}
        </div>
        <div className="task-icons">
            <DeleteForeverOutlinedIcon
              fontSize="medium"
              className="remove-task"
            />
          </div>
      </div>
    </div>
  );
}

export default TaskCard;
