import './App.css';
import { useState } from 'react';

const App=()=> {
  const [count,setCount]=useState(0);
  return (
    <div className="App">
      <h1 class="display-6">Workout Tracker</h1>
    </div>
  );
}

export default App;
