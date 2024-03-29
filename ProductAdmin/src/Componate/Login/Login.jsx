import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { googleSignin, signInAction } from '../../Service/Action/signUpAction';
import { FaFacebook } from "react-icons/fa";


function Login() {
  const{islogin} = useSelector(state => state.signUpReducer)

    console.log("uigu", islogin);
    const [signIn, setSignIn] = useState({
      email: '',
      password: '',
  
    })
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setSignIn({ ...signIn, [name]: value });
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
    
      await dispatch(signInAction(signIn.email, signIn.password))
  
  
      setSignIn({
        email: '',
        password: '',
      });
    }

    const heandalGoogle =()=>{
      dispatch(googleSignin())
  }
  
    if (islogin) {
      navigate('/desh')
    } else {
      return (
        <>
  
          <section>
            <div className="container py-2">
              <div className="row">
                <div className="col d-flex">
                  <div className="col-4"></div>
                  <div className="col-4 text-center BacBLur border border-2 border-danger rounded px-3 pt-5 pb-5">
                    <div>
                      <h2 className='text-danger fw-bold'>Login</h2>
                    </div>
  
                    <Form className='py-2' onSubmit={handleSubmit}>
  
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" name='email' value={signIn.email} onChange={handleChange} />
                      </Form.Group>
  
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="password" name='password' value={signIn.password} onChange={handleChange} />
                      </Form.Group>
                      <p className='text-primary fw-bold'>
                        Forgot Password ?
                      </p>
                      <Button variant="danger" type="submit" className='px-5'>
                        Login
                      </Button>
                    </Form>
                    <p className='fw-bold text-black'>
                      Don't have an account ? <NavLink to='/SignUP'> sign Up</NavLink>
                    </p>
                    <p className='text-danger'>
                      _____________________ OR _____________________
                    </p>
                    <div className="col gap-4 d-flex">
                      <Button className='bg-light text-primary border-danger'><FaFacebook /> Login With FB  </Button>
                      <Button className='bg-light text-warning border-danger' onClick={heandalGoogle}> Login with Google</Button>
                    </div>
                  </div>
                  <div className="col-4"></div>
                </div>
  
              </div>
            </div>
          </section>
  
        </>
      );
    }
}

export default Login
