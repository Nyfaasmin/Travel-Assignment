import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/second" element={<SecondPage />} />
            </Routes>
        </Router>
    );
}

export default App;
