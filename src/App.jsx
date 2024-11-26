import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Task from "./Task";

function App() {
  const [result, setresult] = useState([]);

  const handleData = (data) => {
    setresult([...result, data]);
    console.log(result);
  };

  return (
    <>
      <div className="App">
        <Task getData={handleData} />
        <h1>Görevler</h1>
        {result.map((deger, index) => {
          return (
            <p key={index}>
              title : {deger.title} Area Değeri : {deger.taskDesc}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default App;
