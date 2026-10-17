import { SHOP, waLink } from '../data.js';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './Icons.jsx';

export default function Socials({ className = '' }) {
  return (
    <ul className={`socials ${className}`}>
      <li>
        <a href={SHOP.instagram} target="_blank" rel="noopener noreferrer" aria-label="Motown Tattoo Company on Instagram">
          <InstagramIcon />
        </a>
      </li>
      <li>
        <a href={SHOP.facebook} target="_blank" rel="noopener noreferrer" aria-label="Motown Tattoo Company on Facebook">
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Book on WhatsApp">
          <WhatsAppIcon />
        </a>
      </li>
    </ul>
  );
}
