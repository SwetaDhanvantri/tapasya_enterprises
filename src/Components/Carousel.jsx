import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function Carousel() {
  return (
    <>
      <Swiper
       speed= {1200}
        spaceBetween={30}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>

        <div className="row g-0 align-items-center flex-column-reverse flex-md-row slides" style={{background: "url(/assets/img/swiperImg/slide-1.jpg)",   boxShadow: "inset 0 0 0 2000px  rgba(0, 0, 0, 0.65)"}}>
          <div className="col-md-6 p-5 mt-lg-5 slide1">
            <h1 className="display-5 animated fadeIn mb-4">
              Find <span className="text-green">Perfect uPVC Windows</span>{" "}
              And Doors FOR Your Home
            </h1>
            <p className="animated fadeIn mb-4 pb-2">
              We offers the most innovative uPVC window designs in India,
              ranging from sliders and casement window to bay, tilt-and-run, and
              combination windows
            </p>
            <a
              href=""
              className="btn btn-green py-3 px-5 me-3 animated fadeIn"
            >
              Get Started
            </a>
          </div>
          <div className="col-md-6 animated fadeIn">
          {/* <img src="/assets/img/headimg.jpg" alt="" /> */}
            
          </div>
        </div> 

    
        </SwiperSlide>
        <SwiperSlide>
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row slides" style={{background: "url(/assets/img/swiperImg/slide-2.jpg)",   boxShadow: "inset 0 0 0 2000px  rgba(0, 0, 0, 0.65)"}}>
          <div className="col-md-6 p-5 mt-lg-5 slide1">
            <h1 className="display-5 animated fadeIn mb-4">
              Find A <span className="text-green">Perfect uPVC Window</span>{" "}
              FOR Your Home
            </h1>
            <p className="animated fadeIn mb-4 pb-2">
              We offers the most innovative uPVC window designs in India,
              ranging from sliders and casement window to bay, tilt-and-run, and
              combination windows
            </p>
            <a
              href=""
              className="btn btn-green py-3 px-5 me-3 animated fadeIn"
            >
              Get Started
            </a>
          </div>
          <div className="col-md-6 animated fadeIn">
          {/* <img src="/assets/img/swiperImg/door2.jpg" alt="" /> */}
            
          </div>
        </div> 

   
         
        </SwiperSlide>
        <SwiperSlide>
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row slides" style={{background: "url(/assets/img/swiperImg/slide-3.jpg)",   boxShadow: "inset 0 0 0 2000px  rgba(0, 0, 0, 0.65)"}}>
          <div className="col-md-6 p-5 mt-lg-5 slide1">
            <h1 className="display-5 animated fadeIn mb-4">
              Find A <span className="text-green">Perfect uPVC Window</span>{" "}
              FOR Your Home
            </h1>
            <p className="animated fadeIn mb-4 pb-2">
              We offers the most innovative uPVC window designs in India,
              ranging from sliders and casement window to bay, tilt-and-run, and
              combination windows
            </p>
            <a
              href=""
              className="btn btn-green py-3 px-5 me-3 animated fadeIn"
            >
              Get Started
            </a>
          </div>
          <div className="col-md-6 animated fadeIn">
          {/* <img src="/assets/img/swiperImg/door.jpg" alt="" />
             */}
          </div>
        </div> 

        
        
        </SwiperSlide>
      </Swiper>
    </>
  );
}
