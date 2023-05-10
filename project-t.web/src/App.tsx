import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Card from './Card';
import FormBlock from './FormBlock';
import LoginForm from './LoginForm';

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Menu />
          <Card />
          <FormBlock />
          <LoginForm />
        </header>
      </div>
  );
}

export default App;
