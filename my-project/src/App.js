import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.tsx';
import Ebout from './pages/ebaut.tsx';
import Services from './pages/services.tsx';
import Contact from './pages/contact.tsx';
import News from './pages/News.tsx';
import BlogID from './pages/blogId.tsx';
import Galery from './pages/galery.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about/" element={<Ebout />} />
                        <Route path="/services/" element={<Services />} />
                        <Route path="/contact/" element={<Contact />} />
                        <Route path="/news/" element={<News />} />
                        <Route path="/news/:id" element={<BlogID />} />
                        <Route path="/galery" element={<Galery />} />
                    </Routes>
                    <ReactQueryDevtools initialIsOpen={false} />
                </Router>
            </RecoilRoot>
        </QueryClientProvider>
    );
}

export default App;
