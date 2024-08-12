// src/App.js
import React from 'react';
import Home from './pages/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './styles/index.css';
import './styles/hover.css';

function App() {
    return (
        <React.StrictMode>
            <div>
                <Header />
                <Home />
                <Footer />
            </div>
        </React.StrictMode>
    );
}

export default App;