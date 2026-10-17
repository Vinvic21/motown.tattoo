import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CloseIcon, MenuIcon, WhatsAppIcon } from './Icons.jsx';
import { waLink } from '../data.js';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/visit', label: 'Visit' },
  { to: '/book', label: 'Book' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`header ${scrolled || open ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="brand" aria-label="Motown Tattoo Company, home">
          <span className="brand__main">Motown</span>
          <span className="brand__sub">Tattoo Company</span>
        </Link>

        <nav id="site-nav" className={`nav ${open ? 'nav--open' : ''}`} aria-label="Main">
          <ul>
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'is-active' : '')}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a className="btn btn--wa nav__cta" href={waLink()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon width={20} height={20} />
            Book on WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}
