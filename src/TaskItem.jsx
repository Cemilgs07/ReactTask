import React from "react";
import "./TaskItemCss.css";
function TaskItem({ data, onDeleteItem }) {
  const handleDeleteClick = () => {
    onDeleteItem(data.id);
  };
  return (
    <div className="TaskBody">
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
          onClick={handleDeleteClick}
          type="submit"
          className="btn-Task"
          style={{ border: "1px Solid Blue", background: "Blue" }}
        >
          Güncelle
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
