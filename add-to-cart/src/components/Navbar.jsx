import { useContext } from "react";
import "./Navbar.css";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

function Navbar() {
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <>
      <nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>Shop</h2>
        </Link>

        <Link to="/cart">
          <span className="icon">
            <div className="cart-count">{getTotalCartItems()}</div>
            <FaCartShopping />
          </span>
        </Link>
      </nav>
    </>
  );
}
export default Navbar;
