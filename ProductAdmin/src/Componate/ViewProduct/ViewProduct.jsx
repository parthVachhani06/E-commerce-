import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteData, getdata, singleData } from '../../Service/Action/productAction';
import Button from 'react-bootstrap/Button';

import { Col, Container, Row, Table } from 'react-bootstrap';

function ViewProduct() {

    const { albums } = useSelector(state => state.producReducer)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getdata());
    }, [dispatch]);

    const handalEdit = async (id) => {
        await dispatch(singleData(id))
        navigate('/edit')
    };

    const handleDelete = (id) => {
        dispatch(deleteData(id));
    }


    return (
        <div>
            <Container className='py-4'>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Thumbnail</th>
                            <th>Button</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            
                        albums.map((pro,index) => {
                            return (

                                <tr key={index}>
                                    <td>
                                        {
                                            index + 1
                                        }
                                    </td>
                                    <td>
                                        {
                                            <h6 className='text-uppercase'>{ pro.title}</h6>
                                        }
                                    </td>
                                    <td>
                                        {
                                            pro.description
                                        }
                                    </td>
                                    <td>
                                        {
                                            pro.category
                                        }
                                    </td>
                                    <td>
                                        {
                                            pro.brand
                                        }
                                    </td>
                                    <td>
                                        {
                                            pro.price
                                        }
                                    </td>
                                    <td>
                                        {
                                           <img src={pro.thumbnail} style={{ width: "100px", height: "100px" }} />
                                        }
                                    </td>
                                    <td>
                                        <Button className="me-3" variant="primary"  onClick={() => handalEdit(pro.id)}>
                                            Edit
                                        </Button>
                                        <Button variant="danger" onClick={() => handleDelete(pro.id)} type="submit" className='px-4'>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>

                            )
                        })
                    }

                
                    </tbody>
                </Table>
            </Container>

        </div>
    )
}

export default ViewProduct
