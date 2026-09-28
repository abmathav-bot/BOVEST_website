import React, { useState } from 'react';
import './ProfitCalculator.css';

const ProfitCalculator = () => {
  const [investment, setInvestment] = useState(50000);
  const [milkYield, setMilkYield] = useState(12); // liters per day per cow
  const [milkPrice, setMilkPrice] = useState(42); // price per liter

  // --- Calculations based on Gour Farm 5-Year Model ---
  
  // 1. Main Cow Milk Profit (5 Years)
  // 50% of milk goes to expenses. Investor gets 20% of the remaining profit milk.
  const mainCowProfitMilk = milkYield * 0.5;
  const mainCowDailyProfit = mainCowProfitMilk * milkPrice * 0.20;
  const mainCowYearlyProfit = mainCowDailyProfit * 365;
  const mainCow5YearProfit = mainCowYearlyProfit * 5;

  // 2. Capital Return (End of Year 5)
  const mainCowCapitalReturn = investment * 0.50; // 50% of original investment

  // Totals (Main Cow Only)
  const totalReceived = mainCow5YearProfit + mainCowCapitalReturn;
  const netProfit = totalReceived - investment;

  return (
    <section id="calculator" className="section calculator-section bg-dark light-text">
      <div className="section-header text-center" data-aos="fade-up">
        <h2>5-Year Investment Projection</h2>
        <p className="subtitle">See exactly how your money grows over 5 years.</p>
      </div>
      
      <div className="calculator-container" data-aos="zoom-in" data-aos-duration="1000">
        <div className="calc-inputs" data-aos="fade-right" data-aos-delay="200">
          <div className="input-group main-input">
            <label>Investment Amount (₹)</label>
            <input type="number" min="0" value={investment} onChange={e => setInvestment(Number(e.target.value))} />
          </div>
          <div className="input-group main-input">
            <label>Milk Yield (Liters/Day)</label>
            <input type="number" min="0" value={milkYield} onChange={e => setMilkYield(Number(e.target.value))} />
          </div>
          <div className="input-group main-input" style={{marginTop: '1rem'}}>
            <label>Milk Price (₹/Liter)</label>
            <input type="number" step="0.1" min="0" value={milkPrice} onChange={e => setMilkPrice(Number(e.target.value))} />
          </div>
        </div>
        
        <div className="calc-results" data-aos="fade-left" data-aos-delay="400">
          <h3>Total Received: ₹{Math.round(totalReceived).toLocaleString('en-IN')}</h3>
          <p className="calc-note">
            Net Profit after 5 years: <strong>₹{Math.round(netProfit).toLocaleString('en-IN')}</strong><br/>
            <span style={{ fontSize: '0.85rem', color: '#8C9970' }}>* Note: Calf profits and calf capital value are considered a bonus and are NOT included in these calculations!</span>
          </p>
          
          <div className="result-grid">
            <div className="result-card" data-aos="flip-up" data-aos-delay="500">
              <h4>Daily Profit</h4>
              <div className="amount">₹{Math.round(mainCowDailyProfit).toLocaleString('en-IN')}</div>
            </div>
            <div className="result-card" data-aos="flip-up" data-aos-delay="600">
              <h4>Monthly Profit</h4>
              <div className="amount">₹{Math.round(mainCowDailyProfit * 30).toLocaleString('en-IN')}</div>
            </div>
            <div className="result-card highlight" data-aos="flip-up" data-aos-delay="700">
              <h4>5-Year Milk Profit</h4>
              <div className="amount">₹{Math.round(mainCow5YearProfit).toLocaleString('en-IN')}</div>
            </div>
            <div className="result-card" data-aos="flip-up" data-aos-delay="800">
              <h4>Capital Return (50%)</h4>
              <div className="amount">₹{Math.round(mainCowCapitalReturn).toLocaleString('en-IN')}</div>
            </div>
          </div>
          
          <div style={{marginTop: '3rem', textAlign: 'center', width: '100%'}} data-aos="fade-up" data-aos-delay="900">
            <button className="cta-button" style={{padding: '1.2rem 4rem', fontSize: '1.1rem', width: '100%'}}>Start Investing</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitCalculator;
