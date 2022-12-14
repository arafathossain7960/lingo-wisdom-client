import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import './Course.css';


const Course = () => {
    const languageTitle = useLoaderData();
    return (
        <div className='m-2 d-flex justify-content-between'>
        

        <div className='sidebar-width mx-3'>
        <Sidebar></Sidebar>
        </div>
        <div className='w-75'>
      {
        languageTitle.map((language, index) => {
           return <div className='courseBody'>
            <div>
            <p><b>Lingo <span className='homeHeaderTitle'>Wisdom</span></b></p>
            <h3 key={index}>{language.languageName } </h3>
            </div>
           </div>
        })
        
      }
        </div>
        </div>
    );
};

export default Course;