import { useCallback, useEffect, useRef, useState } from 'react';
import usePageTitle from '../usePageTitle.js';
import Reveal from '../components/Reveal.jsx';
import BookBand from '../components/BookBand.jsx';
import { ChevronIcon, CloseIcon, WhatsAppIcon } from '../components/Icons.jsx';
import { WORK, waLink } from '../data.js';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'tattoos', label: 'Tattoos' },
  { id: 'shop', label: 'The shop' },
];

export default function Work() {
  usePageTitle('Work');
  const [filter, setFilter] = useState('all');
  const [active, setActive] = useState(null); // index into the visible list
  const items = WORK.filter((w) => filter === 'all' || w.group === filter);
  const opener = useRef(null);
  const closeBtn = useRef(null);

  const close = useCallback(() => {
    setActive(null);
    opener.current?.focus();
  }, []);
  const step = useCallback(
    (d) => setActive((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeBtn.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, step]);

  const current = active === null ? null : items[active];
  const askText = current
    ? current.group === 'tattoos'
      ? `Hi Motown Tattoo Company! 👋 I saw your ${current.title.toLowerCase()} piece (${current.style}) on your website and I'd like something similar.\n\nMy idea: \nPlacement: \nApproximate size: \nPreferred day: `
      : undefined
    : undefined;

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1 className="display display--xl">The work</h1>
          <p className="lede">Realism in black and grey and in color, plus a look around the shop.</p>
          <div className="filters" role="group" aria-label="Filter gallery">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`filter ${filter === f.id ? 'is-on' : ''}`}
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-label="Gallery">
        <div className="container">
          <ul className="masonry">
            {items.map((w, i) => (
              <Reveal as="li" key={w.id} delay={(i % 3) * 80} className="masonry__item">
                <button
                  type="button"
                  onClick={(e) => {
                    opener.current = e.currentTarget;
                    setActive(i);
                  }}
                  aria-label={`Enlarge: ${w.title}`}
                >
                  <img src={w.src} alt={w.alt} loading="lazy" />
                  <span className="masonry__cap">
                    {w.title}
                    {w.style && <small>{w.style}</small>}
                  </span>
                </button>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.title} onClick={close}>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <button ref={closeBtn} type="button" className="lightbox__close" onClick={close} aria-label="Close image">
              <CloseIcon />
            </button>
            <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => step(-1)} aria-label="Previous image">
              <ChevronIcon dir="left" />
            </button>
            <img key={current.id} src={current.src} alt={current.alt} />
            <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => step(1)} aria-label="Next image">
              <ChevronIcon dir="right" />
            </button>
            <div className="lightbox__bar">
              <p>
                <strong>{current.title}</strong>
                {current.style && <span> · {current.style}</span>}
              </p>
              {current.group === 'tattoos' && (
                <a className="btn btn--wa btn--sm" href={waLink(askText)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon width={18} height={18} />
                  Ask for something similar
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <BookBand image="/images/neon-window.png" alt="" />
    </>
  );
}
