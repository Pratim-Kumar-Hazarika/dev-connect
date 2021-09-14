import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
    </Routes>
    </div>
  );
}

export default App;
