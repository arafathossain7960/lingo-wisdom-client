import React, { useContext } from 'react';
import { LingoAuthContext } from '../../Context/UserContext';
import './Home.css';
import HomeHeader from './HomeHeader/HomeHeader';

const Home = () => {
    const person = useContext(LingoAuthContext);

    return (
        <div>
           <HomeHeader></HomeHeader>
           <h4>name: {person.name}</h4>
           <h4>state: {person.state}</h4>
           
        </div>
    );
};

export default Home;