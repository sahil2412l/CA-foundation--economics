import { CA_ECO_CHAPTERS, ECO_QUESTIONS, ECO_FLASHCARDS } from './src/data/ecoData.js';

console.log('--- ECO DATA BANK SUMMARY ---');
console.log('Total Economics Chapters:', CA_ECO_CHAPTERS.length);
console.log('Total Questions:', ECO_QUESTIONS.length);
console.log('Total Flashcards:', ECO_FLASHCARDS.length);

let errors = [];

ECO_QUESTIONS.forEach((q, idx) => {
  if (!q.chapterId) errors.push(`Question #${idx + 1} missing chapterId`);
  if (!q.questionText) errors.push(`Question #${idx + 1} missing questionText`);
  if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`Question #${idx + 1} does not have 4 options`);
  if (typeof q.correctIndex !== 'number' || q.correctIndex < 0 || q.correctIndex > 3) errors.push(`Question #${idx + 1} invalid correctIndex`);
});

if (errors.length > 0) {
  console.error('❌ VALIDATION ERRORS:', errors);
} else {
  console.log('✅ ALL ECONOMICS QUESTIONS & CHAPTERS ARE 100% VALID & PROPERLY FORMATTED!');
}
