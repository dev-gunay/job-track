import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Footer from './components/Footer.jsx';


function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Footer />
    </>
  );
}

export default App;