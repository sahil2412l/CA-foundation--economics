// CA Foundation Business Economics & BCK Master Data Bank

export const CA_ECO_CHAPTERS = [
  {
    id: 'eco-ch1',
    title: '1. Nature & Scope of Business Economics',
    weightage: '8 - 10 Marks',
    category: 'Business Economics',
    description: 'Micro vs Macro Economics, Positive vs Normative Economics, Central Problems of Economy (What, How, For Whom to produce) & Economic Systems.',
    subExercises: [
      { id: 'eco-1a', title: 'Exercise 1A: Definitions & Scope', questionCount: 6, summary: 'Adam Smith, Marshall, Robbins & Keynes definitions' },
      { id: 'eco-1b', title: 'Exercise 1B: Economic Systems', questionCount: 6, summary: 'Capitalist, Socialist & Mixed Economies' }
    ],
    formulas: [
      { title: 'Adam Smith Definition', formula: 'Science of Wealth (Inquiry into Nature and Causes of Wealth)', note: 'An Inquiry into Wealth (1776)' },
      { title: 'Lionel Robbins Definition', formula: 'Scarcity & Choice (Ends & Scarce Means with Alternative Uses)', note: 'Analytical & Neutral' }
    ]
  },
  {
    id: 'eco-ch2',
    title: '2. Utility, Demand & Supply Analysis',
    weightage: '12 - 15 Marks',
    category: 'Business Economics',
    description: 'Law of Demand, Elasticity of Demand (Price, Income, Cross), Consumer Equilibrium (Marginal Utility & Indifference Curves), Law of Supply.',
    subExercises: [
      { id: 'eco-2a', title: 'Exercise 2A: Demand Law & Elasticity', questionCount: 8, summary: 'Price Elasticity % & Arc Formulae' },
      { id: 'eco-2b', title: 'Exercise 2B: Indifference Curves & Consumer Equilibrium', questionCount: 6, summary: 'MRS, Budget Line & Consumer Balance' },
      { id: 'eco-2c', title: 'Exercise 2C: Supply Analysis', questionCount: 6, summary: 'Elasticity of Supply & Market Equilibrium' }
    ],
    formulas: [
      { title: 'Price Elasticity (Ep)', formula: 'Ep = (% Change in Q) / (% Change in P) = (ΔQ/ΔP) × (P/Q)', note: 'Point Elasticity' },
      { title: 'Arc Elasticity Formula', formula: 'Ep = [(Q2 - Q1)/(Q2 + Q1)] ÷ [(P2 - P1)/(P2 + P1)]', note: 'Used when price change is large' },
      { title: 'Marginal Rate of Substitution (MRS)', formula: 'MRSxy = ΔY / ΔX = MUx / MUy', note: 'Diminishing MRS makes IC convex to origin' }
    ]
  },
  {
    id: 'eco-ch3',
    title: '3. Production & Cost Concepts',
    weightage: '10 - 12 Marks',
    category: 'Business Economics',
    description: 'Short Run Production (Law of Variable Proportions), Long Run Production (Returns to Scale), Short Run & Long Run Cost Curves (TFC, TVC, TC, LAC, LMC).',
    subExercises: [
      { id: 'eco-3a', title: 'Exercise 3A: Production Function & Stages', questionCount: 8, summary: 'TP, AP, MP & 3 Stages of Variable Proportions' },
      { id: 'eco-3b', title: 'Exercise 3B: Cost Curves & Economies of Scale', questionCount: 8, summary: 'U-shaped Average Cost & Planning Envelope LAC' }
    ],
    formulas: [
      { title: 'Average & Marginal Product', formula: 'AP = TP / L , MP = ΔTP / ΔL', note: 'Stage 2 ends where MP = 0 (TP Max)' },
      { title: 'Total Cost Relation', formula: 'TC = TFC + TVC , ATC = AFC + AVC', note: 'AFC is a rectangular hyperbola' }
    ]
  },
  {
    id: 'eco-ch4',
    title: '4. Price & Output Determination in Different Markets',
    weightage: '12 - 15 Marks',
    category: 'Business Economics',
    description: 'Perfect Competition (Price Taker, AR=MR=P), Monopoly (Price Maker, Price Discrimination), Monopolistic Competition & Oligopoly (Kinked Demand Curve).',
    subExercises: [
      { id: 'eco-4a', title: 'Exercise 4A: Perfect Competition & Monopoly', questionCount: 8, summary: 'Price taker vs Price discrimination' },
      { id: 'eco-4b', title: 'Exercise 4B: Monopolistic & Oligopoly', questionCount: 8, summary: 'Product differentiation & Kinked Demand' }
    ],
    formulas: [
      { title: 'Profit Maximization Condition', formula: 'MR = MC and MC cuts MR from below', note: 'Applies to all market structures' },
      { title: 'MR & Elasticity Relation', formula: 'MR = P × (1 - 1/e)', note: 'If e=1, MR=0' }
    ]
  },
  {
    id: 'eco-ch5',
    title: '5. Business Cycles',
    weightage: '6 - 8 Marks',
    category: 'Business Economics',
    description: 'Phases of Business Cycles (Expansion, Peak, Contraction/Recession, Trough/Depression), Features, Causes & Indicators (Leading, Lagging, Coincident).',
    subExercises: [
      { id: 'eco-5a', title: 'Exercise 5A: Business Cycle Phases & Indicators', questionCount: 6, summary: 'Peak, Contraction, Trough & Leading Indicators' }
    ],
    formulas: [
      { title: 'Leading Indicators', formula: 'New orders, stock prices, building permits', note: 'Change BEFORE economic trend' },
      { title: 'Lagging Indicators', formula: 'Unemployment rate, interest rates, CPI', note: 'Change AFTER economic trend' }
    ]
  },
  {
    id: 'eco-ch6',
    title: '6. National Income Accounting',
    weightage: '10 - 12 Marks',
    category: 'Macroeconomics',
    description: 'GDP, NDP, GNP, NNP at Market Price & Factor Cost, Personal Income, Disposable Income, Expenditure, Value Added & Income Methods.',
    subExercises: [
      { id: 'eco-6a', title: 'Exercise 6A: National Income Aggregates & Methods', questionCount: 8, summary: 'GDP mp to NNP fc conversion & multipliers' }
    ],
    formulas: [
      { title: 'NNP at Factor Cost (National Income)', formula: 'NNP fc = GDP mp - Depreciation + NFIA - Net Indirect Taxes', note: 'Net Indirect Taxes = Indirect Taxes - Subsidies' },
      { title: 'Investment Multiplier (K)', formula: 'K = 1 / (1 - MPC) = 1 / MPS', note: 'Higher MPC means higher multiplier' }
    ]
  },
  {
    id: 'eco-ch7',
    title: '7. Public Finance & Fiscal Policy',
    weightage: '8 - 10 Marks',
    category: 'Macroeconomics',
    description: 'Fiscal Policy instruments (Taxation, Government Spending, Public Debt), Fiscal Deficit, Revenue Deficit, Primary Deficit & Budgetary Mechanisms.',
    subExercises: [
      { id: 'eco-7a', title: 'Exercise 7A: Budget Deficits & Fiscal Instruments', questionCount: 6, summary: 'Revenue, Fiscal & Primary Deficit calculation' }
    ],
    formulas: [
      { title: 'Fiscal Deficit', formula: 'Fiscal Deficit = Total Expenditure - Total Receipts (excluding borrowings)', note: 'Reflects total government borrowing requirement' },
      { title: 'Primary Deficit', formula: 'Primary Deficit = Fiscal Deficit - Interest Payments', note: 'Net borrowing requirement for current expenses' }
    ]
  },
  {
    id: 'eco-ch8',
    title: '8. Money Market & Monetary Policy',
    weightage: '8 - 10 Marks',
    category: 'Macroeconomics',
    description: 'Functions of Money, Demand for Money (Classical, Keynesian Liquidity Preference), Money Supply (M1, M2, M3, M4), RBI Monetary Tools (Repo, Reverse Repo, CRR, SLR).',
    subExercises: [
      { id: 'eco-8a', title: 'Exercise 8A: Money Supply Aggregates & RBI Policy', questionCount: 6, summary: 'M1 to M4 measures & Money Multiplier' }
    ],
    formulas: [
      { title: 'Money Supply M1', formula: 'M1 = Currency with Public + Demand Deposits + Other Deposits with RBI', note: 'Most liquid aggregate' },
      { title: 'Money Multiplier', formula: 'Money Multiplier = 1 / Reserve Ratio (CRR/SLR)', note: 'Credit creation capacity' }
    ]
  },
  {
    id: 'eco-ch9',
    title: '9. International Trade & Foreign Exchange',
    weightage: '8 - 10 Marks',
    category: 'Macroeconomics',
    description: 'Theories of International Trade (Adam Smith Absolute Advantage, Ricardo Comparative Cost), Tariffs & Non-Tariff Barriers, Balance of Payments (BOP), Exchange Rate Systems.',
    subExercises: [
      { id: 'eco-9a', title: 'Exercise 9A: Trade Theories & BOP Components', questionCount: 6, summary: 'Current vs Capital Account & Exchange Rates' }
    ],
    formulas: [
      { title: 'Balance of Payments (BOP)', formula: 'Current Account + Capital Account + Errors & Omissions = 0', note: 'BOP is always in accounting balance' }
    ]
  },
  {
    id: 'eco-ch10',
    title: '10. Business & Commercial Knowledge (BCK) Overview',
    weightage: '10 - 12 Marks',
    category: 'BCK',
    description: 'Business Environment, Regulatory Bodies (SEBI, RBI, CCI, IRDAI), Business Organizations, Commercial Terminology & Facets of Business.',
    subExercises: [
      { id: 'eco-10a', title: 'Exercise 10A: Regulatory Bodies & Corporate Terms', questionCount: 8, summary: 'SEBI, RBI, CCI, IRDAI roles & stock market terms' }
    ],
    formulas: [
      { title: 'Bull & Bear Market', formula: 'Bull = Optimistic (Prices Rise), Bear = Pessimistic (Prices Fall)', note: 'Stock exchange terminology' }
    ]
  }
];

