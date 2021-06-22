import React from 'react';
import ImageGallery from 'react-image-gallery';

import './product.css';
import "react-image-gallery/styles/css/image-gallery.css";

import { connect } from 'react-redux';
import { addToCart } from '../../redux/Shopping/shopping-actions';

const Product = ({ addToCart }) => {


    const images = [
      {
        original: 'https://home.ripley.cl/store/Attachment/WOP/D311/2000375058475/2000375058475-1.jpg',
        thumbnail: 'https://home.ripley.cl/store/Attachment/WOP/D311/2000375058475/2000375058475-1.jpg',
      },
      {
        original: 'https://home.ripley.cl/store/Attachment/WOP/D311/2000375058475/2000375058475-2.jpg',
        thumbnail: 'https://home.ripley.cl/store/Attachment/WOP/D311/2000375058475/2000375058475-2.jpg',
      },
      {
        original: 'https://home.ripley.cl/store/Attachment/WOP/D311/2000375058475/2000375058475-4.jpg',
        thumbnail: 'https://home.ripley.cl/store/Attachment/WOP/D311/2000375058475/2000375058475-4.jpg',
      },
      {
        original: 'https://home.ripley.cl/store/Attachment/WOP/D311/2000375058475/2000375058475-3.jpg',
        thumbnail: 'https://home.ripley.cl/store/Attachment/WOP/D311/2000375058475/2000375058475-3.jpg',
      },
      {
        original: 'https://home.ripley.cl/store/Attachment/WOP/D311/2000375058475/2000375058475_2.jpg',
        thumbnail: 'https://home.ripley.cl/store/Attachment/WOP/D311/2000375058475/2000375058475_2.jpg',
      },
    ];

    const sizes = [ 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5 ];
    
    return (
        <>
            <div className="container container-gallery">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-7">
                        <ImageGallery items={images} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-5">
                        <div className="col-right-product">
                            <h1>ZAPATILLA HOMBRE PELIKAN</h1>
                            <h4>$00.00</h4>
                            <br />
                            <span>Cod. de producto zap-005</span>

                            <h6 className="color">COLOR</h6>
                            <img src="https://home.ripley.cl/store/Attachment/WOP/D311/2000375058475/2000375058475-1.jpg" alt="color" />

                            <h6 className="size">TALLA</h6>
                            <div className="uele w-100">
                                {
                                  sizes.map(size => ( <button className="text-dark btn ms-0 me-3 mb-3" key={size}>{size}</button> ))
                                }
                            </div>

                            
                            

                            <b>GUÍA DE TALLAS</b>
                            <br />

                            <button 
                                onClick={ () => addToCart("1.jpg") }
                                className="btn btn-primary btn-lg"
                            >
                                AÑADIR AL CARRITO
                            </button>
                            <i className="bi bi-heart-fill"></i>
                        </div>
                    </div>
                </div>

                <div className="product-details">
                    <h3>DETALLES DEL PRODUCTO</h3>
                    <hr />
                    <p>
                        Sed ipsum velit, mollis vel nunc a, sodales venenatis nisl. Integer a nisi id elit elementum lobortis at eget neque. Aliquam a aliquet arcu. Fusce viverra purus vel turpis malesuada, quis rhoncus erat blandit. Sed convallis urna vehicula, tincidunt mi at, lobortis felis. Nullam vel maximus diam. Vivamus ac suscipit enim, mattis tempus quam. Integer non neque erat. Aliquam erat volutpat. Duis vel leo lorem. Sed non ornare quam, in porttitor arcu. Sed ipsum velit, mollis vel nunc a, sodales venenatis nisl. Integer a nisi id elit elementum lobortis at eget neque,cursus commodo sem. Aenean id lorem dolor. Donec maximus tincidunt est, in placerat ante bibendum et.
                    </p>

                    <h3 className="tech">TECNOLOGÍAS</h3>
                    <hr />
                    <p>
                        Sed ipsum velit, mollis vel nunc a, sodales venenatis nisl. Integer a nisi id elit elementum lobortis at eget neque. Aliquam a aliquet arcu. Fusce viverra purus vel turpis malesuada, quis rhoncus erat blandit. Sed convallis urna vehicula, tincidunt mi at, lobortis felis. Nullam vel maximus diam. Vivamus ac suscipit enim, mattis tempus quam integer. 
                    </p>
                </div>

                <div className="slider-1">
                    <h3>COMPLETA TU LOOK</h3>
                </div>
                
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
    //   loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
  }

export default connect(null, mapDispatchToProps)(Product);