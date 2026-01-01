import React, { useState } from 'react';

const questions = [
  {
    title: "Tablet Dosage Calculation",
    question: `The provider prescribes Amoxicillin 500 mg by mouth.
The medication is available as 250 mg tablets.
How many tablets should the nurse administer?`,
    steps: [
      { label: "Ordered", value: "500 mg" },
      { label: "Available", value: "250 mg / tab" },
      { label: "Formula", value: "Ordered ÷ Available" },
      { label: "Calculation", value: "500 ÷ 250" },
    ],
    answer: "2 Tablets",
  },
  {
    title: "IV Fluid Rate Calculation",
    question: `The provider orders 1000 mL NS IV to run over 8 hours. 
Calculate the flow rate in mL/hr.`,
    steps: [
      { label: "Total Volume", value: "1000 mL" },
      { label: "Time", value: "8 hr" },
      { label: "Formula", value: "Volume ÷ Time" },
      { label: "Calculation", value: "1000 ÷ 8" },
    ],
    answer: "125 mL/hr",
  },
  {
    title: "Pediatric Medication Calculation",
    question: `Order: Acetaminophen 15 mg/kg PO. 
Patient weight: 20 kg. How many mg to administer?`,
    steps: [
      { label: "Ordered Dose", value: "15 mg/kg" },
      { label: "Weight", value: "20 kg" },
      { label: "Formula", value: "Dose × Weight" },
      { label: "Calculation", value: "15 × 20" },
    ],
    answer: "300 mg",
  },
  {
    title: "Insulin Sliding Scale",
    question: `Blood glucose: 220 mg/dL. Sliding scale orders 1 unit insulin for every 50 mg/dL above 150 mg/dL. How many units?`,
    steps: [
      { label: "BG above 150", value: "220 - 150 = 70 mg/dL" },
      { label: "Formula", value: "70 ÷ 50" },
      { label: "Calculation", value: "70 ÷ 50 = 1.4 → round 1 unit" },
    ],
    answer: "1 Unit",
  },
  {
    title: "Drops Per Minute IV",
    question: `IV set: 15 gtt/mL. Order: 300 mL NS over 2 hours. Calculate gtt/min.`,
    steps: [
      { label: "Total Volume", value: "300 mL" },
      { label: "Time", value: "2 hr × 60 = 120 min" },
      { label: "Formula", value: "Volume × gtt/mL ÷ Time" },
      { label: "Calculation", value: "300 × 15 ÷ 120" },
    ],
    answer: "37.5 → round 38 gtt/min",
  },
];

const App = () => {
  const [current, setCurrent] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const colors = {
    bg: '#F9F8F3',
    sage: '#84A59D',
    mutedBlue: '#778DA9',
    charcoal: '#2F3E46',
    accent: '#F28482',
    cardBg: '#FFFFFF',
  };

  const q = questions[current];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.bg, fontFamily: "'Inter', sans-serif", padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <div style={{ width: '100%', maxWidth: '450px', backgroundColor: colors.cardBg, borderRadius: '20px', padding: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
        
        <h1 style={{ textAlign: 'center', fontSize: '24px', color: colors.charcoal, fontWeight: 'bold' }}>{q.title}</h1>
        
        <p style={{ marginTop: '15px', fontSize: '16px', color: colors.charcoal }}>{q.question}</p>
        
        {!isRevealed ? (
          <button onClick={() => setIsRevealed(true)} style={{ marginTop: '20px', width: '100%', padding: '15px', backgroundColor: colors.mutedBlue, color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>Tap to reveal solution</button>
        ) : (
          <div style={{ marginTop: '20px' }}>
            {q.steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', border: '1px solid #ddd', marginBottom: '5px', borderRadius: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#555' }}>{s.label}</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#222' }}>{s.value}</span>
              </div>
            ))}
            
            <div style={{ marginTop: '15px', padding: '15px', borderRadius: '10px', backgroundColor: colors.accent, textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: '18px' }}>
              {q.answer}
            </div>
            
            <button onClick={() => setIsRevealed(false)} style={{ marginTop: '10px', width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '8px', cursor: 'pointer', fontSize: '12px' }}>Reset</button>
          </div>
        )}

        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={() => {setCurrent(prev => prev === 0 ? questions.length - 1 : prev - 1); setIsRevealed(false)}} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc', cursor: 'pointer' }}>Previous</button>
          <button onClick={() => {setCurrent(prev => prev === questions.length - 1 ? 0 : prev + 1); setIsRevealed(false)}} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc', cursor: 'pointer' }}>Next</button>
        </div>

        <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '12px', color: '#555' }}>
          © nurse.abaid | Original Nursing Education Content
        </div>

      </div>
    </div>
  );
};

export default App;
