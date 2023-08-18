import React from "react";

const Record = (props) => {
  
  React.useEffect(() => {
    if (props.num === 2) {
      console.log("Oooh Record 2 mounted");
    }
    console.log(`Record ${props.num} mounted`);
    return () => {
      console.log(`Record ${props.num} unmounted`);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        border: "solid 1px black",
        borderRadius: "1rem",
        padding: "5px",
        margin: "5px",
      }}
    >
      <h2>Record</h2>
      <h4>{props.num}</h4>
    </div>
  );
};

export default Record;
