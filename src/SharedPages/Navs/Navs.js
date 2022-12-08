import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LingoAuthContext } from '../../Context/UserContext';
import logo from '../../img/logo.png';
import './Naves.css';

const Navs = () => {
  const {user, loginOutUser }=useContext(LingoAuthContext)
    return (
        <div className='mainNavbar py-2 d-flex align-items-center justify-content-evenly '>
          <span>
            <img className='logoImg' src={logo} alt="" />
            <b>Lingo <span className='secondTitle'>Wisdom</span></b>
          </span>
          <Link to='/home'>Home</Link> 
          <Link to='/course'>Course</Link> 
          <Link to='/faq'>FAQ</Link> 
          <Link to='/blogs'>Blogs</Link> 
         {
           user?.email ? <>
           <Link onClick={loginOutUser }>Log Out</Link>
           <Link ><span>{user?.email}</span></Link>
           </>
          :<>
         
           <Link to='/login'>Login</Link> 
           <Link to='/register'>Registration</Link>
          </>
           
         }
        
        </div>
    );
};

export default Navs;