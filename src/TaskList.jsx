import React from "react";
import TaskItem from "./TaskItem.jsx";
import "./App.css";

function TaskList({ task, onDeleteList, OnUpdateItemTaskList }) {
  const onDeleteListesi = (event) => {
    onDeleteList(event);
  };
  const OnUpdateItemTest = (dataVerisi) => {
    OnUpdateItemTaskList(dataVerisi);
  };

  return (
    <div className="TaskListItem">
      {task.map((data, index) => {
        return (
          <TaskItem
            OnUpdateItem={OnUpdateItemTest}
            onDeleteItem={onDeleteListesi}
            key={index}
            data={data}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
