import React, { useState } from "react";
import "./TaskItemCss.css";
import Task from "./Task";
function TaskItem({ data, onDeleteItem, OnUpdateItem }) {
  const [edit, setEdit] = useState(false);
  const handleDeleteClick = () => {
    onDeleteItem(data.id);
  };
  const handleEditClick = () => {
    setEdit(!edit);
  };
  const handleUpdateClick = (updateData) => {
    setEdit(false);
    OnUpdateItem(updateData);
  };

  return (
    <div className="TaskBody">
      {edit ? (
        <Task onUpdate={handleUpdateClick} task={data} taskformUpdate={true} />
      ) : (
        <div>
          <div>
            <label>
              <strong> Göreviniz :</strong>{" "}
            </label>
            <p>{data.title}</p>
          </div>
          <div>
            <label>
              <strong> Yapılacaklar :</strong>{" "}
            </label>
            <p>{data.taskDesc}</p>
          </div>
          <div>
            <button
              onClick={handleDeleteClick}
              className="btn-Task"
              style={{ border: "1px Solid red", background: "red" }}
            >
              Sil
            </button>
            <button
              onClick={handleEditClick}
              type="submit"
              className="btn-Task"
              style={{ border: "1px Solid Blue", background: "Blue" }}
            >
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
