import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { signUpAction } from '../../Service/Action/signUpAction';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function SignUP() {

  const{issignUp} = useSelector(state => state.signUpReducer)
  const [signUp, setSignup] = useState({
    fname: '',
    email: '',
    password: '',
    c_pass: '',
  })

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignup({ ...signUp, [name]: value });
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    await dispatch(signUpAction(signUp.email, signUp.password))
    setSignup({
      fname: '',
      email: '',
      password: '',
      c_pass: '',
    })

  }


  if (issignUp) {

    navigate('/login')
  } else {
    return (
      <>
        <section>
          <div className="container py-3">
            <div className="row">
              <div className="col d-flex">
                <div className="col-4"></div>
                <div className="col-4 text-center BacBLur border border-2 border-danger rounded px-3 pt-3">
                  <div className='text-danger'>
                    <h2 className='fw-bold'>Signup</h2>
                  </div>

                  <Form className='py-2' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Enter Name" name='fname' value={signUp.fname} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control type="email" placeholder="Enter email" name='email' value={signUp.email} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control type="password" placeholder="password" name='password' value={signUp.password} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control type="password" placeholder="Confirm Password" name='c_pass' value={signUp.c_pass} onChange={handleChange} />
                    </Form.Group>
                    <Button variant="danger" type="submit" className='px-5'>
                      SignUp
                    </Button>
                  </Form>
                  <p className='fw-bold dark'>
                    Allready have an account ? <NavLink to='/login' >Login</NavLink>
                  </p>
                  <p className='text-danger'>
                    _____________________ OR _____________________
                  </p>
                  <div className="col gap-2 d-flex pb-3">
                    <Button className='bg-light text-primary border-danger '><FaFacebook /> Login With FB  </Button>
                    <Button className='bg-light text-warning border-danger'> <FcGoogle /> Login with Google</Button>
                  </div>
                </div>
                <div className="col-4"></div>
              </div>

            </div>
          </div>
        </section>
      </>

    )
  }

  ;
}

export default SignUP;


