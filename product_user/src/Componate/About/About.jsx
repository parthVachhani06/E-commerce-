import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FcNegativeDynamic } from "react-icons/fc";
import { RxLapTimer } from "react-icons/rx";
import { MdOutlineCreditCard } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import "../About/About.css"


function About() {
    return (
        <>
            <section className='py-5 text-center bg-dark text-light'>
                <h2>About Page</h2>
                <div className='py-3'>
                    <h6><IoMdHome /><a href="#">Home</a> ~ <span className='text-secondary'> About Page</span></h6>
                </div>
            </section>
            {/* sec-2 */}
            <section className='py-5'>
                <div className="row">
                    <div className="col-6 px-4">
                        <img src="	https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/About-1.jpg" alt="" />
                    </div>
                    <div className="col-6 px-4">
                        <h3 className='fw-bolder'>
                            Our Story
                        </h3>
                        <p className='py-3'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className='pb-3'>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className='fw-bold d-flex justify-content-end'>
                            <div className='fs-1'>
                                <FcNegativeDynamic />
                            </div>
                            <div className='ps-5'>
                                Create stunning images with as much or as little control as <br /> you like thanks to a choice of Basic and Creative modes.
                            </div>
                        </div>
                        <p className='pt-4 fw-bold fs-6 border-top'>
                            SEAN MORRISON
                        </p>
                    </div>
                </div>
            </section>

            {/* sec-3 */}

            <section className='py-5 bg-secondary-subtle'>
                <div className="row">
                    <h2 className='p-4 fw-bold'>Why Choose Us</h2>
                    <div className="col-4 bg-white border-end border-5">
                        <div className='p-3'>
                            <div className='fs-1 text-danger py-2'>
                                <CiDeliveryTruck />
                            </div>
                            <h5 className='fw-bold py-2'>
                                Free Delivery
                            </h5>
                            <h6>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </h6>
                        </div>
                    </div>
                    <div className="col-4 bg-white  border-end border-5">
                        <div className='p-3'>
                            <div className='fs-1 text-danger py-2'>
                                <MdOutlineCreditCard />
                            </div>
                            <h5 className='fw-bold py-2'>
                                Secure Payment
                            </h5>
                            <h6>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </h6>
                        </div>
                    </div>
                    <div className="col-4 bg-white ">
                        <div className='p-3'>
                            <div className='fs-1 text-danger py-2'>
                                <RxLapTimer />
                            </div>
                            <h5 className='fw-bold py-2'>
                                24/7 Support
                            </h5>
                            <h6 className='py-2'>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            {/* sec-4 */}

            <section className='py-5'>
                <div className="row">
                    <h2 className='px-5 fw-bold py-4'>OUR TEAM</h2>
                    <div className="col-3 text-center border-end">
                        <div className='ps-3'>
                            <img src="https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/about-1.png" alt="" />
                        </div>
                        <h5 className='text-danger m-0'>
                            JOHN DOE
                        </h5>
                        <p className='m-0 py-3'> DESIGNER</p>
                        <div>
                            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />

                            <ul className='ull d-flex list-unstyled px-5'>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-facebook-f icon"></i>    </a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-twitter icon"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-linkedin-in icon"></i></a></li>
                                <li>
                                    <a href="#"><i class="fab fa-google-plus-g icon"></i></a></li>
                            </ul>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>

                    </div>
                    <div className="col-3 text-center border-end">
                        <div className='ps-3'>
                            <img src="https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/about-2.png" alt="" />
                        </div>
                        <h5 className='text-danger m-0'>
                            JANE GRAY
                        </h5>
                        <p className='m-0 py-3'>PUBLIC RELATIONS</p>
                        <div>
                            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />

                            <ul className='ull d-flex list-unstyled px-5'>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-facebook-f icon"></i>    </a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-twitter icon"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-linkedin-in icon"></i></a></li>
                                <li>
                                    <a href="#"><i class="fab fa-google-plus-g icon"></i></a></li>
                            </ul>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>

                    </div>
                    <div className="col-3 text-center border-end">
                        <div className='ps-3'>
                            <img src="https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/about-3.png" alt="" />
                        </div>
                        <h5 className='text-danger m-0'>
                        JULY WOOD
                        </h5>
                        <p className='m-0 py-3'>CUSTOMER SUPPORT</p>
                        <div>
                            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />

                            <ul className='ull d-flex list-unstyled px-5'>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-facebook-f icon"></i>    </a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-twitter icon"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-linkedin-in icon"></i></a></li>
                                <li>
                                    <a href="#"><i class="fab fa-google-plus-g icon"></i></a></li>
                            </ul>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>

                    </div>
                    <div className="col-3 text-center">
                        <div className='ps-3'>
                            <img src="https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/about-1.png" alt="" />
                        </div>
                        <h5 className='text-danger m-0'>
                        TROY GRAY
                        </h5>
                        <p className='m-0 py-3'> MARKETING DIRECTOR</p>
                        <div>
                            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />

                            <ul className='ull d-flex list-unstyled px-5'>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-facebook-f icon"></i>    </a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-twitter icon"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-linkedin-in icon"></i></a></li>
                                <li>
                                    <a href="#"><i class="fab fa-google-plus-g icon"></i></a></li>
                            </ul>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>

                    </div>
                </div>
            </section>

            {/* sec-5 */}

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

export default About
