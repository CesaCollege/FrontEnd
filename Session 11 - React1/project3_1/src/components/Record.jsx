import React from "react";

const Record = (props) => {
    console.log(props)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems:"center",
        border:"solid 1px black",
        borderRadius: "1rem",
        padding:"5px",
        margin:"5px"
      }}
    >
      <h2>Record</h2>
      <h4>{props.num}</h4>
    </div>
  );
};

export default Record;
