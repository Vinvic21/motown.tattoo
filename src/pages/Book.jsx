import { useMemo, useState } from 'react';
import usePageTitle from '../usePageTitle.js';
import Reveal from '../components/Reveal.jsx';
import { WhatsAppIcon } from '../components/Icons.jsx';
import { waLink } from '../data.js';

const SERVICES = ['Tattoo', 'Cover-up', 'Memorial tattoo', 'Something else'];
const SIZES = ['Small (palm size or less)', 'Medium (hand to forearm)', 'Large (half sleeve or bigger)', 'Not sure yet'];

export default function Book() {
  usePageTitle('Book');
  const [f, setF] = useState({ name: '', service: SERVICES[0], idea: '', placement: '', size: SIZES[3], day: '', first: false });
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  const message = useMemo(() => {
    const hello = f.name.trim() ? `Hi Motown Tattoo Company! 👋 I'm ${f.name.trim()}.` : 'Hi Motown Tattoo Company! 👋';
    const lines = [
      `${hello} I'd like to book: ${f.service.toLowerCase()}.`,
      '',
      `My idea: ${f.idea.trim() || '(I will describe it here)'}`,
      `Placement: ${f.placement.trim() || '(not sure yet)'}`,
      `Approximate size: ${f.size}`,
      `Preferred day: ${f.day.trim() || 'Flexible'}`,
    ];
    if (f.first) lines.push('', 'This will be my first tattoo.');
    lines.push('', "I'll send reference photos in this chat. What's available?");
    return lines.join('\n');
  }, [f]);

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1 className="display display--xl">Book your tattoo</h1>
          <p className="lede">
            All bookings go through WhatsApp. Fill in what you know and we’ll write the message for you, or skip
            straight to the chat.
          </p>
        </div>
      </section>

      <section className="section section--tight" aria-label="Booking message builder">
        <div className="container book">
          <Reveal className="book__form">
            <h2 className="h3">Your details</h2>
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" type="text" autoComplete="name" value={f.name} onChange={set('name')} placeholder="First name is fine" />
            </div>
            <div className="field">
              <label htmlFor="service">What are you after?</label>
              <select id="service" value={f.service} onChange={set('service')}>
                {SERVICES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="idea">Your idea</label>
              <textarea id="idea" rows="3" value={f.idea} onChange={set('idea')} placeholder="Subject, style, anything that matters to you" />
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="placement">Where on your body?</label>
                <input id="placement" type="text" value={f.placement} onChange={set('placement')} placeholder="e.g. forearm" />
              </div>
              <div className="field">
                <label htmlFor="size">Size</label>
                <select id="size" value={f.size} onChange={set('size')}>
                  {SIZES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="day">Preferred day</label>
              <input id="day" type="text" value={f.day} onChange={set('day')} placeholder="e.g. a Saturday afternoon" />
            </div>
            <label className="check">
              <input type="checkbox" checked={f.first} onChange={set('first')} />
              <span>This is my first tattoo</span>
            </label>
          </Reveal>

          <Reveal delay={120} className="book__preview">
            <h2 className="h3">Your message</h2>
            <div className="chat" aria-live="polite">
              <div className="chat__bar">
                <span className="chat__avatar" aria-hidden="true">M</span>
                <span>Motown Tattoo Company</span>
              </div>
              <div className="chat__body">
                <p className="chat__bubble">{message}</p>
              </div>
            </div>
            <a className="btn btn--wa btn--lg btn--block" href={waLink(message)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon width={22} height={22} />
              Send on WhatsApp
            </a>
            <p className="muted small">
              This opens WhatsApp with the message ready to send. You can edit it there and attach reference photos.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
