import { waLink } from '../data.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function WhatsAppButton({ text, children = 'Book on WhatsApp', className = '', size = '' }) {
  return (
    <a
      className={`btn btn--wa ${size ? `btn--${size}` : ''} ${className}`}
      href={waLink(text)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon width={20} height={20} />
      {children}
    </a>
  );
}
