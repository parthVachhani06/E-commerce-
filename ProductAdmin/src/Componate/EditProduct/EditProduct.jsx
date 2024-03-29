import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { editData } from '../../Service/Action/productAction';
import { useNavigate } from 'react-router';
import { useState } from 'react';

function EditProduct() {

    const { album } = useSelector(state => state.producReducer)



    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formDataa, setFormDataa] = useState(album)


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormDataa({ ...formDataa, [name]: value });
    };


    const handaledit = async (e) => {
        e.preventDefault();

        console.log("foooo", formDataa);

      await  dispatch(editData(formDataa));


        navigate('/view');

        setFormDataa({
            title: '',
            description: '',
            category: '',
            brand: '',
            price: '',
            thumbnail : ''
        });

    }



    return (
        <Container>
            <Form onSubmit={handaledit}>
                <Row className="mb-3 pt-5">

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="name" name='title' placeholder='product title' value={formDataa.title} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name='description' placeholder="Product description" value={formDataa.description} onChange={handleChange} />
                    </Form.Group>


                </Row>
                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Catagory</Form.Label>
                        <Form.Control type="text" name='category' placeholder="Product category" value={formDataa.category} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control type="number" name='brand' placeholder="Product brand" value={formDataa.brand} onChange={handleChange} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name='price' placeholder="Product price" value={formDataa.price} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" name='thumbnail' placeholder="Product thumbnail" value={formDataa.thumbnail} onChange={handleChange} />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit" >
                    update
                </Button>
            </Form>
        </Container>
    )


}

export default EditProduct
