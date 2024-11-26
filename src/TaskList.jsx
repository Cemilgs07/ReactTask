import React from "react";
import TaskItem from "./TaskItem.jsx";
import "./App.css";

function TaskList({ task }) {
  return (
    <div className="TaskListItem">
      {task.map((data, index) => {
        return <TaskItem key={index} data={data} />;
      })}
    </div>
  );
}

export default TaskList;
