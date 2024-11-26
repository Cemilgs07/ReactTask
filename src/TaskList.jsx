import React from "react";
import TaskItem from "./TaskItem.jsx";
import "./App.css";

function TaskList({ task, onDeleteList }) {
  const onDeleteListesi = (event) => {
    onDeleteList(event);
  };

  return (
    <div className="TaskListItem">
      {task.map((data, index) => {
        return (
          <TaskItem onDeleteItem={onDeleteListesi} key={index} data={data} />
        );
      })}
    </div>
  );
}

export default TaskList;
