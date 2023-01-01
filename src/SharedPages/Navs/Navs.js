import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LingoAuthContext } from '../../Context/UserContext';
import logo from '../../img/logo.png';
import './Naves.css';

const Navs = () => {
  const {user, loginOutUser, toggleTheme,theme }=useContext(LingoAuthContext);
  console.log(user)
    return (
        <div className='mainNavbar py-2 d-flex align-items-center justify-content-evenly '>
          <span>
            <img className='logoImg' src={logo} alt="" />
            <b>Lingo <span className='secondTitle'>Wisdom</span></b>
          </span>
          <Link to='/home'>Home</Link> 
          <Link to='/course'>Course</Link> 
          <Link to='/blogs'>Blogs</Link> 
         {
           user?.email ? <>
           <Link onClick={loginOutUser }>Log Out</Link>
           <Link ><span>{user?.email}</span></Link>
           </>
          :<>
         
           <Link to='/login'>Login</Link> 
          </>
           
         }
        <Link onClick={toggleTheme}>{theme}</Link>
        </div>
    );
};

export default Navs;