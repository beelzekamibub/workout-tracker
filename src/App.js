import './App.css';
import { useState } from 'react';
import  Display from './components/Display';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
const App=()=> {
  const [count,setCount]=useState(0);
  return (
    <div className="App">
      <Navbar></Navbar>

      <Outlet />
      <hr></hr>
      {/* <Display></Display> */}
    </div>
  );
}

export default App;
