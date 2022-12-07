import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPages/Footer/Footer';
import Navs from '../SharedPages/Navs/Navs';

const Main = () => {
    return (
        <>
            <Navs></Navs>
          <Outlet></Outlet>  
          <Footer></Footer>
        
        </>
    );
};

export default Main;