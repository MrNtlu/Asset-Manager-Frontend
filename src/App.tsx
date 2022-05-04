import './App.css';
import React, { useRef } from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Descriptions from './components/Experience';
import Download from './components/Download';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App text-white overflow-hidden" style={{ backgroundImage: `url(${require("../src/img/bg.jpeg")})`}}>
      <Header/>
      <Hero/>
      <Descriptions/>
      <Pricing/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
