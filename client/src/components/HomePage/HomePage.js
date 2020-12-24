import React from 'react';
import Recipes from '../../containers/Recipes';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function HomePage() {
    return (
      <div className="App">
        <Header></Header>
        <NavBar></NavBar>
        <Recipes></Recipes>
        <Footer></Footer>
      </div>
    );
  }
  
  export default HomePage;
  
