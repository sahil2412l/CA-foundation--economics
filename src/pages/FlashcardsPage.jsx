import React, { useState } from 'react';
import { ECO_FLASHCARDS } from '../data/ecoData';

export function FlashcardsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const currentCard = ECO_FLASHCARDS[currentIndex];

  return (
    <div className="mx-auto max-w-4xl p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white">🎴 Business Economics Formula & Concept Flashcards</h1>
        <p className="text-sm text-slate-400">Flip cards to memorize key laws, elasticity formulas & economic rules.</p>
      </div>

      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="cursor-pointer min-h-[300px] rounded-2xl border border-emerald-500/40 bg-slate-900/80 p-8 flex flex-col justify-center items-center text-center shadow-xl transition hover:border-emerald-400 relative"
      >
        <span className="absolute top-4 left-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs text-emerald-400 font-semibold">{currentCard.chapterTitle}</span>
        <span className="absolute top-4 right-4 text-xs text-slate-500">Click to flip 📄</span>

        {!isFlipped ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">{currentCard.frontTitle}</h2>
            <div className="text-xl font-mono font-bold text-amber-300 bg-slate-950 px-6 py-3 rounded-xl border border-slate-800">{currentCard.frontFormula}</div>
          </div>
        ) : (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-emerald-400">💡 Concept Explanation</h3>
            <p className="text-sm text-slate-200 leading-relaxed">{currentCard.backExplanation}</p>
            <div className="text-xs text-cyan-300 bg-cyan-950/40 px-4 py-2 rounded-lg">📌 {currentCard.example}</div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <button onClick={() => { setIsFlipped(false); setCurrentIndex(prev => prev > 0 ? prev - 1 : ECO_FLASHCARDS.length - 1); }} className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-2.5 text-xs font-semibold text-white cursor-pointer">← Previous</button>
        <span className="text-xs text-slate-400">Card {currentIndex + 1} of {ECO_FLASHCARDS.length}</span>
        <button onClick={() => { setIsFlipped(false); setCurrentIndex(prev => prev < ECO_FLASHCARDS.length - 1 ? prev + 1 : 0); }} className="rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white cursor-pointer">Next →</button>
      </div>
    </div>
  );
}
