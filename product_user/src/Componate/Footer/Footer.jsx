import React from 'react'
import '../Footer/Footer.css'
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { BiSolidMessage } from "react-icons/bi";
import { Button } from 'react-bootstrap';

function Footer() {
    return (
        <div>
            <footer className='py-5 text-white bg-dark'>
                <div className="row border-bottom pb-5">
                    <div className="col-3 ps-5">
                        <ul className='list-unstyled'>
                            <li className='py-3'><a href="#" className='fw-bold text-decoration-none text-white'>FIND IN FAST</a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>Accessories </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>Gaming </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>Laptops & Computer </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>Mac Computers </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>PC Computers</a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>Ultrabooks </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>EMI Payment</a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>Shipping Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-3  ps-5">
                        <ul className='list-unstyled'>
                            <li className='py-3'><a href="#" className='fw-bold text-decoration-none text-white'>MERCHANT CENTRAL</a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>Merchant Sign In </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>How Does It Work </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>Pricing </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>Fulfillment by ShopClues </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>Merchant Tools </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>Policies & Rules </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>Testimonials </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>Merchant Ratings</a></li>
                        </ul>
                    </div>
                    <div className="col-3  ps-5">
                        <ul className='list-unstyled'>
                            <li className='py-3'><a href="#" className='fw-bold text-decoration-none text-white'>NFORMATION</a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>About Us </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>Contact Us </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>All Collection </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>Privacy policy </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>Terms & conditio </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>Blog </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'>In the Press </a></li>
                            <li className='py-1'><a href="#" className='text-decoration-none text-white'> Awards</a></li>
                        </ul>
                    </div>
                    <div className="col-3 border-start px-5">
                        <h6 className='py-3 fw-bold'>CONTACT US</h6>

                        <p>
                            If you have any question, please contact us at <span className='text-warning'>support@example.com</span>
                        </p>
                        <div className='d-flex'>
                            <div className='fs-2'> <IoLocation /></div>
                            <h6 className='p-2'>123 Sky Tower, West 21th Street, Suite, NY</h6>
                        </div>
                        <div className='d-flex'>
                            <div className='fs-3'> <FaPhone /></div>
                            <h6 className='p-2'>+844 123 456 789<br />
                                +844 123 456 788</h6>
                        </div>
                    </div>
                </div>

                <div className="container py-3 border">
                    <div className="row">
                        <div className="col-3 d-flex">
                            <div className='fs-2'>
                                <BiSolidMessage />
                            </div>
                            <h5 className='ps-3'>
                            SIGN UPFOR <br/> NEWSLETTER
                            </h5>
                        </div>
                        <div className="col-4 text-center">
                            <h6>Subscribe to the weekly newsletter for all the latest updates</h6>
                        </div>
                        <div className="col-5">
                            <div className=' d-flex ps-3'>
                                <input type="text" placeholder='Enter The Email' className=' border rounded-pill'/>
                                <Button variant='danger' className='border rounded-pill'> submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
