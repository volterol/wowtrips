import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import RightPanel from './components/rightpanel';
import Footer from './components/footer';
import Main from './components/main';        
import Article from './components/article'; 
import Page from './components/page';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="main-content">
                    <div className="left-content">
                        <Routes>
                            {/* Home route: Main component without filtering */}
                            <Route path="/" element={<Main />} />

                            {/* Route for a specific category */}
                            <Route path="/category/:categoryId" element={
                                <Main categoryId={1} /> // Pass categoryId dynamically based on route params
                            } />

                            {/* Route for a specific tag */}
                            <Route path="/tag/:tagId" element={
                                <Main tagId={1} /> // Pass tagId dynamically based on route params
                            } />

                            {/* Example of specific categories or tags with hardcoded values */}
                            <Route path="/cheap-flights" element={<Main categoryId={7} />} />
                            <Route path="/travel-tips" element={<Main categoryId={6} />} />

                            {/* Route for individual article pages */}
                            <Route path="/:slug" element={<Article />} />

                            {/* Route for specific page slug */}
                            <Route path="/page/:slug" element={<Page />} />
                        </Routes>
                    </div>
                    <div className="right-content">
                        <RightPanel />
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
