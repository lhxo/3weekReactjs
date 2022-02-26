import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import App from './routes/App';
import About from './routes/About';
import News from './routes/News';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>,
    
    document.querySelector('#root')
);