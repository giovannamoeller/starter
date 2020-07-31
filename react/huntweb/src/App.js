import React from 'react';
import Header from './components/Header';
import Main from './pages/main';
import './styles.css';
import Routes from './routes'

function App() {
  return (
    <div className = "app">
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
