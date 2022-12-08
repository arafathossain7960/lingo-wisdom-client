import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { LingoAuthContext } from '../../../Context/UserContext';

const Register = () => {
  const {googleSignIn,githubSignIn, emailAndPasswordSign ,user}=useContext(LingoAuthContext)

// google sign in 
const signWithGoogle =()=>{
  googleSignIn()
  .then(result =>{
    console.log(result)
  })
  .catch(error =>{
    console.log('google sign in error', error.massage)
  })
}
// github sign in
const signWithGithub =()=>{
  githubSignIn()
  .then(result =>{
    console.log(result)
  })
  .catch(error =>{
    console.log('github sign in error', error.massage)
  })
}
 
// Email and password sign in 
const emailAndPasswordSignUser =(e)=>{
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  emailAndPasswordSign(email, password)
  .then(result =>{
    console.log(result.user)
  })
  .catch(error =>{
    console.log(error.massage)
  })
  e.target.reset();
}
    return (
        <div className='mx-5 my-5 w-50 mx-auto'>
      
            <h3>Start your journey with <span className='text-primary'>Sign Up</span></h3>
        <Form onSubmit={emailAndPasswordSignUser}>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="">Full name</Form.Label>
          <Form.Control name='fullName'  type='text' required placeholder="Enter full name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="">Email</Form.Label>
          <Form.Control name='email' type='email' required   placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="">Password</Form.Label>
          <Form.Control name='password'  required  type='password' placeholder="Enter Password" />
        </Form.Group>

        
        
            <p>I have an account. <Link to='/login'> Login</Link></p>
        <Button type="submit">Submit</Button>
      </fieldset>
      <hr />
      <small className='ml-5'>or</small>
      <br />
      <Button className='mb-2' onClick={signWithGoogle} >Sign in with google</Button>
      <br />
      <Button onClick={signWithGithub} >Sign in with Github</Button>
      
    </Form>
        </div>
    );
};

export default Register;