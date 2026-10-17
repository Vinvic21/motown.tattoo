import { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import Home from './pages/Home.jsx';
import Work from './pages/Work.jsx';
import Visit from './pages/Visit.jsx';
import Book from './pages/Book.jsx';

export default function App() {
  const { pathname } = useLocation();

  // Jump to the top instantly on every page change (no smooth scroll),
  // so the new page's sections are in view and reveal straight away.
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.style.scrollBehavior = '';
  }, [pathname]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main" key={pathname} className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/book" element={<Book />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}