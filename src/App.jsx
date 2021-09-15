import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SettingsScreen from './Screens/SettingsScreen';
import SignupScreen from './Screens/SignupScreen';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={< LoginScreen />}/>
                <Route path="/signup" element={< SignupScreen />}/>
                <Route path ="/" element ={<HomeScreen/>}/>
                <Route path="/account" element={< ProfileScreen />}/>
                <Route path="/account/settings" element={< SettingsScreen />}/>
            </Routes>
        </div>
    );
}

export default App;
