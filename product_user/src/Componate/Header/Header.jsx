import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { RiContactsFill } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { FiShoppingCart } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
    return (
        <div>
            <header className='border border-dark'>
                <Row>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <img src="https://penji.co/wp-content/uploads/2019/08/ecommerce_logo_magento.jpg" alt="" className='w-75' />
                    </div>
                    <div className="col-7 d-flex justify-content-center align-items-center">
                        <ul className='d-flex gap-5 align-items-center list-unstyled'>
                            <li><NavLink to="/" className='text-decoration-none fw-bold text-danger'>Home </NavLink><FaAngleDown /></li>
                            <li><NavLink to="/about" className="className='text-decoration-none fw-bold text-dark">About</NavLink></li>
                            <li><NavLink to="/shop" className="className='text-decoration-none fw-bold text-dark">Shop</NavLink></li>
                            <li> <Dropdown>
                                <Dropdown.Toggle variant="white" id="dropdown-basic" className='border-0 fw-bold'>
                                    Pages
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"><NavLink to="/" className='text-decoration-none  text-danger'>Home </NavLink></Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><NavLink to="/about" className="className='text-decoration-none text-dark">About</NavLink></Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Blog</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><NavLink to="/shop" className="className='text-decoration-none  text-dark">Shop</NavLink></Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><NavLink to="/contect" className="className='text-decoration-none  text-dark">Contect</NavLink></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown></li>
                            <li><NavLink to="/contect" className="className='text-decoration-none fw-bold text-dark">Contect</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-2 d-flex gap-3 fs-3 justify-content-center align-items-center">
                        <RiContactsFill />
                        <FcLike />
                        <FiShoppingCart />
                    </div>
                </Row>
            </header>
        </div>
    )
}

export default Header
