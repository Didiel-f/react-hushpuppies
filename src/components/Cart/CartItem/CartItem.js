import React, { useState } from "react";

import {connect} from 'react-redux';
import Swal from "sweetalert2";
import { addToCart, adjustQty, removeFromCart } from "../../../redux/Shopping/shopping-actions";

import './CartItem.css'

const CartItem = ({ item, button, adjustQty, removeFromCart, addToCart }) => {
  const [count, setCount] = useState(item.qty);

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1)
      adjustQty(item.foto, -1 + count);
    };
  };

  const incrementCount = () => {
    setCount(count +1);
    adjustQty(item.foto, 1 + count);
  };



  const startRemovingFromCart = (itemID) => {

    Swal.fire({
        title: 'Confirmar',
        text: `Se eliminará del carrito el producto "${item.nombre}"`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            removeFromCart(itemID)
          Swal.fire(
            'Eliminado!',
            `"${item.nombre}" fue eliminado del carrito de compras.`,
            'success'
          )
        }
      })

};
  
  

  return (

    <div className="card mb-4 shadow-sm">
      <div className="row">
        <div className="col-lg-7 img-container">
            <img src={`assets/img/${ item.foto }`} className="card-img-top" alt="item" />
        </div>

        <div className="col-lg-5 card-h">
          <div className= "card-body">
            <h5 className="card-title fs-4">{item.nombre}</h5>
            <p className="card-text">${item.precio}</p>
            <div className="border qty-buttons">
              <a href="#/" className="btn btn-primary btn-sm p-2 h-btn" onClick={decrementCount}>-</a>
              <input
                className="h-input"
                // type="number"
                name="clicks"
                value={count}
                onChange={ () => {
                  console.log()
                }}
              />
              <a href="#/" className="btn btn-primary btn-sm p-2 h-btn" onClick={incrementCount}>+</a>
            </div>
            <a
              className="btn btn-outline-danger delete-btn"
              href="#/"
              onClick={() => startRemovingFromCart(item.foto)}
            >
              <i className="bi bi-trash"></i>
            </a>
          </div>
          
        </div>

      </div>
      
    </div>
  
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
