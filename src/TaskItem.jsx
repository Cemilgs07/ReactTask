import React from "react";
import "./TaskItemCss.css";
function TaskItem({ data }) {
  console.log(data);
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
          className="btn-Task"
          style={{ border: "1px Solid red", background: "red" }}
        >
          Sil
        </button>
        <button
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
