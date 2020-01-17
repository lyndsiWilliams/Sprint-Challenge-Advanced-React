import React from 'react';
import './App.css';

import { Players } from './components/Players';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <button onClick={toggleMode}>Light mode</button>
      <Players />
    </div>
  );
}

export default App;
