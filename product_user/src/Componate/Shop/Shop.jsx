
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getdata } from '../../Services/Action/productAction';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { FcRightDown2 } from "react-icons/fc";
import { useNavigate } from 'react-router';
import'../Shop/Shop.css'

function Shop() {

    const { albums,album } = useSelector(state => state.producReducer)
    // console.log(albums,"albammd===>");
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getdata());
    }, [dispatch]);

    return (
        <div className='bg'>
            <Container>
              
                <div className="container">
                    <div className='py-4 d-flex text-danger'>
                        <h1>SHOP NOW </h1><div className='fs-1'><FcRightDown2 /></div>
                    </div>
                    <div className="row ">
                        {
                            albums.map((pro) => {
                                return (
                                         <div className='col-4 py-2'>
                                        <Card style={{ width: '18rem' }} className='py-2 border border-2 border-dark'>
                                        <div style={{width:300 , height:200}} className='w-75 d-flex justify-content-center align-items-center'>
                                           <Card.Img variant="top" src={pro.thumbnail} className='ps-4 w-100'/>
                                        </div>
                                        <Card.Body>
                                            <Card.Title className=''>{ <h2 className='text-uppercase'>{ pro.title}</h2>}</Card.Title>
                                            <Card.Text >
                                              <span className='fw-bold text-danger'>Discriptions :  </span>{pro.description}
                                            </Card.Text>
                                            <Card.Text>
                                            <span className='fw-bold text-danger'> category :  </span>{pro.category}
                                            </Card.Text>
                                            <Card.Text>
                                            <span className='fw-bold text-danger'> Brand:  </span>{pro.brand}
                                            </Card.Text>
                                            <Card.Text>
                                            <span className='fw-bold text-danger'> Price  :  </span> {pro.price} $
                                            </Card.Text>
                                           <div className='d-flex gap-3 py-1'>
                                           <Button variant='light' className='fw-bold border'>ADD TO CART</Button>
                                           <Button variant='light' className='fw-bold border'>BUY NOW</Button>
                                           </div>
                                        </Card.Body>
                                    </Card>
            
                                    </div>
                               
                                )
                            })
                        }
                    </div>
                </div>
        
                 
            </Container>



        </div>
    )
}

export default Shop

