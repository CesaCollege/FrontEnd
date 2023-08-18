import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Record from "./components/Record";
const App = () => {
  var num = 0;
  const [count, setCount] = React.useState(0);
  const [record, setRecord] = React.useState([]);
  const increase = () => {
    setCount((x) => x + 1);
    num++;
    console.log(count);
  };


  const recordFunc = () => {
    setRecord(x=>[...x, count])
  };

  const clearFunc = () => {
    setRecord([])
  }

  const style = {
    color: "#fff",
    backgroundColor: "#f15e5e",
    border: "none",
    borderRadius: "1rem",
    width: "5rem",
    height: "2rem",
    margin: "1rem",
  };

  const cont = {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <div className="container">
        <h1>Recorder</h1>
        <h1>{count}</h1>
        <button style={style} onClick={increase}>
          Count
        </button>
        <button style={style} onClick={recordFunc}>Record</button>
        <button style={style} onClick={clearFunc}>Clear</button>
        <div style={cont}>
          {record.map((item,index) => {
            return <Record key={index} num={item} />;
          })}
        </div>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
