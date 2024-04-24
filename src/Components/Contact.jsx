import React, { useEffect } from 'react'
import Breadcrump from './Breadcrump'
import Aos from "aos";
import "aos/dist/aos.css";
export default function Contact() {
    useEffect(() => {
        Aos.init({ duration: 2000, once: true });
      }, []);
    
  return (
    <>
<Breadcrump title={"Contact"}/>
{/* <!-- Contact Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp"  style={{maxWidth: "600px"}}>
                    <h1 className="mb-3"  data-aos="fade-up" >Contact Us</h1>
                    <p  data-aos="fade-up" >    You can contact our certified team at any time without any second thought. We'll connect you as soon as possible.</p>
                </div>
                <div className="row g-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <div className="col-md-6 col-lg-4 wow fadeIn"   data-aos="fade-up" >
                                <div className="bg-light rounded p-3">
                                    <div className="d-flex align-items-center bg-white rounded p-3 " style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                                        <div className="icon me-3 border-round" style={{width: "45px", height: "45px"}}>
                                            <i className="fa fa-map-marker-alt text-primary"></i>
                                        </div>
                                        <span >Plot No- 20,21, Gali No- 03(W) Sarurpur Industrial Area, Faridabad, 121004</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn"   data-aos="fade-up" >
                                <div className="bg-light rounded p-3">
                                    <div className="d-flex align-items-center bg-white rounded p-3 " style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                                        <div className="icon me-3 border-round" style={{width: "45px", height: "45px"}}>
                                            <i className="fa fa-envelope-open text-primary"></i>
                                        </div>
                                        <span>tapasyaenterprises1304@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-aos="fade-up" >
                                <div className="bg-light rounded p-3">
                                    <div className="d-flex align-items-center bg-white rounded p-3" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                                        <div className="icon me-3  border-round" style={{width: "45px", height: "45px"}}>
                                            <i className="fa fa-phone-alt text-primary"></i>
                                        </div>
                                        <span>+91 8929313213</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6"   >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2482.7777935451286!2d77.26689677837444!3d28.353466800716024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDIxJzEzLjYiTiA3N8KwMTYnMDguNCJF!5e0!3m2!1sen!2sin!4v1712912557663!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-md-6">
                        <div className="wow fadeInUp">
                            <p className="mb-4"></p>
                            <form>
                                <div className="row g-3" data-aos="fade-up" >
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Contact End --> */}

    </>
  )
}
