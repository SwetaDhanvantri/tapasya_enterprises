import React, { useEffect } from 'react'
import Breadcrump from './Breadcrump'
import { Link } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";
export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
<Breadcrump title={"About"}/>
      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid w-100" data-aos="fade-up"   src="/assets/img/headimg1.png"/>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4"  data-aos="fade-up">
                #1 Place To Find The Perfect Windows and Doors
              </h1>
              <p className="mb-4"  data-aos="fade-up">
                There is a door for every view. All type of uPVC windows and
                gate is available with best deals
              </p>
              <p  data-aos="fade-up">
                <i className="fa fa-check text-primary me-3"></i>Affordable
                Prices{" "}
              </p>
              <p  data-aos="fade-up">
                <i className="fa fa-check text-primary me-3"></i>20 years
                warrenty{" "}
              </p>
              <p  data-aos="fade-up">
                <i className="fa fa-check text-primary me-3"></i>Noise Reduction
              </p>
              <p  data-aos="fade-up">
                <i className="fa fa-check text-primary me-3"></i>Durability
              </p>
              <Link className="btn btn-primary py-3 px-5 mt-3" to="/contact"  data-aos="fade-up">
                Get Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
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
                    alt=""
                  />
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="mb-4">
                    <h1 className="mb-3"  data-aos="fade-up">Contact With Our Certified Team</h1>
                    <p  data-aos="fade-up">
                    You can contact our certified team at any time without any second thought. We'll connect you as soon as possible.
                    </p>
                  </div>
                  
                  <a href="tel:+91 8929313213" className="btn btn-primary py-3 px-4 me-2"  data-aos="fade-up">
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

      {/* <!-- Team Start --> */}
      {/* <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="mb-3">Team Members</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item rounded overflow-hidden">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="/assets/img/team-1.jpg"
                    alt=""
                  />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item rounded overflow-hidden">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="/assets/img/team-2.jpg"
                    alt=""
                  />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item rounded overflow-hidden">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="/assets/img/team-3.jpg"
                    alt=""
                  />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item rounded overflow-hidden">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="/assets/img/team-4.jpg"
                    alt=""
                  />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Team End --> */}

    </>
  )
}
