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
  const UpdateData = (updateDataApp) => {
    // console.log(updateDataApp + " Gelen Data");

    const updateTask = taks.map((num2) => {
      if (updateDataApp.id === num2.id) {
        return (
          // console.log(taks + " bütün Data"),
          {
            id: updateDataApp.id,
            title: updateDataApp.title,
            taskDesc: updateDataApp.taskDesc,
          }
        );
      }
      return num2;
    });
    settaks(updateTask);
    // console.log(taks +"Merhba");
  };

  return (
    <>
      <div className="App">
        <Task getData={handleData} />
        <h1>Görevler</h1>
        <TaskList
          OnUpdateItemTaskList={UpdateData}
          onDeleteList={onDeleteApp}
          task={taks}
        />
      </div>
    </>
  );
}

export default App;
