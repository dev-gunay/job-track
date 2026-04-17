import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'


function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
      
      <h1 className="text-red-500 text-3xl">
      Tailwind Test
    </h1>
    </>
  );
}

export default App;