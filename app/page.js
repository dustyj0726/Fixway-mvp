
'use client';

import { useState } from 'react';

const services = [
  'Push mower',
  'Riding mower / zero-turn',
  'Weed eater / trimmer',
  'Chainsaw',
  'Leaf blower',
  'Generator',
  'ATV / UTV',
  'Other small engine',
];

export default function Home() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [equipment, setEquipment] = useState('');
  const [issue, setIssue] = useState('');
  const [zip, setZip] = useState('');
  const [serviceType, setServiceType] = useState('Mobile service');

  function submitRequest(event) {
    event.preventDefault();

    const message = [
      'Repair request - North Biloxi Small Engine Repair',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Equipment: ${equipment}`,
      `Problem: ${issue}`,
      `ZIP: ${zip}`,
      `Service: ${serviceType}`,
    ].join('\n');

    window.location.href =
      `sms:2289388811?body=${encodeURIComponent(message)}`;
  }

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">
          <img src="/North%20Biloxi%20Small%20Engine%20Repair%20Logo.png" alt=className="brandLogo" />
          North Biloxi Small Engine Repair
        </a>
        <div className="navlinks">
          <a href="#booking">Request Service</a>
          <a href="tel:2289388811">Call Us</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow">MOBILE SMALL ENGINE REPAIR</div>
        <h1>
          Equipment giving you trouble?
          <br />
          <span>We'll come to you.</span>
        </h1>
        <p>
          Mobile small engine repair serving North Biloxi and
          surrounding Gulf Coast communities. Tell us what's wrong
          and request service.
        </p>
        <a className="primary" href="#booking">
          Request Service →
        </a>
        <div className="trust">
          Mowers • Trimmers • Blowers • Chainsaws • Generators • More
        </div>
        <p>
          Call or text <a href="tel:2289388811">228-938-8811</a>
        </p>
      </section>

      <section className="section">
        <div className="eyebrow">WHAT WE SERVICE</div>
        <h2>Small engine repair made convenient.</h2>
        <div className="grid">
          {services.map((service) => (
            <a
              className="card"
              href="#booking"
              key={service}
              onClick={() => setEquipment(service)}
            >
              <div className="icon">⚙</div>
              <h3>{service}</h3>
              <span>Request service →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="formPage" id="booking">
        <div className="formWrap">
          <div className="eyebrow">REQUEST MOBILE SERVICE</div>
          <h2>Tell us what needs fixing.</h2>
          <p>
            Complete this form to prepare a text message with your
            repair details. Review it and tap Send in your messaging app.
          </p>

          <form onSubmit={submitRequest}>
            <label htmlFor="customer-name">Your name</label>
            <input
              id="customer-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              required
            />

            <label htmlFor="customer-phone">Your phone number</label>
            <input
              id="customer-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone number"
              required
            />

            <label htmlFor="equipment">Equipment</label>
            <select
              id="equipment"
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
              required
            >
              <option value="">Select equipment</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

            <label htmlFor="issue">Describe the problem</label>
            <textarea
              id="issue"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              placeholder="Example: Mower cranks but won't start."
              required
            />

            <label htmlFor="zip">Your ZIP code</label>
            <input
              id="zip"
              inputMode="numeric"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="Your ZIP code"
              required
            />

            <label htmlFor="service-type">Service preference</label>
            <select
              id="service-type"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option>Mobile service</option>
              <option>Ask about drop-off</option>
            </select>

            <button className="primary full" type="submit">
              Prepare Repair Request →
            </button>
          </form>

          <p className="formNote">
            Your messaging app will open with the request filled in.
            You must tap Send to contact the business.
          </p>
        </div>
      </section>

      <section className="shopCta">
        <div>
          <div className="eyebrow light">NEED HELP?</div>
          <h2>Let's get your equipment running again.</h2>
          <p>Call or text us to discuss your repair.</p>
        </div>
        <a className="whiteBtn" href="tel:2289388811">
          Call 228-938-8811
        </a>
      </section>

      <footer>
        <div className="brand foot">
          <span className="mark">N</span>
          North Biloxi Small Engine Repair
        </div>
        <p>Mobile small engine repair on the Gulf Coast.</p>
        <a href="tel:2289388811">228-938-8811</a>
        <small>© 2026 North Biloxi Small Engine Repair.</small>
      </footer>
    </main>
  );
}

