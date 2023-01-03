import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const [language, setLanguage]=useState([]);

    useEffect(()=>{
        fetch('https://lingo-wisdom-server-side.vercel.app/language')
        .then(res => res.json())
        .then(data => setLanguage(data))
    },[])
  
    return (
        <div className='sidebar px-3 py-2 '>
            {
                language.map(lingo => <p key={lingo.id}>
                    <Link to={`/course-details/${lingo.id}`}>{lingo.languageName}</Link>
                </p>)
            }
        </div>
    );
};

export default Sidebar;
