import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GamePage from '../pages/GamePage/GamePage';
import MainPage from '../pages/MainPage/MainPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/game/:id" element={<GamePage/>}/>
        </Routes>
    )
}

export default App;
