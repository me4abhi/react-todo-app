import "./App.css";
import FinishedTasks from "./pages/FinishedTasks";
import Header from "./components/Header";
import InputTask from "./components/InputTask";
import PendingTasks from "./components/PendingTasks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <InputTask />
      <PendingTasks />
      <Footer />
      {/* <FinishedTasks /> */}
    </div>
  );
}

export default App;
