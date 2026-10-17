import { Link } from 'react-router-dom';
import { SHOP } from '../data.js';
import { PhoneIcon, PinIcon } from './Icons.jsx';
import Socials from './Socials.jsx';
import OpenStatus from './OpenStatus.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__brand">Motown Tattoo Company</p>
          <p className="muted">Downtown Detroit. Walk-ins welcome, bookings on WhatsApp.</p>
          <Socials className="footer__socials" />
        </div>
        <div>
          <h2 className="footer__h">Find us</h2>
          <p className="icon-line">
            <PinIcon width={18} height={18} />
            <a href={SHOP.mapsLink} target="_blank" rel="noopener noreferrer">{SHOP.address}</a>
          </p>
          <p className="icon-line">
            <PhoneIcon width={18} height={18} />
            <a href={SHOP.phoneHref}>{SHOP.phoneDisplay}</a>
          </p>
          <OpenStatus />
        </div>
        <div>
          <h2 className="footer__h">Pages</h2>
          <ul className="footer__links">
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/visit">Visit and hours</Link></li>
            <li><Link to="/book">Book a tattoo</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer__legal">
        <p>© {new Date().getFullYear()} Motown Tattoo Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
