import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, Navigate, useParams } from 'react-router-dom';
import { LingoAuthContext } from '../../../Context/UserContext';
import ProAccess from '../ProAccess/ProAccess';

const CourseDetails = () => {
    const [languageDetails, setLanguageDetails]=useState({});
    const {id} = useParams();
    const {user }= useContext(LingoAuthContext);
    useEffect(()=>{
        fetch(`http://localhost:5000/details/${id}`)
        .then(res => res.json())
        .then(data => setLanguageDetails(data))
    },[])

    // handle privet route 
  


    const {title, description}= languageDetails;
    return (
        <div className='mx-auto p-5'>
            <div className='bg-dark w-100 py-5 my-5 text-light text-center'>
                <h1>this is the course details header</h1>

            </div>
            
            <h1>{title}</h1>
            <h3><b>Description :</b>  {description}</h3>
          
            <br /><br />
           <Link to="/proAccess"> <Button>Get pro access</Button></Link>
        </div>
    );
};

export default CourseDetails;