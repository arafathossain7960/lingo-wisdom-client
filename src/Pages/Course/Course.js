import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import './Course.css';


const Course = () => {
    const languageTitle = useLoaderData();
    return (
        <div className='m-2 d-flex justify-content-between'>
        

        <div className='sidebar-width mx-3'>
        <Sidebar></Sidebar>
        </div>
        <div className='w-75 container '>
     <div className='row'>
    
    
    {
        languageTitle.map((language, index) => {
           return <div className='courseBodyTitle m-3 col-md-2 col-lg-3 col-sm-1'>
          
            <Link to={`/course-details/${language.id}`}>
            <div className='courseBody'>
            <p><b>Lingo <span className='homeHeaderTitle'>Wisdom</span></b></p>
            <h3 key={index}>{language.languageName } </h3>
            </div>
            </Link>
        
           </div>
        })
        
      }
    
     </div>
        </div>
        </div>
    );
};

export default Course;