import React from 'react';
import '../Home.css';

const HomeHeader = () => {
    return (
        <div className='homeHeader'>
          <div className='homeHeaderInfo'>
          <h1>Welcome to <b>Lingo <span className='homeHeaderTitle'>Wisdom</span>.com</b></h1>
            <p>It's fun fare language learning platform</p>
            
          </div>
        </div>
    );
};

export default HomeHeader;