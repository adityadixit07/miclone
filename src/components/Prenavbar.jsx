import React from "react";
import "../styles/prenavbar.css";
import { AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Prenavbar = () => {
  return (
    <div className="prenavbar">
      <div>
        <Link to="/mi">
        </Link>
        <Link to="/miapp">
          GET MI store app 
        </Link>
        <Link to="/help">
          Online help 
        </Link>
        <Link to="/store">
          Retail Store
        </Link>
      </div>
      <div className="rightbox">
        <Link to="/signIN">Sign in </Link>
        <Link to="/signUp">Sign up</Link>
        <Link to="/cart"><AiOutlineShoppingCart /></Link>
        <Link to="cartitem">Cart(0)</Link>
      </div>
    </div>
  );
};

export default Prenavbar;
