import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MyTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}  className="bg-primary text-white" aria-label="basic tabs example" TabIndicatorProps={{style: {background:'#fff', height:'5px'}}} centered>
          <Tab className='text-white' label="Windows" {...a11yProps(0)} />
          <Tab  className='text-white' label="Doors" {...a11yProps(1)} />
       
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
       <div className='products'>
       <div className="tab-content"  data-aos="fade-up">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4 ">
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp "
                  data-wow-delay="0.1s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden text-center">
                      <a href="">
                        <img
                          className="img-fluid"
                          src="/assets/img/products/casementWindow.jpg"
                          alt=""  data-aos="fade-up"
                        />
                      </a>
                      <h5>Casement Windows</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden text-center">
                      <a href="">
                        <img
                          className="img-fluid"
                          src="/assets/img/products/tophung.jpg"
                          alt=""  data-aos="fade-up"
                        />
                      </a>
                      <h5> Top Hung Windows</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden text-center">
                      <a href="">
                        <img
                          className="img-fluid"
                          src="/assets/img/products/slidingwindow.jpg"
                          alt=""  data-aos="fade-up"
                        />
                      </a>
                      <h5>Sliding Windows</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden text-center">
                      <a href="">
                        <img
                          className="img-fluid"
                          src="/assets/img/products/tiltandturn.jpg"
                          alt=""  data-aos="fade-up"
                        />
                      </a>
                      <h5>Tilt and Turn Windows</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden text-center">
                      <a href="">
                        <img
                          className="img-fluid"
                          src="/assets/img/products/fixed.jpg"
                          alt=""  data-aos="fade-up"
                        />
                      </a>
                      <h5>Fixed Windows</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden text-center">
                      <a href="">
                        <img
                          className="img-fluid"
                          src="/assets/img/products/frenchwindow.jpg"
                          alt=""  data-aos="fade-up"
                        />
                      </a>
                      <h5>French Windows</h5>
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
                </div> */}
              </div>
            </div>
        
          </div>
      
        
      
      
       
       
        
       </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className='products'>
       <div className="tab-content"  data-aos="fade-up">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4 ">
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp "
                  data-wow-delay="0.1s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden text-center">
                      <a href="">
                        <img
                          className="img-fluid"
                          src="/assets/img/products/casementdoor.jpg"
                          alt=""  data-aos="fade-up"
                        />
                      </a>
                      <h5>Casement Doors</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden text-center">
                      <a href="">
                        <img
                          className="img-fluid"
                          src="/assets/img/products/slidingdoor.jpg"
                          alt=""  data-aos="fade-up"
                        />
                      </a>
                      <h5>Sliding Doors</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden text-center">
                      <a href="">
                        <img
                          className="img-fluid"
                          src="/assets/img/products/patiodoors.jpg"
                          alt=""  data-aos="fade-up"
                        />
                      </a>
                      <h5>uPVC Patio Doors</h5>
                    </div>
                  </div>
                </div>
              
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden text-center">
                      <a href="">
                        <img
                          className="img-fluid"
                          src="/assets/img/products/frenchdoor.jpg"
                          alt=""  data-aos="fade-up"
                        />
                      </a>
                      <h5>French Doors</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  
                </div>
               
               
              </div>
            </div>
        
          </div>
      
        
      
      
       
       
        
       </div>
     
     
     
     
      </CustomTabPanel>
  
  
    </Box>
  );
}