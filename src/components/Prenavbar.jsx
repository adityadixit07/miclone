import React from "react";
import "../styles/prenavbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Prenavbar = () => {
  return (
    <div className="prenavbar">
      <div>
        <Link to="/mi">
          MI India <span>|</span>
        </Link>
        <Link to="/miapp">
          GET MI store app <span>|</span>
        </Link>
        <Link to="/help">
          Online help <span>|</span>
        </Link>
        <Link to="/store">
          Retail Store <span></span>
        </Link>
      </div>
      <div>
        <Link to="/signIN">Sign in <span>|</span></Link>
        <Link to="/signUp">Sign up<span>|</span></Link>
        <Link to="/cart"><AiOutlineShoppingCart /></Link>
        <Link to="cartitem">Cart(0)</Link>
      </div>
    </div>
  );
};

export default Prenavbar;
