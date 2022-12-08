import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [language, setLanguage]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/language')
        .then(res => res.json())
        .then(data => setLanguage(data))
    },[])
  
    return (
        <div>
            {
                language.map(lingo => <p key={lingo.id}>
                    <Link to={`/course-details/${lingo.id}`}>{lingo.languageName}</Link>
                </p>)
            }
        </div>
    );
};

export default Sidebar;
