import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FiMenu } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { MdLeaderboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { FcAddImage } from "react-icons/fc"
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PiSignInBold } from "react-icons/pi";
import { FaUserClock } from "react-icons/fa6";



function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const{islogin} = useSelector(state => state.signUpReducer)
    const dispatch = useDispatch();

    const heandalout = (e) => {
        dispatch(signOutAction())
    }


    return (
        <>
            <section>
                <header className='border-bottom border-danger border-3'>
                    <div>
                        <div className="row">
                            <div className="col-1 align-items-center d-flex justify-content-center">
                                <p onClick={handleShow}>
                                    <div className='fs-2'>
                                        <FiMenu />
                                    </div>
                                </p>

                                <Offcanvas show={show} onHide={handleClose} backdrop="static">
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>
                                            <div className='border-bottom border-dark'>
                                                <img src="https://penji.co/wp-content/uploads/2019/08/ecommerce_logo_magento.jpg" alt="" className='w-50' />
                                            </div>
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <div className="row">
                                            <p className='p-0'>DASKBOARDS & APPS</p>
                                        </div>
                                        <div className='border-bottom border-dark py-3'>
                                            <div className='d-flex py-3'>
                                                <span className='pe-2'></span><h1 className='m-0 pt-1 border-bottom border-danger'>Admin</h1>
                                            </div>
                                            <div className='d-flex py-3'>
                                                <span className='pe-2 fs-4'><MdLeaderboard /></span><h3 className='m-0 pt-1'><NavLink to="/desh" className="text-dark text-decoration-none">Dashboard</NavLink></h3 >
                                            </div>
                                            <div className='d-flex py-3'>
                                                <span className='pe-2 fs-4'><FcAddImage /></span><h3 className='m-0 pt-1'><NavLink to="/add" className="text-dark text-decoration-none">Add Product</NavLink></h3 >
                                            </div>
                                            <div className='d-flex py-3'>
                                                <span className='pe-2 fs-4'><FaProductHunt /></span><h3 className='m-0 pt-1'><NavLink to="/view" className="text-dark text-decoration-none">view Product</NavLink></h3 >
                                            </div>
                                            <div className='d-flex py-3'>
                                            <span className='pe-2 fs-4'><FaProductHunt /></span><h3 className='m-0 pt-1'><NavLink className="text-dark text-decoration-none">Edit Product</NavLink></h3 >
                                            </div>
                                            <div className='d-flex py-3'>
                                                <span className='pe-2 fs-4'><MdLeaderboard /></span><h3 className='m-0 pt-1'>Order</h3 >
                                            </div>
                                           
                                        </div>
                                        <div>
                                            <div className="row py-2 bg-light">
                                                <div className="col-3">
                                                    <img src="https://lh3.googleusercontent.com/a/ACg8ocK65k1BSX3Vai2vUfjrWnbSRK10EC30crkowsPeIH-Q6A=s288-c-no" alt="" className='w-100' />
                                                </div>
                                                <div className="col">
                                                    <h5> Parth Vachhani</h5>
                                                    <h6>@ParthVachhani123</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </div>
                            <div className="col-8 align-items-center d-flex justify-content-center">
                                <div className='w-50 align-items-center d-flex justify-content-center'>
                                    <img src="https://penji.co/wp-content/uploads/2019/08/ecommerce_logo_magento.jpg" alt="" className='w-50' />
                                </div>
                            </div>
                            <div className='col-3 align-items-center d-flex justify-content-center gap-3'>
                                <a href="#" className='text-dark fs-2'><IoIosSearch /></a>
                                <a href="#" className='text-dark fs-2'><BsCart /></a> 
                                {
                            islogin ? <h6 onClick={heandalout} className='fs-2 pt-3'><PiSignInBold /></h6>
                                :
                                <NavLink to="/login" className="text-dark fs-2"><FaUserClock /></NavLink>

                        }
                            </div>
                        </div>
                    </div>
                </header>
            </section>
        </>
    );
}

export default Header;