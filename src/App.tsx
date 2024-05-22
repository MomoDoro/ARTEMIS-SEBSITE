// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import ModelScreen from "./components/ModelScreen";

const NotFound: React.FC = () => {
  return <div>404 Not Found</div>;
};

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="" element={<HomeScreen />} />
          <Route path="/Home" element={<HomeScreen />} />
          <Route path="/About" element={<AboutScreen />} />
          <Route path="/Model" element={<ModelScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;


/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/