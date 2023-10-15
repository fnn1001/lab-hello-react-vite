import React from 'react';
import './App.css'; // Import the main CSS file

import Header from "./assets/components/Header";
import Sidebar from "./assets/components/sidebar";
import Welcome from "./assets/components/Welcome";
import Button from "./assets/components/button";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      <Welcome></Welcome>
      <Button></Button>
      <Footer></Footer>
    </div>
  );
}

export default App;
