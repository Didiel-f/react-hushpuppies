import React, { useState } from "react";

import {connect} from 'react-redux';
import { addToCart, adjustQty, removeFromCart } from "../../../redux/Shopping/shopping-actions";

import './CartItem.css'

const CartItem = ({ item, button, adjustQty, removeFromCart, addToCart }) => {
  const [input, setInput] = useState(item.qty);
  
  const onChangeHandler = (e) => {
    setInput(e);
    adjustQty(item.foto, e);
  };

//Logica del input QTY
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1)
      onChangeHandler(count)
    };
  };

  const incrementCount = () => {
    setCount(count + 1);
    onChangeHandler(count)
  };
  

  return (

    
    
    <div className="card mb-4 shadow-sm">
      <div className="row">
        <div className="col-lg-7 img-container">
            <img src={`assets/img/${ item.foto }`} className="card-img-top" alt="..." />
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
                value={input}
                onChange={event => {
                  setCount(event.target.value);
                }}
              />
              <a href="#/" className="btn btn-primary btn-sm p-2 h-btn" onClick={incrementCount}>+</a>
            </div>
            <a
              className="btn btn-outline-danger delete-btn"
              href="#/"
              onClick={() => removeFromCart(item.foto)}
            >
              <i className="bi bi-trash"></i>
            </a>
          </div>
          
        </div>

      </div>
      
    </div>



    
    
    
    

    // <div className="card">
    //   <img
    //     className=""
    //     src={`assets/img/${ item.foto }`}
    //     alt={item.title}
    //   />
    //   <div className="">
    //     <p className="">{item.nombre}</p>
    //     <p className="">$ {item.precio}</p>
    //   </div>
    //   <div className="">
    //     <div className="">
    //       <label htmlFor="qty">Qty</label>
    //       <input
    //         min="1"
    //         type="number"
    //         id="qty"
    //         name="qty"
    //         value={input}
    //         onChange={onChangeHandler}
    //       />
    //     </div>
    //     <button
    //       onClick={() => removeFromCart(item.foto)}
    //       className=""
    //     >
    //       <img
    //         src="https://image.flaticon.com/icons/svg/709/709519.svg"
    //         alt=""
    //       />
    //     </button>
    //   </div>
    // </div>
    
    
  
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
