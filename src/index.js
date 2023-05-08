import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RemovedTasks from "./pages/RemovedTasks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // In React.StrictMode, each function is made to run twice in development mode. On state updation, React will render twice if what we're rendering is affected by that state.
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/removed-tasks" element={<RemovedTasks />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
