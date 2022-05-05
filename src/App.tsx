import './App.css';
import React from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Descriptions from './components/Descriptions';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App text-white overflow-hidden w-[100%]">
      <Header/>
      <Hero/>
      <Descriptions/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
