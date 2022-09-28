import './App.css';
import React from 'react'
import { GlobalState } from './global/GlobalState';
import { Router } from './routes/Router';

const App = () => {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  )
};

export default App;
