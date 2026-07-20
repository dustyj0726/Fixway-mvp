'use client';

import { useState } from 'react';

const categories = [
  ['Lawn & Mowers','Push mowers, riding mowers, zero-turns'],
  ['Small Engines','Trimmers, blowers, chainsaws, generators'],
  ['ATV & UTV','Utility and recreational off-road vehicles'],
  ['Golf Carts','Gas and electric golf carts'],
  ['Small Tractors','Compact tractors and related equipment']
];

const shops = [
  {name:'Gulf Coast Power Equipment', rating:'4.9', reviews:87, distance:'3.2 mi', tags:['Mowers','Small Engines','ATV'], next:'Tomorrow'},
  {name:'Southern Equipment Repair', rating:'4.8', reviews:54, distance:'6.7 mi', tags:['Tractors','Zero-Turns','Golf Carts'], next:'Wed'},
  {name:'Bay Small Engine Service', rating:'4.7', reviews:112, distance:'9.1 mi', tags:['Small Engines','Mowers','Generators'], next:'Thu'}
];

export default function Home() {
  const [step,setStep]=useState('home');
  const [equipment,setEquipment]=useState('');
  const [issue,setIssue]=useState('');
  const [zip,setZip]=useState('');
  const [selected,setSelected]=useState(null);
  const [submitted,setSubmitted]=useState(false);

  const reset=()=>{setStep('home');setEquipment('');setIssue('');setZip('');setSelected(null);setSubmitted(false)};

  return <main>
    <nav className="nav">
      <button className="brand" onClick={reset}><span className="mark">F</span> Fixway</button>
      <div className="navlinks">
        <button onClick={()=>setStep('find')}>Find a Shop</button>
        <button onClick={()=>setStep('list')}>List Your Shop</button>
      </div>
    </nav>

    {step==='home' && <>
      <section className="hero">
        <div className="eyebrow">POWER EQUIPMENT REPAIR, SIMPLIFIED</div>
        <h1>Broken equipment?<br/><span>Find the right shop.</span></h1>
        <p>Tell us what you need fixed. Compare local repair shops and request an appointment—all in one place.</p>
        <button className="primary" onClick={()=>setStep('find')}>Find a Repair Shop →</button>
        <div className="trust">Built for lawn equipment • ATVs & UTVs • Golf carts • Small tractors • Small engines</div>
      </section>

      <section className="section">
        <div className="sectionHead"><div><div className="eyebrow">WHAT WE COVER</div><h2>One place for your equipment.</h2></div></div>
        <div className="grid">
          {categories.map(([a,b])=><button className="card" key={a} onClick={()=>{setEquipment(a);setStep('find')}}><div className="icon">⚙</div><h3>{a}</h3><p>{b}</p><span>Find repair →</span></button>)}
        </div>
      </section>

      <section className="how">
        <div className="eyebrow">HOW IT WORKS</div><h2>From broken to booked.</h2>
        <div className="steps">
          <div><b>01</b><h3>Tell us what's wrong</h3><p>Select your equipment and describe the issue.</p></div>
          <div><b>02</b><h3>Compare repair shops</h3><p>Browse nearby shops that work on your type of equipment.</p></div>
          <div><b>03</b><h3>Request your appointment</h3><p>Choose a shop and send your repair request.</p></div>
        </div>
      </section>

      <section className="shopCta">
        <div><div className="eyebrow light">FOR REPAIR SHOPS</div><h2>Get discovered by customers who need repairs.</h2><p>Create your shop profile and start receiving local repair requests.</p></div>
        <button className="whiteBtn" onClick={()=>setStep('list')}>List Your Shop →</button>
      </section>
    </>}

    {step==='find' && <section className="formPage">
      <button className="back" onClick={()=>setStep('home')}>← Back</button>
      <div className="formWrap">
        <div className="eyebrow">FIND A REPAIR SHOP</div><h1>What do you need fixed?</h1><p>Give us a few details and we'll show you repair shops that fit your needs.</p>
        <label>Equipment type</label>
        <div className="choices">{categories.map(([a])=><button className={equipment===a?'choice active':'choice'} onClick={()=>setEquipment(a)} key={a}>{a}</button>)}</div>
        <label>What's going on?</label>
        <textarea value={issue} onChange={e=>setIssue(e.target.value)} placeholder="Example: My zero-turn mower cranks but won't start..."/>
        <label>Your ZIP code</label>
        <input value={zip} onChange={e=>setZip(e.target.value)} placeholder="39532"/>
        <button className="primary full" disabled={!equipment || !zip} onClick={()=>setStep('results')}>Show Repair Shops →</button>
      </div>
    </section>}

    {step==='results' && <section className="results">
      <button className="back" onClick={()=>setStep('find')}>← Edit search</button>
      <div className="eyebrow">REPAIR SHOPS NEAR {zip}</div><h1>Choose a repair shop.</h1><p>Demo listings shown for the MVP. Live businesses will be added during launch.</p>
      <div className="shopList">{shops.map((s,i)=><div className="shop" key={s.name}>
        <div className="shopLogo">⚙</div><div className="shopInfo"><h3>{s.name}</h3><div className="rating">★ {s.rating} <span>({s.reviews} reviews) · {s.distance}</span></div><div className="tags">{s.tags.map(t=><span key={t}>{t}</span>)}</div><p>Next appointment: <b>{s.next}</b></p></div>
        <button className="secondary" onClick={()=>{setSelected(s);setStep('book')}}>View & Book</button>
      </div>)}</div>
    </section>}

    {step==='book' && <section className="formPage">
      <button className="back" onClick={()=>setStep('results')}>← Back to shops</button>
      <div className="formWrap">
        {!submitted ? <>
          <div className="eyebrow">REQUEST AN APPOINTMENT</div><h1>{selected?.name}</h1><p>Send your repair request to the shop. They can confirm availability and next steps.</p>
          <div className="summary"><b>{equipment}</b><span>{issue || 'Repair / diagnostic request'}</span><span>ZIP: {zip}</span></div>
          <label>Your name</label><input placeholder="Full name"/>
          <label>Phone number</label><input placeholder="(555) 555-5555"/>
          <label>Email</label><input placeholder="you@example.com"/>
          <label>Preferred day</label><input type="date"/>
          <button className="primary full" onClick={()=>setSubmitted(true)}>Send Booking Request →</button>
        </> : <div className="success"><div className="check">✓</div><h1>Request sent.</h1><p>Your booking request has been prepared for {selected?.name}. In the production version, the shop will receive this instantly and contact you to confirm.</p><button className="primary" onClick={reset}>Back to Home</button></div>}
      </div>
    </section>}

    {step==='list' && <section className="formPage darkPage">
      <button className="back lightText" onClick={()=>setStep('home')}>← Back</button>
      <div className="formWrap darkForm">
        <div className="eyebrow light">FOR REPAIR PROFESSIONALS</div><h1>Put your shop in front of customers who need you.</h1><p>Join Fixway's launch network. Create your shop listing and receive repair appointment requests from local equipment owners.</p>
        <div className="benefits"><span>✓ Free launch listing</span><span>✓ Shop profile</span><span>✓ Customer booking requests</span><span>✓ Built specifically for power equipment repair</span></div>
        <label>Shop name</label><input placeholder="Your business name"/>
        <label>Owner / contact name</label><input placeholder="Full name"/>
        <label>Email</label><input placeholder="shop@example.com"/>
        <label>Phone</label><input placeholder="(555) 555-5555"/>
        <label>ZIP code</label><input placeholder="39532"/>
        <button className="whiteBtn full" onClick={()=>alert('Thanks! This demo form is ready to connect to the production database.')}>Join the Launch Network →</button>
      </div>
    </section>}

    <footer><div className="brand foot"><span className="mark">F</span> Fixway</div><p>Find. Fix. Get back to work.</p><small>© 2026 Fixway. MVP demonstration.</small></footer>
  </main>
}
