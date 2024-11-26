import React, { useState } from "react";
import "./taskcss.css";

function Task({ getData, task, taskformUpdate, onUpdate }) {
  const [Inputresult, setInputresult] = useState(
    taskformUpdate ? task.title : ""
  );
  const [TextArearesult, setTextArearesult] = useState(
    taskformUpdate ? task.taskDesc : ""
  );
  const handleSubmit = (e) => {
    if (!Inputresult || !TextArearesult) {
      Swal.fire({
        icon: "error",
        title: "Bir Hata Oluştu.",
        text: "Title ve Task alanı Boş geçilemez",
      });
      e.preventDefault();
      return;
    }
    e.preventDefault();
    if (taskformUpdate) {
      var updateDeger = {
        id: task.id,
        title: Inputresult,
        taskDesc: TextArearesult,
      };
      onUpdate(updateDeger);
    } else {
      var yeni = {
        title: Inputresult,
        taskDesc: TextArearesult,
      };
      getData(yeni);
      setInputresult("");
      setTextArearesult("");
    }
  };
  return (
    <div className="OutBorder">
      {taskformUpdate ? (
        <div>
          <h3>
            <strong>Lütfen Task Düzenleyiniz. !!!!</strong>
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="OutDiv">
              <label className="label-font">Başlık Düzenleyiniz. </label>
              <input
                type="text"
                placeholder="Başlık Giriniz."
                className="Input-Text"
                value={Inputresult}
                onChange={(e) => {
                  setInputresult(e.target.value);
                }}
              />
            </div>
            <div className="OutDiv">
              <label className="label-font">Task Düzenleyiniz. .</label>
              <textarea
                value={TextArearesult}
                placeholder="Task Açıklaması Giriniz."
                onChange={(e) => {
                  setTextArearesult(e.target.value);
                }}
                rows={5}
                className="Input-Text"
              ></textarea>
            </div>
            <div>
              <button
                style={{ cursor: "pointer", background: "Purple" }}
                className="btn"
              >
                Task Guncelle
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h3>
            <strong>Lütfen Task Ekleyiniz. !!!!</strong>
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="OutDiv">
              <label className="label-font">Başlık</label>
              <input
                type="text"
                placeholder="Başlık Giriniz."
                className="Input-Text"
                value={Inputresult}
                onChange={(e) => {
                  setInputresult(e.target.value);
                }}
              />
            </div>
            <div className="OutDiv">
              <label className="label-font">Task Giriniz.</label>
              <textarea
                value={TextArearesult}
                placeholder="Task Açıklaması Giriniz."
                onChange={(e) => {
                  setTextArearesult(e.target.value);
                }}
                rows={5}
                className="Input-Text"
              ></textarea>
            </div>
            <div>
              <button style={{ cursor: "pointer" }} className="btn">
                Task Ekle
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Task;
