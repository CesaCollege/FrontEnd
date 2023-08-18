import React from "react";
export const MyContext = React.createContext();

const ErfanContext = (props) => {
    
  const [app, setApp] = React.useState({
    name: "app1",
  });
  return <MyContext.Provider value={app}>{props.children}</MyContext.Provider>;
};
export default ErfanContext;