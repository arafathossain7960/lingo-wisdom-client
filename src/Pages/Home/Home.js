import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LingoAuthContext } from '../../Context/UserContext';
import './Home.css';
import HomeHeader from './HomeHeader/HomeHeader';


const Home = () => {
    const person = useContext(LingoAuthContext);
    const homeTitle = ['Arabic', 'English', 'Bengali', 'Japanese', 'Korean', 'Chinese'];

    return (
        <div>
           <HomeHeader></HomeHeader>

         <div className='homeTitle'>

            <Link to="/course">Let's start your language learning</Link>

         </div>
           
        </div>
    );
};

export default Home;