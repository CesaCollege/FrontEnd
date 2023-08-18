import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css"
import Record from "./components/Record"
const App = () => {

  const style ={
    color:"#fff",
    backgroundColor: "#f15e5e",
    border:"none",
    borderRadius: "1rem",
    width:"5rem",
    height:"2rem",
    margin:"1rem"
  }

  const cont ={
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems:"center",
  }
  return (
    <>
      <div className="container">
        <h1>Recorder</h1>
        <h1>1</h1>
        <button style={style} >Count</button>
        <button style={style} >Record</button>
        <div style={cont}>
          <Record num={1}/>
          <Record num={2}/>
          <Record num={3}/>
        </div>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
