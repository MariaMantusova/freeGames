import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GamePage from '../pages/GamePage/GamePage';
import MainPage from '../pages/MainPage/MainPage';
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/game/:id" element={<GamePage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}

export default App;
