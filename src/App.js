import React, { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';
import  { LingoAuthContext } from './Context/UserContext';
import './App.css';



const App = () => {
  const {theme}=useContext(LingoAuthContext);
  const lightMood ={

    background:'red',

  }
  const darkMood ={
    background:'lightblue',
    
  }
  return (
<div id={theme}>
    <RouterProvider router={router} >
        
     
    </RouterProvider>
    </div>
  );
};

export default App;