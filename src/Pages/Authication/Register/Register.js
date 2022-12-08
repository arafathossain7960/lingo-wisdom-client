import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { LingoAuthContext } from '../../../Context/UserContext';

const Register = () => {
  const {googleSignIn, user}=useContext(LingoAuthContext)
  console.log(user)
    return (
        <div className='mx-5 my-5 w-50 mx-auto'>
      
            <h3>Start your journey with <span className='text-primary'>Sign Up</span></h3>
          <Form>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="">Full name</Form.Label>
          <Form.Control  type='text' required placeholder="Enter full name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="">Email</Form.Label>
          <Form.Control type='email' required   placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="">Password</Form.Label>
          <Form.Control  required  type='password' placeholder="Enter Password" />
        </Form.Group>

        
        
            <p>I have an account. <Link to='/login'> Login</Link></p>
        <Button type="submit">Submit</Button>
      </fieldset>
      <hr />
      <small>or</small>
      <Button onClick={googleSignIn} >Sign in with google</Button>
      
    </Form>
        </div>
    );
};

export default Register;