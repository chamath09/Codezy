/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import ScrollManager from './components/ScrollManager';

export default function App() {
  return (
    <Router>
      <ScrollManager />
      <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-brand-500/30 selection:text-brand-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
