import { Link } from 'react-router-dom';
import usePageTitle from '../usePageTitle.js';
import Reveal from '../components/Reveal.jsx';
import OpenStatus from '../components/OpenStatus.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import BookBand from '../components/BookBand.jsx';
import { ArrowIcon, ClockIcon, PinIcon, StarIcon } from '../components/Icons.jsx';
import { REVIEWS, REVIEW_TOPICS, SHOP, WORK } from '../data.js';

const STEPS = [
  { title: 'Tap Book on WhatsApp', body: 'A message is already written for you. Open it and fill in the blanks.' },
  { title: 'Tell us the idea', body: 'Add your design, where it goes and roughly how big. Reference photos help.' },
  { title: 'We reply to set a time', body: 'We message back on WhatsApp to agree a day. Walk-ins are welcome too.' },
];

export default function Home() {
  usePageTitle('');
  const featured = WORK.filter((w) => w.group === 'tattoos');
  const [lead, ...others] = REVIEWS;

  return (
    <>
      <section className="hero">
        <img className="hero__img" src="/images/lobby.png" alt="" />
        <div className="hero__shade" />
        <div className="container hero__body">
          <h1 className="neon" aria-label="Motown Tattoo & Company">
            <span className="neon__top" aria-hidden="true">MOTOWN</span>
            <span className="neon__script" aria-hidden="true">Tattoo</span>
            <span className="neon__bottom" aria-hidden="true">&amp; COMPANY</span>
          </h1>
          <p className="hero__lead">
            Black and grey, color realism and custom pieces in a brick-and-neon studio on Beaubien Street, Downtown
            Detroit.
          </p>
          <div className="hero__actions">
            <WhatsAppButton size="lg" />
            <Link className="btn btn--ghost btn--lg" to="/work">
              See the work <ArrowIcon width={18} height={18} />
            </Link>
          </div>
          <p className="hero__note">Walk-ins welcome. To save your spot, book on WhatsApp.</p>
        </div>
      </section>

      <section className="facts" aria-label="Shop details">
        <ul className="container facts__list">
          <li><StarIcon width={18} height={18} className="facts__star" /> {SHOP.rating} on Google · {SHOP.reviewCount} reviews</li>
          <li><ClockIcon width={18} height={18} /> <OpenStatus /></li>
          <li><PinIcon width={18} height={18} /> {SHOP.address}</li>
        </ul>
      </section>

      <section className="section" aria-labelledby="work-title">
        <div className="container">
          <Reveal className="section__head">
            <h2 id="work-title" className="display">Fresh from the chair</h2>
            <Link className="link-arrow" to="/work">Full gallery <ArrowIcon width={18} height={18} /></Link>
          </Reveal>
          <ul className="feature-grid">
            {featured.map((w, i) => (
              <Reveal as="li" key={w.id} delay={i * 90} className="feature">
                <Link to="/work" aria-label={`${w.title}, ${w.style}. Open gallery`}>
                  <img src={w.src} alt={w.alt} loading="lazy" />
                  <span className="feature__cap">
                    <strong>{w.title}</strong>
                    <span>{w.style}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--teal" aria-labelledby="how-title">
        <div className="container">
          <Reveal>
            <h2 id="how-title" className="display">Booking takes one message</h2>
          </Reveal>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 110} className="step">
                <span className="step__n" aria-hidden="true">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="steps__cta">
            <WhatsAppButton size="lg" />
            <Link className="link-arrow" to="/book">Build your message first <ArrowIcon width={18} height={18} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="reviews-title">
        <div className="container">
          <Reveal>
            <h2 id="reviews-title" className="display">What clients say</h2>
            <p className="muted lede">
              {SHOP.rating} stars from {SHOP.reviewCount} Google reviews.
            </p>
          </Reveal>
          <div className="quotes">
            <Reveal as="figure" className="quote quote--lead">
              <blockquote>{lead.text}</blockquote>
              <figcaption>{lead.name}, Google review</figcaption>
            </Reveal>
            {others.map((r, i) => (
              <Reveal as="figure" key={r.name} delay={(i + 1) * 100} className="quote">
                <blockquote>{r.text}</blockquote>
                <figcaption>{r.name}, Google review</figcaption>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="topics-label">Reviewers often mention</p>
            <ul className="chips">
              {REVIEW_TOPICS.map((t) => (
                <li key={t.label} className="chip">
                  {t.label} <span className="chip__n">{t.count}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <BookBand alt="" />
    </>
  );
}
