// CA Foundation Economics User Profile & Cookie Storage Manager

export const COOKIE_NAME = 'ca_eco_user_profile_v1';
export const COOKIE_DAYS = 365;

export const INITIAL_USER_PROFILE = {
  name: 'CA Aspirant (Economics)',
  targetExam: 'CA Foundation Business Economics & BCK',
  watchTimeSeconds: 0,
  totalQuestionsAttempted: 0,
  correctQuestionsCount: 0,
  incorrectQuestionsCount: 0,
  totalMarksScored: 0,
  xp: 0,
  level: 1,
  rankTitle: 'Economics Novice',
  unlockedBadgeIds: ['badge_welcome'],
  quizHistory: [],
  currentStreakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  dailyGoalMinutes: 30,
  soundEnabled: true
};

export const RANK_TIERS = [
  { tierName: 'Economics Novice', minLevel: 1, maxLevel: 3, badge: '🌱', color: '#38bdf8', description: 'Just started your Business Economics journey!' },
  { tierName: 'Demand Theorist', minLevel: 4, maxLevel: 7, badge: '📈', color: '#818cf8', description: 'Mastered Elasticity, Utility & Demand Laws.' },
  { tierName: 'Production Analyst', minLevel: 8, maxLevel: 12, badge: '⚙️', color: '#a78bfa', description: 'Calculates Cost Curves & Returns to Scale effortlessly.' },
  { tierName: 'Market Strategist', minLevel: 13, maxLevel: 17, badge: '🏛️', color: '#f472b6', description: 'Expert in Perfect Competition, Monopoly & Oligopoly.' },
  { tierName: 'Macroeconomics Specialist', minLevel: 18, maxLevel: 25, badge: '📊', color: '#fb7185', description: 'Mastered National Income & Public Finance.' },
  { tierName: 'Policy Advisor', minLevel: 26, maxLevel: 35, badge: '⚡', color: '#f59e0b', description: 'Monetary Policy & Money Multiplier expert!' },
  { tierName: 'AIR 1 Economist', minLevel: 36, maxLevel: 100, badge: '👑', color: '#10b981', description: 'Top Ranker contender! Ready to score 90+ in Economics!' }
];

export function setCookie(name, value, days = COOKIE_DAYS) {
  try {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  } catch (e) {
    console.error('Cookie set error:', e);
  }
}

export function getCookie(name) {
  try {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) {
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
      }
    }
  } catch (e) {
    console.error('Cookie read error:', e);
  }
  return null;
}

export function loadUserProfileFromCookies() {
  try {
    const saved = getCookie(COOKIE_NAME);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...INITIAL_USER_PROFILE, ...parsed };
    }
  } catch (e) {
    console.error('Cookie parse error:', e);
  }
  return INITIAL_USER_PROFILE;
}

export function saveUserProfileToCookies(profile) {
  try {
    setCookie(COOKIE_NAME, JSON.stringify(profile));
  } catch (e) {
    console.error('Save error:', e);
  }
}

export function getXPForNextLevel(level) {
  const baseXP = 100;
  const multiplier = 1.25;
  const currentLevelMinXP = Math.floor(baseXP * Math.pow(multiplier, level - 1) - baseXP);
  const nextLevelXP = Math.floor(baseXP * Math.pow(multiplier, level) - baseXP);
  return { currentLevelMinXP, nextLevelXP };
}

export function playSound(type = 'correct') {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'correct') {
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
      if (window.confetti) {
        window.confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
      }
    } else {
      osc.frequency.setValueAtTime(220, ctx.currentTime); // A3
      osc.frequency.setValueAtTime(180, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    }
  } catch (e) { }
}

export function calculateXPAndLevel(user) {
  const watchXP = Math.floor(user.watchTimeSeconds / 60) * 5;
  const correctXP = user.correctQuestionsCount * 20;
  const totalXP = watchXP + correctXP;

  let level = 1;
  let { nextLevelXP } = getXPForNextLevel(level);
  while (totalXP >= nextLevelXP && level < 100) {
    level++;
    nextLevelXP = getXPForNextLevel(level).nextLevelXP;
  }

  let rankTitle = 'Economics Novice';
  const tier = RANK_TIERS.find(t => level >= t.minLevel && level <= t.maxLevel);
  if (tier) rankTitle = tier.tierName;

  return { ...user, xp: totalXP, level, rankTitle };
}
