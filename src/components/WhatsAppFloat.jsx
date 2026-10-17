import { useEffect, useState } from 'react';
import { waLink } from '../data.js';
import { CloseIcon, WhatsAppIcon } from './Icons.jsx';

const KEY = 'motown-welcome-dismissed';

export default function WhatsAppFloat() {
  const [bubble, setBubble] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try { dismissed = sessionStorage.getItem(KEY) === '1'; } catch { /* storage unavailable */ }
    if (dismissed) return undefined;
    const t = setTimeout(() => setBubble(true), 2800);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setBubble(false);
    try { sessionStorage.setItem(KEY, '1'); } catch { /* storage unavailable */ }
  };

  return (
    <div className="wa-float">
      {bubble && (
        <aside className="wa-welcome" aria-label="Welcome message">
          <button type="button" className="wa-welcome__close" onClick={close} aria-label="Dismiss welcome message">
            <CloseIcon width={18} height={18} />
          </button>
          <p className="wa-welcome__from">Motown Tattoo Company</p>
          <p className="wa-welcome__msg">
            Welcome! 👋 Thinking about a tattoo? Message us on WhatsApp to book. Tell us your idea, where you want it
            and roughly how big.
          </p>
          <a className="btn btn--wa btn--sm" href={waLink()} target="_blank" rel="noopener noreferrer" onClick={close}>
            <WhatsAppIcon width={18} height={18} />
            Start chat
          </a>
        </aside>
      )}
      <a className="wa-fab" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Book your tattoo on WhatsApp">
        <span className="wa-fab__label">Book on WhatsApp</span>
        <span className="wa-fab__icon">
          <WhatsAppIcon width={30} height={30} />
        </span>
      </a>
    </div>
  );
}
