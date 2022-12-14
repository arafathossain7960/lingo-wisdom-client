import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { LingoAuthContext } from '../../../Context/UserContext';


const Login = () => {
  const {loginUser}=useContext(LingoAuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const loginWithEmailAndPassword =(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
    .then(result =>{
      console.log(result.user)
      navigate(from, { replace: true });
      
    })
    .then(error => {
      console.log('this is error from email and password login', error.massage)
    })



  }
    return (
        <div className='mx-5 my-5 w-50 mx-auto'>
            <h3>Please!<span className='text-primary'>  Login</span></h3>
          <Form onSubmit={loginWithEmailAndPassword}>
      <fieldset>
        
        <Form.Group className="mb-3">
          <Form.Label htmlFor="">Email</Form.Label>
          <Form.Control name='email' type='email' required   placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="">Password</Form.Label>
          <Form.Control name='password'  required  type='password' placeholder="Enter Password" />
        </Form.Group>

        
        
            <p>I don't have account, please.. <Link to='/register'> Register</Link></p>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
        </div>
    );
};

export default Login;