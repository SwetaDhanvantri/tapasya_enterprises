import React from 'react'
import { Link } from 'react-router-dom'

export default function TopNav() {
  return (
    <>
    <div className="top-nav bg-primary d-flex justify-content-evenly align-items-center py-2 text-white">
        <div className="d-flex align-items-center mx-3 ">
          <a href="https://maps.app.goo.gl/m1jSqTYdDZGq5FBQ7" target="_blank" rel="noopener noreferrer">
          <div
            className="icon me-2 border-round "
            style={{ width: "25px", height: "25px" }}
          >
            <i className="fa fa-map-marker-alt text-primary"></i>
          </div>
          <span className="text-white">
            Plot No- 20,21, Gali No- 03(W) Sarurpur Industrial Area, Faridabad,
            121004
          </span>
          </a>
        </div>
        <div className="d-flex align-items-center mx-3 ">
          <a href="mailto:tapasyaenterprises1304@gmail.com">
          <div
            className="icon me-2 border-round "
            style={{ width: "25px", height: "25px" }}
          >
                <i className="fa fa-envelope-open text-primary"></i>
          </div>
          <span className="text-white">
          <span>tapasyaenterprises1304@gmail.com</span>
          </span>
          </a>
        </div>
        <div className="d-flex align-items-center  mx-3">
         <a href="tel:+91 8929313213">
         <div
            className="icon me-2 border-round"
            style={{ width: "25px", height: "25px" }}
          >
             <i className="fa fa-phone-alt text-primary"></i>
          </div>
          <span className="text-white">
          <span>+91 8929313213</span>
          </span>
         </a>
        
        </div>
     
      </div>
    </>
  )
}
