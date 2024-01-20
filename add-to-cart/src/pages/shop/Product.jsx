import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, removeCard } = useContext(ShopContext);
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          {" "}
          <b>{productName}</b>{" "}
        </p>
        <p> ${price} </p>
      </div>
      <button className="btn" onClick={() => addToCart(id)}>
        Add To Cart
      </button>
    </div>
  );
};
