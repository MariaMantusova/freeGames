import React from 'react';
// import {Button, ConfigProvider, Input, Space, theme} from 'antd';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import GamePage from './components/GamePage/GamePage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/" element={<GamePage/>}/>
        </Routes>
    )
}

export default App;
