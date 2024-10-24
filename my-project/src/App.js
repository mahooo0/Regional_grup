import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.tsx';
import Ebout from './pages/ebaut.tsx';
import Services from './pages/services.tsx';
import Contact from './pages/contact.tsx';
import News from './pages/News.tsx';
import Blog from './pages/blog.tsx';
import BlogID from './pages/blogId.tsx';
import Galery from './pages/galery.tsx';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/" element={<Ebout />} />
                <Route path="/services/" element={<Services />} />
                <Route path="/contact/" element={<Contact />} />
                <Route path="/news/" element={<News />} />
                {/* <Route path="/blog/" element={<Blog />} /> */}
                <Route path="/news/:id" element={<BlogID />} />
                <Route path="/galery" element={<Galery />} />
            </Routes>
        </Router>
    );
}

export default App;
