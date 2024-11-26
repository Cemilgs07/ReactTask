import React, { useState } from "react";
import "./taskcss.css";

function Task({ getData }) {
  const [Inputresult, setInputresult] = useState("");
  const [TextArearesult, setTextArearesult] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    var yeni = {
      title: Inputresult,
      taskDesc: TextArearesult,
    };
    getData(yeni);
    setInputresult("");
    setTextArearesult("");
  };
  return (
    <div className="OutBorder">
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
  );
}

export default Task;
