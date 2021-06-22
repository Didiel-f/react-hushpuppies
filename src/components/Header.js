import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


import './headers.css';

const Header = ({cart}) => {


    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
        count += item.qty;
        });

        setCartCount(count);
    }, [cart, cartCount]);
    
    return (
        <>
            <main>

                    <div className="hot-sale">HOT SALE -30% EN SANDALIAS</div>
                    <div className="menu-top">
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">DIRECTORIO DE TIENDAS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">SERVICIO AL CLIENTE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">MI CUENTA</a>
                            </li>
                        </ul>
                    </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img className="logo d-sm-none d-none d-md-block d-lg-block" src="./assets/img/logo-2.png" alt="logo" />
                        </div>

                        <div className="col-6 right-col">
                            <div className="right-inner-addon input-container m-2 search-bar no-display-small">
                                <i className="fas fa-chevron-right"></i>
                                <input type="text"
                                    className="form-control" 
                                    placeholder="BUSCAR" 
                                />
                            </div>
                            <div className="float-right d-sm-none d-none d-md-none d-lg-block" >
                                <h6>ENVÍO GRATIS PARA PEDIDOS SUPERIORES A $300.000</h6>
                            </div>
                        </div>

                    </div>

                </div>
                
                <nav className="pt-2 border-bottom navbar navbar-expand-lg navbar-light nav-responsive">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img className="logo d-sm-block d-block d-md-none d-lg-none" src="./assets/img/logo-2.png" alt="logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link" href="/" aria-current="page">HOMBRE</a>
                                <a className="nav-link" href="/" >MUJER</a>
                                <a className="nav-link" href="/" >BLOG</a>
                                <a className="nav-link" href="/" >HISTORIA</a>
                                <a className="nav-link" href="/" >TIENDAS</a>
                                <Link className="btn btn-a d-sm-block d-block d-md-block d-lg-none" to="/cart">
                                    <div>
                                        <h6 className="text-nowrap">
                                            <i className="fas fa-shopping-bag no-display-small me-2"></i>
                                            <span className="mt-3 text-serif fw-bold fs-17">CARRITO {cartCount}</span>
                                        </h6>
                                    </div>
                                </Link>
                                <input type="text"
                                    className="form-control no-display-large" 
                                    placeholder="BUSCAR" 
                                />
                            </div>
                        </div>
                        <Link className="btn btn-a d-sm-none d-none d-md-none d-lg-block" to="/cart">
                            <div>
                                <h6 className="text-nowrap">
                                    <i className="fas fa-shopping-bag no-display-small me-2"></i>
                                    <span className="mt-3 text-serif fw-bold fs-17">CARRITO {cartCount}</span>
                                </h6>
                            </div>
                        </Link>
                    </div>
                </nav>
                
                <div className="container p-0 my-4">
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="me-lg-auto ">
                            <ul className="breadcrumb breadcrumb-links breadcrumb-dark bg-white pl-1 history">
                                <li className="px-lg-2 p-0"><a href="/" className="nav-link link-dark px-lg-2">HUSHPUPIESCO</a></li>
                                <li className="px-lg-2 p-0"><a href="/" className="nav-link link-dark px-lg-2">CALZADOS</a></li>
                                <li className="px-lg-2 p-0"><a href="/" className="nav-link link-dark px-lg-2">ZAPATILLAS HOMBRE PELIKAN</a></li>
                            </ul>
                        </div>
                    
                    </div>
                </div>
            </main>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
  
  export default connect(mapStateToProps)(Header);