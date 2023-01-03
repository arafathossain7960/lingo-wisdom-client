import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link,  useParams } from 'react-router-dom';
import { LingoAuthContext } from '../../../Context/UserContext';
import './CourseDetails.css';

import coursePdf from '../../../SharedPages/Course.pdf';
const CourseDetails = () => {
    const [languageDetails, setLanguageDetails]=useState({});
    const {id} = useParams();
    const {user, theme }= useContext(LingoAuthContext);
    useEffect(()=>{
        fetch(`https://lingo-wisdom-server-side.vercel.app/details/${id}`)
        .then(res => res.json())
        .then(data => setLanguageDetails(data))
    },[])

    // handle privet route 
  


    const {title, description, photo_url,courseName,feature,certification}= languageDetails;
    console.log(languageDetails)
    return (
        <div className='mx-auto p-5'>
            <div className='courseDetailsHeader w-100 py-5  text-light text-center'>
                <h3>Let's explore <span>{title}</span> with fun</h3>
               <a href={coursePdf} download="courseDpd.pdf"> <button>Download course feature</button></a>

            </div>
         <div className={theme === 'light' && 'courseTextWhite'}>
          <img src={photo_url} alt="" />
           <h4 >Course Name : {courseName} </h4>
            <h5><b>Description :</b> </h5>
            <p>{description}</p>
            <h6>Course features</h6>
           <ul>
            
           </ul>
           <Link to="/proAccess"> <Button>Get pro access</Button></Link>
         </div>
        </div>
    );
};

export default CourseDetails;