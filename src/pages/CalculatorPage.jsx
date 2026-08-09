import React, { useState } from 'react';

export function CalculatorPage() {
  const [calcMode, setCalcMode] = useState('ELASTICITY');

  // Price Elasticity State
  const [q1, setQ1] = useState(100);
  const [q2, setQ2] = useState(140);
  const [p1, setP1] = useState(20);
  const [p2, setP2] = useState(16);

  // Break-Even Point State
  const [fixedCost, setFixedCost] = useState(50000);
  const [sellingPrice, setSellingPrice] = useState(100);
  const [variableCost, setVariableCost] = useState(60);

  // Investment Multiplier State
  const [mpc, setMpc] = useState(0.8);

  // Elasticity calculation
  const deltaQ = q2 - q1;
  const deltaP = p2 - p1;
  const pointElasticity = (p1 && deltaP) ? Math.abs((deltaQ / deltaP) * (p1 / q1)) : 0;
  const arcElasticity = (q1 + q2 && p1 + p2 && deltaP)
    ? Math.abs(((q2 - q1) / (q2 + q1)) / ((p2 - p1) / (p2 + p1)))
    : 0;

  // Break Even calculation
  const contributionMargin = sellingPrice - variableCost;
  const breakEvenUnits = contributionMargin > 0 ? fixedCost / contributionMargin : 0;
  const breakEvenRevenue = breakEvenUnits * sellingPrice;

  // Investment Multiplier calculation
  const multiplierK = mpc < 1 ? 1 / (1 - mpc) : 0;

  return (
    <div className="mx-auto max-w-7xl p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white">🧮 CA Business Economics Calculators</h1>
        <p className="text-sm text-slate-400">Solve Price Elasticity of Demand, Break-Even Point, and Investment Multiplier instantly.</p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <button onClick={() => setCalcMode('ELASTICITY')} className={`rounded-xl px-5 py-2.5 text-xs font-bold transition cursor-pointer ${calcMode === 'ELASTICITY' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}>Price Elasticity of Demand</button>
        <button onClick={() => setCalcMode('BREAKEVEN')} className={`rounded-xl px-5 py-2.5 text-xs font-bold transition cursor-pointer ${calcMode === 'BREAKEVEN' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}>Break-Even Point (BEP)</button>
        <button onClick={() => setCalcMode('MULTIPLIER')} className={`rounded-xl px-5 py-2.5 text-xs font-bold transition cursor-pointer ${calcMode === 'MULTIPLIER' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}>Investment Multiplier (K)</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
          <h2 className="text-base font-bold text-emerald-400">📝 Input Parameters</h2>
          {calcMode === 'ELASTICITY' && (
            <>
              <div><label className="block text-xs text-slate-400 mb-1">Initial Price (P1 in ₹):</label><input type="number" value={p1} onChange={(e) => setP1(Number(e.target.value))} className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-2.5 text-white text-sm" /></div>
              <div><label className="block text-xs text-slate-400 mb-1">New Price (P2 in ₹):</label><input type="number" value={p2} onChange={(e) => setP2(Number(e.target.value))} className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-2.5 text-white text-sm" /></div>
              <div><label className="block text-xs text-slate-400 mb-1">Initial Quantity (Q1):</label><input type="number" value={q1} onChange={(e) => setQ1(Number(e.target.value))} className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-2.5 text-white text-sm" /></div>
              <div><label className="block text-xs text-slate-400 mb-1">New Quantity (Q2):</label><input type="number" value={q2} onChange={(e) => setQ2(Number(e.target.value))} className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-2.5 text-white text-sm" /></div>
            </>
          )}

          {calcMode === 'BREAKEVEN' && (
            <>
              <div><label className="block text-xs text-slate-400 mb-1">Total Fixed Cost (TFC in ₹):</label><input type="number" value={fixedCost} onChange={(e) => setFixedCost(Number(e.target.value))} className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-2.5 text-white text-sm" /></div>
              <div><label className="block text-xs text-slate-400 mb-1">Selling Price per Unit (P in ₹):</label><input type="number" value={sellingPrice} onChange={(e) => setSellingPrice(Number(e.target.value))} className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-2.5 text-white text-sm" /></div>
              <div><label className="block text-xs text-slate-400 mb-1">Variable Cost per Unit (VC in ₹):</label><input type="number" value={variableCost} onChange={(e) => setVariableCost(Number(e.target.value))} className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-2.5 text-white text-sm" /></div>
            </>
          )}

          {calcMode === 'MULTIPLIER' && (
            <>
              <div><label className="block text-xs text-slate-400 mb-1">Marginal Propensity to Consume (MPC, 0 to 1):</label><input type="number" step="0.05" min="0" max="0.99" value={mpc} onChange={(e) => setMpc(Number(e.target.value))} className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-2.5 text-white text-sm" /></div>
            </>
          )}
        </div>

        <div className="rounded-2xl border border-emerald-500/30 bg-slate-900/60 p-6 space-y-4">
          <h2 className="text-base font-bold text-cyan-400">⚡ Calculated Results</h2>
          {calcMode === 'ELASTICITY' && (
            <div className="space-y-3">
              <div className="rounded-xl bg-slate-950 p-4">
                <div className="text-xs text-slate-400">Point Elasticity (Ep)</div>
                <div className="text-3xl font-black text-emerald-400">{pointElasticity.toFixed(2)}</div>
                <div className="text-xs text-amber-400 mt-1">{pointElasticity > 1 ? 'Elastic Demand (Ep > 1)' : pointElasticity === 1 ? 'Unitary Elastic (Ep = 1)' : 'Inelastic Demand (Ep < 1)'}</div>
              </div>
              <div className="rounded-xl bg-slate-950 p-4">
                <div className="text-xs text-slate-400">Arc Elasticity (Ep)</div>
                <div className="text-2xl font-bold text-cyan-400">{arcElasticity.toFixed(2)}</div>
              </div>
            </div>
          )}

          {calcMode === 'BREAKEVEN' && (
            <div className="space-y-3">
              <div className="rounded-xl bg-slate-950 p-4">
                <div className="text-xs text-slate-400">Break-Even Point (Units)</div>
                <div className="text-3xl font-black text-emerald-400">{Math.ceil(breakEvenUnits).toLocaleString('en-IN')} units</div>
              </div>
              <div className="rounded-xl bg-slate-950 p-4">
                <div className="text-xs text-slate-400">Break-Even Revenue (₹)</div>
                <div className="text-2xl font-bold text-cyan-400">₹{Math.round(breakEvenRevenue).toLocaleString('en-IN')}</div>
              </div>
            </div>
          )}

          {calcMode === 'MULTIPLIER' && (
            <div className="space-y-3">
              <div className="rounded-xl bg-slate-950 p-4">
                <div className="text-xs text-slate-400">Investment Multiplier (K = 1 / 1-MPC)</div>
                <div className="text-3xl font-black text-emerald-400">{multiplierK.toFixed(2)}x</div>
                <div className="text-xs text-amber-400 mt-1">₹1 Investment increases National Income by ₹{multiplierK.toFixed(2)}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
