import React from 'react';
import './App.css';
import './css/common.css';
import './css/media.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Portfolio />} />
          {/* <Route path="/recipes" element={<Recipes />} />
          <Route path="/blog" element={<Blog />} /> */}
        </Routes>
        <Footer />
      </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}
