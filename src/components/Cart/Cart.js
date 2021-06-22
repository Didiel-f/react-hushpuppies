import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

import Header from "../Header";


const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  
  

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.precio;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (



    <>
    <Header />
    
    
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          {cart.map((item) => (
            <CartItem key={item.foto} item={item} button={true} addToCart/>
            ))}
        </div>
        
        <div className="col-md-5">
          <div className="card p-4 shadow-sm">
            <h4 className="text-center fw-bold">Resumen de compra</h4>
            <Link to="/">
              <button className="btn btn-primary w-100 mb-5">
                Ir a inicio
              </button>
            </Link>
            <div className="text-wrap">
              <span className="ms-5 me-5 fw-bold"> ({totalItems} productos)</span>
              <span className="ms-5 fw-bold">TOTAL: $ {totalPrice}</span>
              <hr />
            </div>
            <button className="btn btn-success rounded-0">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>

    </>

  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
