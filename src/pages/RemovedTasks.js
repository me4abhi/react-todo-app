import Footer from "../components/Footer";
import Header from "../components/Header";
import "../components/styles/tasks_grid.css";
import TaskCard from "../components/TaskCard";

function RemovedTasks() {
  return (
    <>
      <Header />
      <div id="tasks-grid">
        <TaskCard />
      </div>
      <Footer />
    </>
  );
}

export default RemovedTasks;
