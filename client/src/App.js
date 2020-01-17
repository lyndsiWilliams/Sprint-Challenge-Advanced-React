import React from 'react';
import './App.css';

import Players from './components/Players';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  console.log(document.body);
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <button data-testid='drk-btn' onClick={toggleMode}>Dark mode</button>
      <Players />
    </div>
  );
}

export default App;