export const ECO_QUESTIONS = [
  {
    id: 'q_eco_1',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'Who defined Economics as an "Inquiry into the Nature and Causes of the Wealth of Nations"?',
    options: ['Adam Smith', 'Alfred Marshall', 'Lionel Robbins', 'John Maynard Keynes'],
    correctIndex: 0,
    explanation: 'Adam Smith published his famous book "An Inquiry into the Nature and Causes of the Wealth of Nations" in 1776, defining economics as the Science of Wealth.',
    formulaUsed: 'Adam Smith: Wealth Definition (1776)'
  },
  {
    id: 'q_eco_2',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'Which of the following is a Normative Economic statement?',
    options: [
      'India is an inflation-prone economy',
      'The government should reduce unemployment benefits to encourage work',
      'An increase in price leads to a decrease in quantity demanded',
      'GDP growth rate was 7.2% last year'
    ],
    correctIndex: 1,
    explanation: 'Normative economics deals with value judgments and "what ought to be". Statements containing "should" or "ought to" express value judgments.',
    formulaUsed: 'Normative Economics = Prescriptive / Value Judgments'
  },
  {
    id: 'q_eco_3',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1b',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'In which type of economic system is the Price Mechanism the main instrument for allocating resources?',
    options: ['Socialist Economy', 'Capitalist Economy', 'Command Economy', 'Feudal System'],
    correctIndex: 1,
    explanation: 'In a Capitalist (Free Market) Economy, prices are determined by forces of supply and demand via the Price Mechanism without government control.',
    formulaUsed: 'Capitalist Economy = Price Mechanism'
  },
  {
    id: 'q_eco_4',
    chapterId: 'eco-ch2',
    subExerciseId: 'eco-2a',
    chapterName: 'Utility, Demand & Supply Analysis',
    difficulty: 'Hard',
    questionText: 'When price of a commodity falls from ₹20 to ₹16, its quantity demanded increases from 100 units to 140 units. Calculate the Price Elasticity of Demand using Percentage Method.',
    options: ['2.0', '1.5', '1.0', '0.5'],
    correctIndex: 0,
    explanation: '% Change in Q = (40 / 100) × 100 = 40%. % Change in P = (4 / 20) × 100 = 20%. Ep = 40% / 20% = 2.0.',
    formulaUsed: 'Ep = (% Change in Q) / (% Change in P)'
  },
  {
    id: 'q_eco_5',
    chapterId: 'eco-ch2',
    subExerciseId: 'eco-2b',
    chapterName: 'Utility, Demand & Supply Analysis',
    difficulty: 'Medium',
    questionText: 'An Indifference Curve is convex to the origin due to which economic law?',
    options: [
      'Law of Diminishing Marginal Utility',
      'Law of Diminishing Marginal Rate of Substitution (MRS)',
      'Law of Variable Proportions',
      'Law of Equi-Marginal Utility'
    ],
    correctIndex: 1,
    explanation: 'The slope of an Indifference Curve is the Marginal Rate of Substitution (MRS). As a consumer substitutes good X for good Y, MRS falls, making the IC convex to the origin.',
    formulaUsed: 'Convex IC = Diminishing MRS'
  },
  {
    id: 'q_eco_6',
    chapterId: 'eco-ch3',
    subExerciseId: 'eco-3a',
    chapterName: 'Production & Cost Concepts',
    difficulty: 'Medium',
    questionText: 'In the Law of Variable Proportions, Stage 2 (Stage of Operation) ends at the point where:',
    options: [
      'Marginal Product (MP) is maximum',
      'Average Product (AP) is maximum',
      'Marginal Product (MP) is zero and Total Product (TP) is maximum',
      'Total Product (TP) starts declining'
    ],
    correctIndex: 2,
    explanation: 'Stage 2 ends where MP = 0. At this point, Total Product (TP) reaches its maximum height. A rational producer operates in Stage 2.',
    formulaUsed: 'End of Stage 2: MP = 0, TP = Max'
  },
  {
    id: 'q_eco_7',
    chapterId: 'eco-ch3',
    subExerciseId: 'eco-3b',
    chapterName: 'Production & Cost Concepts',
    difficulty: 'Medium',
    questionText: 'Why is the Long Run Average Cost (LAC) curve also known as the "Envelope Curve"?',
    options: [
      'It envelopes all Short Run Average Cost (SAC) curves',
      'It looks like a flat horizontal line',
      'It envelopes Total Fixed Cost (TFC)',
      'It covers total revenue of the firm'
    ],
    correctIndex: 0,
    explanation: 'The LAC curve envelopes a series of Short Run Average Cost (SAC) curves corresponding to different plant sizes, which is why it is called an Envelope Curve or Planning Curve.',
    formulaUsed: 'LAC = Envelope of SAC Curves'
  },
  {
    id: 'q_eco_8',
    chapterId: 'eco-ch4',
    subExerciseId: 'eco-4a',
    chapterName: 'Price & Output Determination in Different Markets',
    difficulty: 'Easy',
    questionText: 'Under Perfect Competition, a firm is a:',
    options: ['Price Maker', 'Price Taker', 'Price Discriminator', 'Price Leader'],
    correctIndex: 1,
    explanation: 'In Perfect Competition, price is determined by industry demand and supply. Individual firms have negligible market share, so they are Price Takers (P = AR = MR).',
    formulaUsed: 'Perfect Competition = Price Taker (P = AR = MR)'
  },
  {
    id: 'q_eco_9',
    chapterId: 'eco-ch4',
    subExerciseId: 'eco-4b',
    chapterName: 'Price & Output Determination in Different Markets',
    difficulty: 'Hard',
    questionText: 'The Kinked Demand Curve model of Oligopoly was developed by which economist to explain price rigidity?',
    options: ['Paul M. Sweezy', 'Joseph Schumpeter', 'John Hicks', 'Paul Samuelson'],
    correctIndex: 0,
    explanation: 'Paul M. Sweezy developed the Kinked Demand Curve model in 1939. The kink occurs at the prevailing price because rivals match price cuts but ignore price increases.',
    formulaUsed: 'Kinked Demand Curve = Paul M. Sweezy'
  },
  {
    id: 'q_eco_10',
    chapterId: 'eco-ch5',
    subExerciseId: 'eco-5a',
    chapterName: 'Business Cycles',
    difficulty: 'Easy',
    questionText: 'Which of the following is considered a LEADING economic indicator?',
    options: ['Unemployment Rate', 'Stock Market Prices', 'Consumer Price Index (CPI)', 'Commercial Bank Interest Rates'],
    correctIndex: 1,
    explanation: 'Stock market prices change BEFORE the overall economy changes phase, making them a Leading Indicator.',
    formulaUsed: 'Stock Prices = Leading Indicator'
  },
  {
    id: 'q_eco_11',
    chapterId: 'eco-ch6',
    subExerciseId: 'eco-6a',
    chapterName: 'National Income Accounting',
    difficulty: 'Hard',
    questionText: 'If the Marginal Propensity to Consume (MPC) is 0.8, what is the value of the Investment Multiplier (K)?',
    options: ['5', '4', '1.25', '8'],
    correctIndex: 0,
    explanation: 'Investment Multiplier K = 1 / (1 - MPC) = 1 / (1 - 0.8) = 1 / 0.2 = 5.',
    formulaUsed: 'K = 1 / (1 - MPC)'
  },
  {
    id: 'q_eco_12',
    chapterId: 'eco-ch7',
    subExerciseId: 'eco-7a',
    chapterName: 'Public Finance & Fiscal Policy',
    difficulty: 'Medium',
    questionText: 'Primary Deficit is calculated as:',
    options: [
      'Fiscal Deficit - Interest Payments',
      'Revenue Deficit - Capital Expenditure',
      'Total Expenditure - Total Receipts',
      'Fiscal Deficit + Subsidies'
    ],
    correctIndex: 0,
    explanation: 'Primary Deficit = Fiscal Deficit - Interest Payments. It measures government borrowings needed for current fiscal expenses excluding past debt interest burden.',
    formulaUsed: 'Primary Deficit = Fiscal Deficit - Interest Payments'
  },
  {
    id: 'q_eco_13',
    chapterId: 'eco-ch8',
    subExerciseId: 'eco-8a',
    chapterName: 'Money Market & Monetary Policy',
    difficulty: 'Medium',
    questionText: 'Which Money Supply aggregate is known as "Narrow Money"?',
    options: ['M1', 'M2', 'M3', 'M4'],
    correctIndex: 0,
    explanation: 'M1 (Currency + Demand Deposits + Other Deposits with RBI) is known as Narrow Money. M3 is known as Broad Money.',
    formulaUsed: 'M1 = Narrow Money, M3 = Broad Money'
  },
  {
    id: 'q_eco_14',
    chapterId: 'eco-ch9',
    subExerciseId: 'eco-9a',
    chapterName: 'International Trade & Foreign Exchange',
    difficulty: 'Easy',
    questionText: 'Who proposed the Theory of Comparative Advantage in International Trade?',
    options: ['David Ricardo', 'Adam Smith', 'Heckscher-Ohlin', 'Alfred Marshall'],
    correctIndex: 0,
    explanation: 'David Ricardo formulated the Classical Theory of Comparative Advantage in 1817.',
    formulaUsed: 'Comparative Advantage = David Ricardo (1817)'
  },
  {
    id: 'q_eco_15',
    chapterId: 'eco-ch10',
    subExerciseId: 'eco-10a',
    chapterName: 'Business & Commercial Knowledge (BCK) Overview',
    difficulty: 'Easy',
    questionText: 'Which regulatory authority in India regulates the Capital and Securities Market?',
    options: ['SEBI', 'RBI', 'CCI', 'IRDAI'],
    correctIndex: 0,
    explanation: 'Securities and Exchange Board of India (SEBI) is the statutory regulatory body governing stock exchanges and capital markets in India.',
    formulaUsed: 'SEBI = Capital & Securities Regulator'
  }
];

