import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import GamePage from './GamePage/GamePage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/game" element={<GamePage/>}/>
        </Routes>
    )
}

export default App;
