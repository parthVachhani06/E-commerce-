
import { Container } from 'react-bootstrap';
import { useDispatch, } from 'react-redux';
import { albumAction, } from '../../Service/Action/productAction';
import { useNavigate } from 'react-router';
import { useState } from 'react';


function CreateProduct() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        brand: '',
        price: '',
        thumbnail: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        await dispatch(albumAction(formData));

        setFormData({
            title: '',
            description: '',
            category: '',
            brand: '',
            price: '',
            thumbnail: ''
        });

        navigate('/View');
    };



    return (
        <Container className='py-5'>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                    <div className="statbox widget box box-shadow">
                        <div className="widget-header">
                            <div className="row">
                                <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4 className='py-3 fw-bold'>Add / Manage Product </h4>
                                </div>
                            </div>
                        </div>
                        <div className="widget-content widget-content-area add-manage-product-2">
                            <div className="row">
                                <div className="col-xl-12 col-md-12">
                                    <div className="card card-default border-danger py-3">
                                        <div className="card-heading"><h2 className="card-title ps-2 text-danger"><span>ADD PRODUCT</span></h2></div>
                                        <div className="card-body">
                                            <div className="card-body">
                                                <form className="form-horizontal" onSubmit={handleSubmit}>
                                                    <div className="form-group mb-4">
                                                        <div className="row">
                                                            <label className="col-md-4">Name :</label>
                                                            <div className="col-md-8">
                                                                <input className="form-control text-uppercase" name="title" type="text" value={formData.title} onChange={handleChange} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <div className="row">
                                                            <label className="col-md-4">Description :</label>
                                                            <div className="col-md-8">
                                                                <textarea rows="4" cols="5" name="description" value={formData.description} onChange={handleChange} className="form-control"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <div className="row">
                                                            <label className="col-md-4">Category :</label>
                                                            <div className="col-md-8">
                                                                <select className="form-control form-custom mb-4" name="category" value={formData.category} onChange={handleChange}>
                                                                    <option value="">Select Category</option>
                                                                    {
                                                                        ["electornics", "Skin care & Hair", "Home & Kitchen", "home-decor"].map((p) => {
                                                                            return (
                                                                                <option value={p}>{p}</option>

                                                                            )
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <div className="row">
                                                            <label className="col-md-4">Brand :</label>
                                                            <div className="col-md-8">
                                                                <select className="form-control form-custom" name="brand" value={formData.brand} onChange={handleChange}>
                                                                    <option value="">Select a Brand</option>
                                                                    {
                                                                        ["Apple", "Samsung", "OPPO", "Huawei", "Impression of Acqua Di Gio", "Royal_Mirage", "Fog Scent Xpressio", "Al Munakh", "Saaf & Khaas", "Bake Parlor Big", "Dry Rose", "luxury palace", "Golden", "Flying Wooden"].map((p) => {
                                                                            return (
                                                                                <option value={p}>{p}</option>

                                                                            )
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <div className="row">
                                                            <label className="col-md-4">Price :</label>
                                                            <div className="col-md-8">
                                                                <input className="form-control" name="price" type="number" value={formData.price} onChange={handleChange} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="row">
                                                            <label className="col-md-4">Image :</label>
                                                            <div className="col-md-8">
                                                                <div className="mb-3">
                                                                    <div className="custom-file">
                                                                        <input type="text" name="thumbnail" value={formData.thumbnail} onChange={handleChange} className="form-control" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="align-center">
                                                        <button className="btn btn-primary" type="submit">ADD PRODUCT</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CreateProduct
