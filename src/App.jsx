import React, { useEffect } from 'react';
import './App.css';
import ProfitCalculator from './ProfitCalculator';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar" data-aos="fade-down" data-aos-duration="1200">
        <div className="logo" style={{display: 'flex', alignItems: 'center'}}>
          <img src="/logo.png" alt="Bovest Logo" className="navbar-logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#about">The Model</a></li>
          <li><a href="#transparency">Transparency</a></li>
          <li><a href="#profit">How It Works</a></li>
          <li><a href="#calculator">Profit Calculator</a></li>
        </ul>
        <button className="nav-cta">Start Investing</button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content" data-aos="zoom-in" data-aos-duration="1500">
          <h1>One Investor. One Real Cow.</h1>
          <p>Flip the script on dairy farming. Invest in an actual dairy cow and collect monthly passive income, managed entirely through our smart app.</p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section bg-light">
        <div className="about-grid">
          <div className="about-text" data-aos="fade-right">
            <h2>Asset-Backed Farming</h2>
            <p>
              Bovest is where old-school farming meets modern tech and honest profit-sharing. There is no set minimum—you invest based on the actual price of a physical cow (e.g., ₹30,000 or ₹50,000). 
            </p>
            <p>
              You're not putting money into a vague digital asset. Your investment buys a real cow that lives on our farm. Our expert team handles everything—buying, feeding, managing, and caring for the livestock. You simply collect your share of the milk profits every month.
            </p>
          </div>
          <div className="about-image" data-aos="fade-left">
            <img src="/cow.png" alt="Cows on a pasture" />
          </div>
        </div>
      </section>

      {/* App Transparency Section */}
      <section id="transparency" className="section bg-dark">
        <div className="section-header text-center light-text" data-aos="fade-up">
          <h2>100% App Transparency</h2>
          <p className="subtitle">Track your physical investment from anywhere.</p>
        </div>
        <div className="cards-container">
          <div className="card" data-aos="fade-up" data-aos-delay="100">
            <div className="card-content">
              <h3>Live Updates</h3>
              <p>
                Get photos of your specific cow along with its unique ID. View daily and monthly milk production reports to see exactly how your asset is performing.
              </p>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="300">
            <div className="card-content">
              <h3>Health & Wealth</h3>
              <p>
                Access complete health and vaccination records for your cow, alongside clear profit breakdowns and your complete investment history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works & Profit Section */}
      <section id="profit" className="section bg-light">
        <div className="section-header text-center" data-aos="fade-up">
          <h2>The Profit Model</h2>
          <p className="subtitle">Clear rules. Honest sharing. Bonus assets.</p>
        </div>
        <div className="steps-container">
          <div className="step" data-aos="fade-up" data-aos-delay="100">
            <div className="step-number">01</div>
            <h3>The 50/50 Split</h3>
            <p>We sell your cow's milk daily. 50% of the milk covers all expenses (feed, vet, staff). The other 50% is pure profit.</p>
          </div>
          <div className="step" data-aos="fade-up" data-aos-delay="300">
            <div className="step-number">02</div>
            <h3>Your 20% Cut</h3>
            <p>Of the profit milk, 20% goes directly to you, and 80% goes to Bovest. Profits are credited to your wallet every month.</p>
          </div>
          <div className="step" data-aos="fade-up" data-aos-delay="500">
            <div className="step-number">03</div>
            <h3>The Bonus Calf</h3>
            <p>When your cow has its first calf, it belongs to you! Once the calf reaches maturity, it produces milk, adding a second stream of income.</p>
          </div>
        </div>

        {/* Cow Calf Bonus */}
        <div className="bonus-section" data-aos="fade-up" style={{marginTop: '5rem', padding: '3.5rem 2rem', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '2px solid #8C9970', textAlign: 'center'}}>
          <h2 style={{color: '#8C9970', fontSize: '2.5rem', marginBottom: '1.5rem'}}>Cow Calf Bonus</h2>
          <p style={{fontSize: '1.15rem', maxWidth: '850px', margin: '0 auto', lineHeight: '1.8'}}>
            Your investment doesn't stop with just one cow. When your cow gives birth to its first calf, it becomes an additional bonus asset for you! 
            Once the calf reaches maturity, it begins producing milk. You will earn your standard profit share from this calf's milk, adding a powerful second stream of income.
          </p>
          <p style={{fontSize: '1.15rem', maxWidth: '850px', margin: '1.5rem auto 0', fontWeight: 'bold', color: '#2F3E2E'}}>
            At the end of your 5-year investment cycle, you don't just walk away with your main capital returns—you also receive a lump sum payment equal to <span style={{color: '#8C9970', fontSize: '1.3rem'}}>45% of the calf's current market rate!</span>
          </p>
        </div>

        <div className="rules-grid" style={{marginTop: '5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem'}}>
           <div className="rule-box" data-aos="fade-right">
             <h3>Lock-In & Refunds</h3>
             <p>Investments lock in for 5 years to ensure farm stability. Exit policies are clear:</p>
             <ul style={{textAlign: 'left', display: 'inline-block'}}>
               <li>1 - 6 months: 100% refund</li>
               <li>6 - 12 months: 90% refund</li>
               <li>Year 2 (0 - 6 months): 80% refund</li>
               <li>Year 2 (6 - 12 months): 70% refund</li>
               <li>Year 3: 60% refund</li>
               <li>3 - 5 years: 50% refund</li>
               <li>After 5 years: 50% refund (auto closure)</li>
             </ul>
           </div>
           <div className="rule-box" data-aos="fade-left">
             <h3>What If Your Cow Dies?</h3>
             <p>Your capital is protected through farm insurance. If your main cow passes away:</p>
             <ul style={{textAlign: 'left', display: 'inline-block', fontSize: '0.95rem', marginBottom: 0, paddingLeft: '1.2rem'}}>
               <li style={{marginBottom: '0.5rem'}}>You receive a refund based on the exit timeline above, and the main investment closes.</li>
               <li style={{marginBottom: '0.5rem'}}>If it dies in <strong>Years 1-3</strong>, the entire deal ends. No calf value is returned.</li>
               <li style={{marginBottom: '0.5rem'}}>If it dies in <strong>Years 4-5</strong>, you will still receive your share of the <strong>calf's milk profit</strong> until the end of Year 5, but the 45% calf capital return is voided.</li>
               <li><strong>Calf Mortality:</strong> The calf is a bonus. If the calf itself dies within the 5 years, its value is not covered and will not be returned.</li>
             </ul>
           </div>
        </div>
      </section>

      {/* Profit Calculator */}
      <ProfitCalculator />

      {/* Footer */}
      <footer className="footer" data-aos="fade-up">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>BOVEST</h2>
            <p style={{marginTop: '1rem'}}>Tech-powered, asset-backed investments.</p>
          </div>
          <div className="footer-links">
            <a href="#about">The Model</a>
            <a href="#transparency">Transparency</a>
            <a href="#profit">How It Works</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bovest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
