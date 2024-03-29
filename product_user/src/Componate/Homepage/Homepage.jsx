import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import '../Homepage/Homepage.css'
import { TbTruckDelivery } from "react-icons/tb";
import { RxLapTimer } from "react-icons/rx";
import { FaCcAmazonPay } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";

function Homepage() {

  return (
    <div>
      <section className=''>
        <Row>
         <div>
          <img src="https://png.pngtree.com/thumb_back/fh260/back_pic/03/74/71/8157bc6af63278a.jpg" alt=""  className='w-100'/>
         </div>
        </Row>
      </section>


      <section className='py-5'>
        <Container>
          <Row>
            <div className="col-3 d-flex">
              <div className='fs-1 text-warning d-flex justify-content-center align-items-center pe-2'>
                <TbTruckDelivery />
              </div>
              <div>
                <h5 className='m-0'>FREE DELIVERY</h5>
                <p className='m-0'>For all oders over $100</p>
              </div>
            </div>
            <div className="col-3 d-flex">
              <div className='fs-1 text-warning d-flex justify-content-center align-items-center pe-2'>
                <RxLapTimer />
              </div>
              <div>
                <h5 className='m-0'>90 DAYS RETURN</h5>
                <p className='m-0'>If goods have problems</p>
              </div>
            </div>
            <div className="col-3 d-flex">
              <div className='fs-1 text-warning d-flex justify-content-center align-items-center pe-2'>
                <FaCcAmazonPay />
              </div>
              <div>
                <h5 className='m-0'>SECURE PAYMENT</h5>
                <p className='m-0'>100% secure payment</p>
              </div>
            </div>
            <div className="col-3 d-flex">
              <div className='fs-1 text-warning d-flex justify-content-center align-items-center pe-2'>
                <BiMessageRoundedDots />
              </div>
              <div>
                <h5 className='m-0'>24/7 SUPPORT</h5>
                <p className='m-0'>Dedicated support</p>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      {/*  */}

      <section className='bg-secondary-subtle py-5'>
        <div className="row">
          <h3 className='pb-5 ps-4'><span className='fw-bold'>Top</span> Categories</h3>
          <div className="col-4 d-flex bg-white border border-warning">
            <div className="col-6  d-flex justify-content-center align-items-center">
              <div className="hover01 column">
                <div >
                  <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0bDm-rkuQJk7q2adX8xEgrPzUtEN7uw3jA&usqp=CAU" className='w-75' /></figure>
                </div>
              </div>

            </div>
            <div className="col-6 py-5">
              <h4 className='py-3 text-uppercase'>Mobile & Tablet</h4>
              <p className='m-0'>iphone</p>
              <p className='m-0'>Sumsung</p>
              <p className='m-0'>Nokia</p>
              <Button variant='warning' className='mt-4'>View More</Button>
            </div>
          </div>
          <div className="col-4 d-flex bg-white">
            <div className="col-6  d-flex justify-content-center align-items-center">
              <div className="hover01 column">
                <div >
                  <figure><img src="https://st.depositphotos.com/1000128/2939/i/450/depositphotos_29394915-stock-photo-desktop-computer-with-touchscreen-interface.jpg" className='w-100' /></figure>
                </div>
              </div>

            </div>
            <div className="col-6 py-5 ps-3">
              <h4 className='py-3 text-uppercase'>Mobile & Computer</h4>
              <p className='m-0'>iphone</p>
              <p className='m-0'>Sumsung</p>
              <p className='m-0'>Nokia</p>
              <Button variant='warning' className='mt-4'>View More</Button>
            </div>
          </div>
          <div className="col-4 d-flex bg-white border border-warning">
            <div className="col-6  d-flex justify-content-center align-items-center">
              <div class="hover01 column">
                <div >
                  <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyqfDEzwWCRDt-m8b0bdudzRi4M3tanp5k4w&usqp=CAU" className='w-75' /></figure>
                </div>
              </div>

            </div>
            <div className="col-6 py-5">
              <h4 className='py-3 text-uppercase'>Washing Machine</h4>
              <p className='m-0'>iphone</p>
              <p className='m-0'>Sumsung</p>
              <p className='m-0'>Nokia</p>
              <Button variant='warning' className='mt-4'>View More</Button>
            </div>
          </div>
        </div>

        <div className="row py-5">
          <div className="col-4 d-flex bg-white">
            <div className="col-6  d-flex justify-content-center align-items-center">
              <div class="hover01 column">
                <div >
                  <figure><img src="https://st4.depositphotos.com/16376404/31339/i/450/depositphotos_313396366-stock-photo-black-wooden-double-bed-with.jpg" className='w-100' /></figure>
                </div>
              </div>

            </div>
            <div className="col-6 py-5 ps-3">
              <h4 className='py-3 text-uppercase'>Home & Kitchen</h4>
              <p className='m-0'>iphone</p>
              <p className='m-0'>Sumsung</p>
              <p className='m-0'>Nokia</p>
              <Button variant='warning' className='mt-4'>View More</Button>
            </div>
          </div>
          <div className="col-4 d-flex bg-white border border-warning">
            <div className="col-6  d-flex justify-content-center align-items-center">
              <div class="hover01 column">
                <div >
                  <figure><img src="https://media.istockphoto.com/id/882851808/photo/mens-clothing-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=RCX4NSpp3UOjBLoQdqFIpTW6OIhEuaaX-8pWmViqv_o=" className='w-100' /></figure>
                </div>
              </div>

            </div>
            <div className="col-6 py-5 ps-3">
              <h4 className='py-3 text-uppercase'>Clothing & Accessories</h4>
              <p className='m-0'>iphone</p>
              <p className='m-0'>Sumsung</p>
              <p className='m-0'>Nokia</p>
              <Button variant='warning' className='mt-4'>View More</Button>
            </div>
          </div>
          <div className="col-4 d-flex bg-white ">
            <div className="col-6  d-flex justify-content-center align-items-center">
              <div class="hover01 column">
                <div >
                  <figure><img src="https://m.media-amazon.com/images/I/71dE3rTpfsL.jpg" className='w-100' /></figure>
                </div>
              </div>

            </div>
            <div className="col-6 py-5 ps-2">
              <h4 className='py-3 text-uppercase'>Beauty & heathy</h4>
              <p className='m-0'>iphone</p>
              <p className='m-0'>Sumsung</p>
              <p className='m-0'>Nokia</p>
              <Button variant='warning' className='mt-4'>View More</Button>
            </div>
          </div>
        </div>
      </section>


      {/* section 3 */}

      <section className='py-5'>
        <div className="row">
          <div className="col-6 ps-5">
            <div className="s3i my-1">
              <div className="s3i_holder"></div>
            </div>
          </div>
          <div className="col-6 pe-5">
            <div className="s3i1 my-1">
              <div className="s3i1_holder"></div>
            </div>
          </div>
        </div>
      </section>

      {/* sec-4 */}

      <section className='py-5'>
        <div className="sec4i">
          <div className="row">
            <div className="col-7 text-center text-light">
              <h6 >NEW PRODUCTS</h6>
              <h2 className='text-warning'>Laptops & Desktops</h2>
              <p>In-Store Pickup Availible</p>
              <Button variant='warning' className='mt-4'>View More</Button>
            </div>
            <div className="col-5  d-flex justify-content-center ">
              <div class="hover01 column">
                <div>
                  <figure><img src="https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/05/h21_desktop.png" className='w-100' /></figure>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
