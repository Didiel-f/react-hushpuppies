import React from 'react';

import { connect } from "react-redux";
import { addToCart } from '../../redux/Shopping/shopping-actions';


const ProductCard = ({ item, addToCart, button }) => {
    
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="img-container">
                <img src={`assets/img/${ item.foto }`} className="card-img-top" alt="..." />
            </div>
            <div className= "card-body">
            <div className="thumbnail-container">
                <img className="thumbnail-img" src={`assets/img/${ item.foto }`} alt="zapato" />
                <img className="thumbnail-img" src={`assets/img/${ item.foto }`} alt="zapato" />
                <img className="thumbnail-img" src={`assets/img/${ item.foto }`} alt="zapato" />
            </div>
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">${item.precio}</p>
            {
                (button) 
                    &&
                    (<button 
                        onClick={() => addToCart(item.foto)}
                        className="btn btn-lg"
                    >
                        AGREGAR AL CARRITO
                    </button>)
            }
            </div>
            <hr />
        </div>
    )
};


const mapDispatchToProps = dispatch => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
    }
}
  
export default connect(null, mapDispatchToProps)(ProductCard);