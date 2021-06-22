import React from "react";

import "./footer.css";

export const Footer = () => {
  return (
    <>
      <div className="contact text-dark">
        <h2>@HUSHPUPPIESCO</h2>
        <br />
        <div className="icons-container">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram-square"></i>
        </div>
      </div>

      <footer className="bg-white">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3 col-12">
              <ul className="list-unstyled ">
                <li>
                  <h6 className="text-warning text-dark text-uppercase f-serif fw-bold">
                    Servicio al cliente
                  </h6>
                </li>
                <li>
                  {" "}
                  <a href="#/" className="text-dark text-uppercase f-12">
                    Contáctenos
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#/" className="text-dark text-uppercase f-12">
                    Cambios y devoluciones
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#/" className="text-dark text-uppercase f-12">
                    Políticas de la tienda
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#/" className="text-dark text-uppercase f-12">
                    Políticas de datos
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
              <ul className="list-unstyled ">
                <li>
                  <h6 className="text-warning text-dark text-uppercase f-serif fw-bold">
                    Mi cuenta
                  </h6>
                </li>
                <li>
                  {" "}
                  <a href="#/" className="text-dark text-uppercase f-12">
                    Mis pedidos
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#/" className="text-dark text-uppercase f-12">
                    Mis devoluciones
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
              <ul className="list-unstyled ">
                <li>
                  <h6 className="text-warning text-dark text-uppercase f-serif fw-bold">
                    Recursos
                  </h6>
                </li>
                <li>
                  {" "}
                  <a href="#/" className="text-dark text-uppercase f-12">
                    Tiendas
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#/" className="text-dark text-uppercase f-12">
                    Devoluciones
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-12">
              <ul className="list-unstyled ">
                <li>
                  <h6 className="text-warning text-dark text-uppercase f-serif fw-bold">
                    Newsletter
                  </h6>
                </li>
                <li
                  className="text-dark f-15 mb-3"
                  style={{
                    lineHeight: "1.5",
                  }}
                >
                  {" "}
                  Regístrate para ser el primero en recibir nuestras noticias
                </li>
                <li>
                  <div className="input-group">
                    <div className="right-inner-addon input-container m-2 search-bar">
                      <i className="fas fa-chevron-right"></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="BUSCAR"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-4 border-top">
            <div className="col-lg-3 col-md-6 col-12 my-4 text-center">
              <img src="./assets/footer1.jpg" alt="footer-imgs" />
            </div>
            <div className="col-lg-3 col-md-6 col-12 my-4 text-center">
              <img src="./assets/footer2.jpg" alt="footer-imgs" />
            </div>
            <div className="col-lg-6 d-sm-none d-none d-md-block d-lg-block my-4 text-center">
              <img src="./assets/footer3.jpg" alt="footer-imgs" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
