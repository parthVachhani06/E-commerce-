import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaRegAddressBook } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { Button } from 'react-bootstrap';

function Contect() {
    return (
        <>
            <section className='py-5 text-center bg-dark text-light'>
                <h2>Contect Page</h2>
                <div className='py-3'>
                    <h6><IoMdHome /><a href="#">Home</a> ~ <span className='text-secondary'> Contect Page</span></h6>
                </div>
            </section>

            {/* sec-2 */}

            <section className='py-4'>
                <div className="row">
                    <div className="col-4 px-4">
                        <p>GET IN TOUCH</p>
                        <h1 className='fw-bold'>
                            Visit one of our agency locations or
                            contact us today
                        </h1>
                        <h5 className='py-4'>Head Office</h5>
                        <div className='d-flex gap-2  align-items-center py-1'><FaRegAddressBook /><p className='m-0'>56 Glassford Street Glasgow G1 1UL New York</p></div>
                        <div className='d-flex gap-2  align-items-center py-1'><MdOutlineMail /><p className='m-0'>contact@example.com</p></div>
                        <div className='d-flex gap-2  align-items-center py-1'><FaPhoneAlt /><p className='m-0'>+844 123 456 78</p></div>
                        <div className='d-flex gap-2  align-items-center py-1'><IoMdTime /><p className='m-0'>Monday to Saturday: 9.00am to 16.pm</p></div>

                    </div>
                    <div className="col-8">
                        <div className='pe-5'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4728119903984!2d72.85976271540412!3d21.213091686834584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f722f9b1c6f%3A0x1118ee640849888b!2sRed%20%26%20White%20Institute%20Of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1670473052101!5m2!1sen!2sin" frameborder="0" width="1140" height="450"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* sec-3 */}
            <section className='p-5'>
                <div className='border'>
                    <div className="container d-flex m-0">
                        <div className="col-9 pt-4 ps-3">
                            <h6>LEAVE A MESSAGE</h6>
                            <h2 className='py-3'>We love to hear from you</h2>

                            <form>
                                <input type="text" placeholder='Your Name' size="100" className='px-2 py-2 mb-3 ' />
                                <input type="email" placeholder='Email' size="100" className='px-2 py-2 mb-3' />
                                <input type="text" placeholder='Subject' size="100" className='px-2 py-2 mb-3' />
                                <textarea type="text" placeholder='Message' className='px-2 py-2 mb-5' />
                                <Button variant='danger' className='my-5' type='submit'>Submit</Button>
                            </form>

                        </div>
                        <div className="col-4 pt-4 m-0">
                            <div className='d-flex justify-content-center align-items-center  py-3'>
                                <div><img src="https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/contact-1.png" alt="" /></div>
                                <div className='ps-3'>
                                    <h6 className='fw-bold'>John Doe</h6>
                                    <p className='m-0'>Senior Marketing Manager</p>
                                    <p className='m-0'>Phone: + 8441234447788</p>
                                    <p className='m-0'>Email: contact@example.com</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center py-3'>
                                <div><img src="https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/contact-2.png" alt="" /></div>
                                <div className='ps-3'>
                                    <h6 className='fw-bold'> William Smith</h6>
                                    <p className='m-0'>Recruiting Manager</p>
                                    <p className='m-0'>Phone: + 844 123 444 77 88</p>
                                    <p className='m-0'>Email: contact@example.com</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center py-3'>
                                <div><img src="	https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/contact-3.png" alt="" /></div>
                                <div className='ps-3'>
                                    <h6 className='fw-bold'>Emma Stone</h6>
                                    <p className='m-0'>Human Resource</p>
                                    <p className='m-0'>Phone: + 8441234447788</p>
                                    <p className='m-0'>Email: contact@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* sec-4 */}


            <section className='py-5  border-top border-bottom'>
                <div className="container">
                <div className='justify-content-around d-flex'>
                    <div>
                        <img src="https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/brand-1.png" alt="" />
                    </div>
                    <div>
                        <img src="https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/brand-2.png" alt="" />
                    </div>
                    <div>
                        <img src="https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/brand-3.png" alt="" />
                    </div>
                    <div>
                        <img src="https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/brand-4.png" alt="" />
                    </div>
                    <div>
                        <img src="https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/brand-5.png" alt="" />
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Contect
