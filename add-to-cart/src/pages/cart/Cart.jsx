import React, { useContext } from "react";
import { PRODUCTS } from "../../product";
import { ShopContext } from "../../context/shopContext";
import { CartItem } from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>continue shoping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Cart is Empty.</h1>
      )}
    </div>
  );
};
