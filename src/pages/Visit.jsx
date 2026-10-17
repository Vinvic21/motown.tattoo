import usePageTitle from '../usePageTitle.js';
import Reveal from '../components/Reveal.jsx';
import OpenStatus from '../components/OpenStatus.jsx';
import Socials from '../components/Socials.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import BookBand from '../components/BookBand.jsx';
import { ArrowIcon, PhoneIcon, PinIcon } from '../components/Icons.jsx';
import { HOURS, SHOP } from '../data.js';
import { todayName } from '../time.js';

export default function Visit() {
  usePageTitle('Visit');
  const today = todayName();

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1 className="display display--xl">Visit the shop</h1>
          <p className="lede">Look for the brick storefront on Beaubien, in the heart of Downtown Detroit.</p>
        </div>
      </section>

      <section className="section section--tight" aria-label="Location and hours">
        <div className="container visit">
          <Reveal className="visit__info">
            <h2 className="h3">Address</h2>
            <p className="icon-line">
              <PinIcon width={20} height={20} />
              <span>{SHOP.address}<br /><span className="muted">{SHOP.plusCode}</span></span>
            </p>
            <a className="btn btn--outline" href={SHOP.mapsLink} target="_blank" rel="noopener noreferrer">
              Get directions <ArrowIcon width={18} height={18} />
            </a>

            <h2 className="h3">Hours</h2>
            <OpenStatus />
            <table className="hours">
              <caption className="sr-only">Opening hours</caption>
              <tbody>
                {HOURS.map((h) => (
                  <tr key={h.day} className={h.day === today ? 'is-today' : ''}>
                    <th scope="row">{h.day}{h.day === today && <span className="sr-only"> (today)</span>}</th>
                    <td>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2 className="h3">Book or ask a question</h2>
            <p className="muted">Bookings go through WhatsApp. You can also call the shop during opening hours.</p>
            <div className="visit__actions">
              <WhatsAppButton />
              <a className="btn btn--outline" href={SHOP.phoneHref}>
                <PhoneIcon width={18} height={18} /> {SHOP.phoneDisplay}
              </a>
            </div>
            <Socials className="visit__socials" />
          </Reveal>

          <Reveal delay={120} className="visit__media">
            <div className="map">
              <iframe
                title="Map showing Motown Tattoo Company at 639 Beaubien, Detroit"
                src={SHOP.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <img className="visit__photo" src="/images/storefront.png" alt="Brick storefront on Beaubien with a Motown Tattoo Company sign saying walk-ins welcome" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--teal" aria-labelledby="crew-title">
        <div className="container crew">
          <Reveal className="crew__photo">
            <img src="/images/team.png" alt="Five people smiling together inside the shop" loading="lazy" />
          </Reveal>
          <Reveal delay={120} className="crew__text">
            <h2 id="crew-title" className="display">Come say hi</h2>
            <p>
              Reviewers call the shop welcoming, clean and fun to be around. First tattoo? Not sure about your design?
              Message us and we’ll talk it through.
            </p>
            <WhatsAppButton text="Hi Motown Tattoo Company! 👋 I'd like to ask a few questions before booking my first tattoo." size="lg">
              Ask us on WhatsApp
            </WhatsAppButton>
          </Reveal>
        </div>
      </section>

      <BookBand image="/images/lobby.png" alt="" />
    </>
  );
}
