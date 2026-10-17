import Reveal from './Reveal.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';

export default function BookBand({ image = '/images/lounge.png', alt = '' }) {
  return (
    <section className="band" aria-labelledby="band-title">
      <img className="band__img" src={image} alt={alt} loading="lazy" />
      <div className="band__shade" />
      <Reveal className="container band__body">
        <h2 id="band-title" className="display">Ready for your next piece?</h2>
        <p>Booking happens on WhatsApp. Send your idea, placement and size and we’ll message you back.</p>
        <WhatsAppButton size="lg" />
      </Reveal>
    </section>
  );
}
