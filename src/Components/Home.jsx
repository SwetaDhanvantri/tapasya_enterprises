
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { Tabs } from "@mui/material";
import MyTabs from "./MyTabs";
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <Carousel />
      {/* <!-- End Intro Section --> */}

      {/* <!-- Header End --> */}
{/* type start */}
<div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="mb-3" data-aos="fade-up">
              uPVC Windows and Doors For Every Property Type
            </h1>
          </div>
          <MyTabs/>
        </div>
      </div>

      {/* <!-- Category Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="mb-3" data-aos="fade-up">
              uPVC Windows and Doors For Every Property Type
            </h1>
          </div>
          <div className="row g-4" data-aos="fade-up">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href=""
              >
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <img
                      className="img-fluid"
                      src="/assets/img/icon-apartment.png"
                      alt="Icon"
                    />
                  </div>
                  <h6>Apartment</h6>
                </div>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href=""
              >
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <img
                      className="img-fluid"
                      src="/assets/img/icon-villa.png"
                      alt="Icon"
                    />
                  </div>
                  <h6>Villa</h6>
                </div>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href=""
              >
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <img
                      className="img-fluid"
                      src="/assets/img/icon-house.png"
                      alt="Icon"
                    />
                  </div>
                  <h6>Home</h6>
                </div>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href=""
              >
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <img
                      className="img-fluid"
                      src="/assets/img/icon-housing.png"
                      alt="Icon"
                    />
                  </div>
                  <h6>Office</h6>
                </div>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href=""
              >
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <img
                      className="img-fluid"
                      src="/assets/img/icon-building.png"
                      alt="Icon"
                    />
                  </div>
                  <h6>Building</h6>
                </div>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href=""
              >
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <img
                      className="img-fluid"
                      src="/assets/img/icon-neighborhood.png"
                      alt="Icon"
                    />
                  </div>
                  <h6>Townhouse</h6>
                </div>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href=""
              >
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <img
                      className="img-fluid"
                      src="/assets/img/icon-condominium.png"
                      alt="Icon"
                    />
                  </div>
                  <h6>Shop</h6>
                </div>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href=""
              >
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <img
                      className="img-fluid"
                      src="/assets/img/icon-luxury.png"
                      alt="Icon"
                    />
                  </div>
                  <h6>Garage</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Category End --> */}
      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid w-100 " src="/assets/img/headimg1.png" data-aos="fade-up" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4" data-aos="fade-up">
                #1 Place To Find The Perfect Windows and Doors
              </h1>
              <p className="mb-4" data-aos="fade-up">
                There is a door for every view. All type of uPVC windows and
                gate is available with best deals
              </p>
              <p data-aos="fade-up">
                <i className="fa fa-check text-primary me-3"></i>Affordable
                Prices{" "}
              </p>
              <p data-aos="fade-up">
                <i className="fa fa-check text-primary me-3"></i>20 years
                warrenty{" "}
              </p>
              <p data-aos="fade-up">
                <i className="fa fa-check text-primary me-3"></i>Noise Reduction
              </p>
              <p data-aos="fade-up">
                <i className="fa fa-check text-primary me-3"></i>Durability
              </p>
              <Link className="btn btn-primary py-3 px-5 mt-3" to="/contact" data-aos="fade-up">
                Get Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
      {/* <!-- Property List Start --> */}
      {/* <div className="container-xxl py-5 products">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="text-start mx-auto mb-5 wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <h1 className="mb-3" data-aos="fade-up">Windows and Doors</h1>
                <p data-aos="fade-up">
                  Have a look on our variety of uPVC gates and windows for every type of property. We provides you low maintenance and long life uPVC windows and gates.
                </p>
              </div>
            </div>
          </div>
          <div className="tab-content"  data-aos="fade-up">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4 ">
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp "
                  data-wow-delay="0.1s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <img
                          className="img-fluid"
                          src="/assets/img/products/window1.jpg"
                          alt=""  data-aos="fade-up"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <img
                          className="img-fluid"
                          src="/assets/img/products/window 2.jpg"
                          alt=""  data-aos="fade-up"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <img
                          className="img-fluid"
                          src="/assets/img/products/window3.jpg"
                          alt=""  data-aos="fade-up"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <img
                          className="img-fluid"
                          src="/assets/img/products/window4.jpg"
                          alt=""  data-aos="fade-up"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <img
                          className="img-fluid"
                          src="/assets/img/products/window7.jpg"
                          alt=""  data-aos="fade-up"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <img
                          className="img-fluid"
                          src="/assets/img/products/window6.jpg"
                          alt=""  data-aos="fade-up"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/* <div
                  className="col-12 text-center wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <a className="btn btn-primary py-3 px-5" href="">
                    Browse More Property
                  </a>
                </div> 
              </div>
            </div>
        
          </div>
        </div>
      </div> */}
      {/* <!-- Property List End --> */}

      {/* <!-- Call to Action Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="bg-light rounded p-3">
            <div className="bg-white rounded p-4">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                  <img
                    className="img-fluid rounded w-100"
                    src="/assets/img/call-to-action.jpg"
                    alt=""  data-aos="fade-up"
                  />
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="mb-4">
                    <h1 className="mb-3"  data-aos="fade-up">Contact With Our Certified Team</h1>
                    <p  data-aos="fade-up">
                    You can contact our certified team at any time without any second thought. We'll connect you as soon as possible.
                    </p>
                  </div>
                  <a
                    href="tel:+91 8929313213"
                    className="btn btn-primary py-3 px-4 me-2"  data-aos="fade-up"
                  >
                    <i className="fa fa-phone-alt me-2"></i>Make A Call
                  </a>
                  <a href="" className="btn btn-dark py-3 px-4"  data-aos="fade-up">
                    <i className="fa fa-calendar-alt me-2"></i>Get Appoinment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Call to Action End --> */}

     

      {/* <!-- Testimonial Start --> */}
      <div className="d-flex align-items-center  bg-white py-4">
      <div className="slider-test container">
      <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="mb-3"  data-aos="fade-up">Our Clients Say!</h1>
            
          </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
   
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <div className="testimonial-item bg-light rounded p-3">
              <div className="bg-white border rounded p-4">
                <p>
                Best service by Tapasya Enterprises. Love their work. Thank you Tapasya Enterprises
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded"
                    src="/assets/img/testimonial-1.jpg"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Aayushi Aggarwal</h6>
                    <small>Housewife</small>
                  </div>
                </div>
              </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="testimonial-item bg-light rounded p-3">
              <div className="bg-white border rounded p-4">
                <p>
                Very Good service by Tapasya Enterprises. Timely Installed.
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded"
                    src="/assets/img/testimonial-2.jpg"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Pawan Gaur</h6>
                    <small>Lawyer</small>
                  </div>
                </div>
              </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="testimonial-item bg-light rounded p-3">
              <div className="bg-white border rounded p-4">
                <p>
                Tapasya Enterprises provides a very good service. Simply ossumm.
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded"
                    src="/assets/img/testimonial-3.jpg"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Tinku Bhardwaj</h6>
                    <small>Business man</small>
                  </div>
                </div>
              </div>
            </div></SwiperSlide>
       
      </Swiper>
      </div>
      </div>
    
      
      
      {/* <!-- Testimonial End --> */}
    </>
  );
}
