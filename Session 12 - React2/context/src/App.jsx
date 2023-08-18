import React from "react";
import Cart from "./components/Cart";
import ErfanContext from "./Context/Context";


const App = () => {
  return (
    <ErfanContext>
      <div>
        <Cart  />
      </div>
    </ErfanContext>
  );
};
export default App;
