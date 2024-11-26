import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Task from "./Task";
import TaskList from "./TaskList";

function App() {
  const [taks, settaks] = useState([]);

  const handleData = (data) => {
    const createTaks = [
      ...taks,
      {
        id: Math.round(Math.random() * 9999999),
        title: data.title,
        taskDesc: data.taskDesc,
      },
    ];
    settaks(createTaks);
  };
  const onDeleteApp = (event) => {
    const afterDeleteTask = taks.filter((num) => {
      return num.id !== event;
    });
    settaks(afterDeleteTask);
  };

  return (
    <>
      <div className="App">
        <Task getData={handleData} />
        <h1>Görevler</h1>
        <TaskList onDeleteList={onDeleteApp} task={taks} />
      </div>
    </>
  );
}

export default App;
