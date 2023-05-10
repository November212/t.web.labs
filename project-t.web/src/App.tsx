import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBlock from './Menu';
import Card from './Card';
import FormBlock from './FormBlock';
import LoginForm from './LoginForm';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  useEffect(() => {
    const users = [
      { username: 'user1', password: 'pass1' },
      { username: 'user2', password: 'pass2' },
      { username: 'user3', password: 'pass3' },
    ];
    localStorage.setItem('users', JSON.stringify(users));
  }, []);

  return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <MenuBlock />
            <div>
              <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/card" element={<Card />} />
              <Route path="/form" element={<FormBlock />} />
              </Routes>
            </div>
          </header>
        </div>
      </BrowserRouter>
  );
}

export default App;
