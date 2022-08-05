import React from "react";
import Link from "../../components/Link";
import { Container, Row, Col, Button } from "react-bootstrap";

const Products = () => {
  return (
    <>
      {/* <!-- Products Area --> */}
      <div className="pb-13 pb-md-25">
        <Container>
          <Row>
            <Col lg="12">
              <div className="section-title text-center">
                <h2 className="gr-text-5 heading-color">Explore All Products</h2>
              </div>
            </Col>
          </Row>
          <Row
            className="mt-md-n5"
            data-aos="fade-right"
            data-aos-duration="750"
          >
            <Col xs="6" md="4" lg="4" xl="3" className="mt-12 mt-md-17">
              <div className="product-card gr-product-hover-1">
                <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                  <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                    <img src={"/image/l8/png/product-image-1.png"} alt="" />
                  </div>
                  <div className="card-btn hover-animation-item">
                    <Button className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                      <i>+</i>Add to cart
                    </Button>
                  </div>
                </div>
                <div className="card-text text-center">
                  <div className="gr-text-9 mt-8 line-height-reset mb-2">
                    <span className="text-green">$899</span>{" "}
                    <span className="ms-2 text-linethrough text-color-opacity"> $1,350</span>{" "}
                  </div>
                  <Link to="/#">
                    <h3 className="gr-text-7 heading-color">Safavieh Couture</h3>
                  </Link>
                  <div className="ratings d-flex justify-content-center">
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="4" xl="3" className="mt-12 mt-md-17">
              <div className="product-card gr-product-hover-1">
                <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                  <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                    <img src={"/image/l8/png/product-image-2.png"} alt="" />
                  </div>
                  <div className="card-btn hover-animation-item">
                    <Button className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                      <i>+</i>Add to cart
                    </Button>
                  </div>
                </div>
                <div className="card-text text-center">
                  <div className="gr-text-9 mt-8 line-height-reset mb-2">
                    <span className="text-green">$34</span>{" "}
                  </div>
                  <Link to="/#">
                    <h3 className="gr-text-7 heading-color">Fair Trade Ghana</h3>
                  </Link>
                  <div className="ratings d-flex justify-content-center">
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="4" xl="3" className="mt-12 mt-md-17">
              <div className="product-card gr-product-hover-1">
                <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                  <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                    <img src={"/image/l8/png/product-image-3.png"} alt="" />
                  </div>
                  <div className="card-btn hover-animation-item">
                    <Button className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                      <i>+</i>Add to cart
                    </Button>
                  </div>
                </div>
                <div className="card-text text-center">
                  <div className="gr-text-9 mt-8 line-height-reset mb-2">
                    <span className="text-green">$44.99</span>{" "}
                  </div>
                  <Link to="/#">
                    <h3 className="gr-text-7 heading-color">KingSo Round Table</h3>
                  </Link>
                  <div className="ratings d-flex justify-content-center">
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="4" xl="3" className="mt-12 mt-md-17">
              <div className="product-card gr-product-hover-1">
                <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                  <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                    <img src={"/image/l8/png/product-image-4.png"} alt="" />
                  </div>
                  <div className="card-btn hover-animation-item">
                    <Button className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                      <i>+</i>Add to cart
                    </Button>
                  </div>
                </div>
                <div className="card-text text-center">
                  <div className="gr-text-9 mt-8 line-height-reset mb-2">
                    <span className="text-green">$120</span>{" "}
                    <span className="ms-2 text-linethrough  text-color-opacity"> $350</span>{" "}
                  </div>
                  <Link to="/#">
                    <h3 className="gr-text-7 heading-color">Safavieh Couture</h3>
                  </Link>
                  <div className="ratings d-flex justify-content-center">
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="4" xl="3" className="mt-12 mt-md-17">
              <div className="product-card gr-product-hover-1">
                <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                  <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                    <img src={"/image/l8/png/product-image-5.png"} alt="" />
                  </div>
                  <div className="card-btn hover-animation-item">
                    <Button className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                      <i>+</i>Add to cart
                    </Button>
                  </div>
                </div>
                <div className="card-text text-center">
                  <div className="gr-text-9 mt-8 line-height-reset mb-2">
                    <span className="text-green">$31.49</span>{" "}
                  </div>
                  <Link to="/#">
                    <h3 className="gr-text-7 heading-color">Trade Folding Stool</h3>
                  </Link>
                  <div className="ratings d-flex justify-content-center">
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="4" xl="3" className="mt-12 mt-md-17">
              <div className="product-card gr-product-hover-1">
                <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                  <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                    <img src={"/image/l8/png/product-image-6.png"} alt="" />
                  </div>
                  <div className="card-btn hover-animation-item">
                    <Button className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                      <i>+</i>Add to cart
                    </Button>
                  </div>
                </div>
                <div className="card-text text-center">
                  <div className="gr-text-9 mt-8 line-height-reset mb-2">
                    <span className="text-green">$31.49</span>{" "}
                    <span className="ms-2 text-linethrough  text-color-opacity"> $350</span>{" "}
                  </div>
                  <Link to="/#">
                    <h3 className="gr-text-7 heading-color">Rivet Accent Chair</h3>
                  </Link>
                  <div className="ratings d-flex justify-content-center">
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="4" xl="3" className="mt-12 mt-md-17">
              <div className="product-card gr-product-hover-1">
                <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                  <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                    <img src={"/image/l8/png/product-image-7.png"} alt="" />
                  </div>
                  <div className="card-btn hover-animation-item">
                    <Button className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                      <i>+</i>Add to cart
                    </Button>
                  </div>
                </div>
                <div className="card-text text-center">
                  <div className="gr-text-9 mt-8 line-height-reset mb-2">
                    <span className="text-green">$110</span>{" "}
                    <span className="ms-2 text-linethrough  text-color-opacity"> $350</span>{" "}
                  </div>
                  <Link to="/#">
                    <h3 className="gr-text-7 heading-color">Armen Living Chair </h3>
                  </Link>
                  <div className="ratings d-flex justify-content-center">
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="4" xl="3" className="mt-12 mt-md-17">
              <div className="product-card gr-product-hover-1">
                <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                  <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                    <img src={"/image/l8/png/product-image-8.png"} alt="" />
                  </div>
                  <div className="card-btn hover-animation-item">
                    <Button className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                      <i>+</i>Add to cart
                    </Button>
                  </div>
                </div>
                <div className="card-text text-center">
                  <div className="gr-text-9 mt-8 line-height-reset mb-2">
                    <span className="text-green">$120</span>{" "}
                    <span className="ms-2 text-linethrough  text-color-opacity"> $350</span>{" "}
                  </div>
                  <Link to="/#">
                    <h3 className="gr-text-7 heading-color">Knight Chair</h3>
                  </Link>
                  <div className="ratings d-flex justify-content-center">
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-13 mt-md-19">
            <Link
              to="/#"
              className="btn btn-outline-gray-310 gr-hover-y bg-white text-black"
            >
              Check all products
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Products;
