import React from 'react';
import { Link } from 'react-router-dom';
import './Naves.css';

const Navs = () => {
    return (
        <>
          <Link to='/home'>Home</Link> 
          <Link to='/course'>Course</Link> 
          <Link to='/faq'>FAQ</Link> 
          <Link to='/blogs'>Blogs</Link> 
          <Link to='/login'>Login</Link> 
        
        </>
    );
};

export default Navs;