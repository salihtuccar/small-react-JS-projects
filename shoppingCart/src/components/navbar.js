import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/navbar.css";

export default function navbar({ setShow, size }) {
  return (
    <nav>
      <div className="nav_box">
        <span className="my-shop" onClick={() => setShow(true)}>
          My Shopping
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <FaShoppingCart />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
}
