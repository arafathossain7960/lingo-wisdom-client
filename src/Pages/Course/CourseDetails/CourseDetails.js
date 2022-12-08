import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const [languageDetails, setLanguageDetails]=useState({});
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/details/${id}`)
        .then(res => res.json())
        .then(data => setLanguageDetails(data))
    },[])
    const {title, img}= languageDetails;
    return (
        <div>
            <h1>this is a details pages {id}</h1>
            <h1>{title}</h1>
            <h4>{}</h4>
            
        </div>
    );
};

export default CourseDetails;