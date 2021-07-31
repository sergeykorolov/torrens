import React from 'react';
import main from '../images/main.jpg';

const Home = () => {
   return (
       <div className="container">
          <h1>Home</h1>
          <div className="home-image">
             <img src={main} alt="home"/>
          </div>
       </div>
   )
};

export default Home;