export const ECO_FLASHCARDS = [
  { id: 'ef1', chapterTitle: 'Utility & Demand', frontTitle: 'Price Elasticity Arc Formula', frontFormula: 'Ep = [(Q2 - Q1)/(Q2 + Q1)] ÷ [(P2 - P1)/(P2 + P1)]', backExplanation: 'Measures elasticity between two distinct points on a demand curve.', example: 'P1=10, P2=12, Q1=100, Q2=80 → Ep = (-20/180) / (2/22) = 1.22' },
  { id: 'ef2', chapterTitle: 'Production & Costs', frontTitle: 'Law of Variable Proportions (Stage 2)', frontFormula: 'MP > 0 but MP is falling; AP is falling', backExplanation: 'Rational producer operates in Stage 2 because TP increases at a decreasing rate until MP = 0.', example: 'Ends where MP = 0 and TP reaches maximum' },
  { id: 'ef3', chapterTitle: 'Macroeconomics', frontTitle: 'Investment Multiplier (K)', frontFormula: 'K = 1 / (1 - MPC) = 1 / MPS', backExplanation: 'Quantifies the total increase in national income resulting from an initial increase in autonomous investment.', example: 'If MPC = 0.75 → K = 1 / 0.25 = 4' },
  { id: 'ef4', chapterTitle: 'Monetary Policy', frontTitle: 'Money Supply Aggregates', frontFormula: 'M1 = Currency + Demand Deposits + RBI Deposits', backExplanation: 'M1 & M2 are Narrow Money. M3 & M4 are Broad Money (M3 = M1 + Time Deposits with Banks).', example: 'M3 is the most common measure of money supply in India' }
];
