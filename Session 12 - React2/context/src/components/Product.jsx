import React from "react";
import { MyContext } from "../Context/Context";
const Product = (props) =>{
    const value = React.useContext(MyContext);
    console.log("🚀 ~ file: Product.jsx:5 ~ Product ~ value:", value)
    return(
        <div>
            <h1>Product {props.children}</h1>
            <h2>{value.name}</h2>
        </div>
    )
}
export default Product;