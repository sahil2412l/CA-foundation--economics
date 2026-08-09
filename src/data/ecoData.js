// CA Foundation Business Economics & BCK Master Data Bank

export const CA_ECO_CHAPTERS = [
  {
    id: 'eco-ch1',
    title: '1. Nature & Scope of Business Economics',
    weightage: '8 - 10 Marks',
    category: 'Business Economics',
    description: 'Micro vs Macro Economics, Positive vs Normative Economics, Central Problems of Economy (What, How, For Whom to produce) & Economic Systems.',
    subExercises: [
      { id: 'eco-1a', title: 'Exercise 1A: Definitions & Scope', questionCount: 35, summary: 'Adam Smith, Robbins, Micro vs Macro, Positive vs Normative & Scarcity' },
      { id: 'eco-1b', title: 'Exercise 1B: Economic Systems', questionCount: 14, summary: 'Capitalist, Socialist & Mixed Economies' }
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
    questionText: 'Economists regard decision making as important because:',
    options: [
      'The resources required to satisfy our unlimited wants and needs are finite, or scarce.',
      'It is crucial to understand how we can best allocate our scarce resources to satisfy society\'s unlimited wants and needs.',
      'Resources have alternative uses.',
      'All the above.'
    ],
    correctIndex: 3,
    explanation: 'Decision making is essential in economics because resources are finite/scarce, wants are unlimited, and resources have alternative uses. Hence, all options are correct.',
    formulaUsed: 'Scarcity + Unlimited Wants + Alternative Uses → Decision Making'
  },
  {
    id: 'q_eco_2',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'Business Economics is -',
    options: [
      'Abstract and applies the tools of Microeconomics.',
      'Involves practical application of economic theory in business decision making.',
      'Incorporates tools from multiple disciplines.',
      '(b) and (c) above.'
    ],
    correctIndex: 3,
    explanation: 'Business Economics involves practical application of economic theory in business decision making and incorporates tools from multiple disciplines (pragmatic and interdisciplinary).',
    formulaUsed: 'Business Economics = Applied Economic Theory + Interdisciplinary Tools'
  },
  {
    id: 'q_eco_3',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'In Economics, we use the term scarcity to mean -',
    options: [
      'Absolute scarcity and lack of resources in less developed countries.',
      'Relative scarcity i.e. scarcity in relation to the wants of the society.',
      'Scarcity during times of business failure and natural calamities.',
      'Scarcity caused on account of excessive consumption by the rich.'
    ],
    correctIndex: 1,
    explanation: 'In economics, scarcity is a relative concept referring to the limitation of resources in relation to human wants.',
    formulaUsed: 'Scarcity = Relative Scarcity (Resources vs Wants)'
  },
  {
    id: 'q_eco_4',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'What implication(s) does resource scarcity have for the satisfaction of wants?',
    options: [
      'Not all wants can be satisfied.',
      'We will never be faced with the need to make choices.',
      'We must develop ways to decrease our individual wants.',
      'The discovery of new natural resources is necessary to increase our ability to satisfy wants.'
    ],
    correctIndex: 0,
    explanation: 'Because resources are scarce relative to unlimited wants, it is impossible to satisfy all human wants, necessitating choice and allocation.',
    formulaUsed: 'Resource Scarcity → Not All Wants Can Be Satisfied'
  },
  {
    id: 'q_eco_5',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'Which of the following is a normative statement?',
    options: [
      'Planned economies allocate resources via government departments.',
      'Most transitional economies have experienced problems of falling output and rising prices over the past decade.',
      'There is a greater degree of consumer sovereignty in market economies than planned economies.',
      'Reducing inequality should be a major priority for mixed economies.'
    ],
    correctIndex: 3,
    explanation: 'Normative economics expresses value judgments and opinions on "what ought to be". Statements with "should" or prescribing policy goals are normative.',
    formulaUsed: 'Normative Statement = Value Judgment ("Should be")'
  },
  {
    id: 'q_eco_6',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'In every economic system, scarcity imposes limitations on',
    options: [
      'households, business firms, governments, and the nation as a whole.',
      'households and business firms, but not the governments.',
      'local and state governments, but not the federal government.',
      'households and governments, but not business firms.'
    ],
    correctIndex: 0,
    explanation: 'Scarcity is universal and constrains all economic decision-makers including households, private businesses, public institutions, and entire nations.',
    formulaUsed: 'Scarcity = Universal Constraint'
  },
  {
    id: 'q_eco_7',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'Macroeconomics is also called ————— economics.',
    options: ['applied', 'aggregate', 'experimental', 'none of the above'],
    correctIndex: 1,
    explanation: 'Macroeconomics examines aggregate economic quantities such as national income, total output, aggregate demand, and employment. Hence it is also known as Aggregate Economics.',
    formulaUsed: 'Macroeconomics = Aggregate Economics / Income & Employment Theory'
  },
  {
    id: 'q_eco_8',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'An example of \'positive\' economic analysis would be:',
    options: [
      'an analysis of the relationship between the price of food and the quantity purchased.',
      'determining how much income each person should be guaranteed.',
      'determining the \'fair\' price for food.',
      'deciding how to distribute the output of the economy.'
    ],
    correctIndex: 0,
    explanation: 'Positive economics deals with objective cause-and-effect relationships and facts ("what is"). Analyzing the relationship between price and quantity purchased is a positive statement.',
    formulaUsed: 'Positive Economics = Objective Facts & Empirical Relationships'
  },
  {
    id: 'q_eco_9',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'A study of how increases in the corporate income tax rate will affect the national unemployment rate is an example of -',
    options: ['Macro-Economics.', 'Descriptive Economics.', 'Micro-economics.', 'Normative economics.'],
    correctIndex: 0,
    explanation: 'Analyzing economy-wide variables like national tax rates and national unemployment rate falls under Macro-Economics.',
    formulaUsed: 'Economy-wide Aggregates = Macro-Economics'
  },
  {
    id: 'q_eco_10',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'Which of the following does not suggest a macro approach for India?',
    options: [
      'Determining the GNP of India.',
      'Finding the causes of failure of ABC Ltd.',
      'Identifying the causes of inflation in India.',
      'Analyse the causes of failure of industry in providing large scale employment'
    ],
    correctIndex: 1,
    explanation: 'Analyzing a specific individual company (ABC Ltd.) is a microeconomic study, whereas GNP, inflation, and aggregate employment are macroeconomic topics.',
    formulaUsed: 'Individual Firm Analysis = Microeconomics'
  },
  {
    id: 'q_eco_11',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'Ram: My corn harvest this year is poor.\nKrishan: Don\'t worry. Price increases will compensate for the fall in quantity supplied.\nVinod: Climate affects crop yields. Some years are bad, others are good.\nMadhu: The Government ought to guarantee that our income will not fall.\nIn this conversation, the normative statement is made by -',
    options: ['Ram', 'Krishan', 'Vinod', 'Madhu'],
    correctIndex: 3,
    explanation: 'Madhu says "The Government ought to guarantee that our income will not fall." The phrase "ought to" expresses a value judgment / normative statement.',
    formulaUsed: 'Normative Statement = Value Judgment ("Ought to")'
  },
  {
    id: 'q_eco_12',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'Consider the following and decide which, if any, economy is without scarcity:',
    options: [
      'The pre-independent Indian economy, where most people were farmers.',
      'A mythical economy where everybody is a billionaire.',
      'Any economy where income is distributed equally among its people.',
      'None of the above.'
    ],
    correctIndex: 3,
    explanation: 'Scarcity is universal and exists in all economic systems. Even if everyone is a billionaire, finite resources and time mean scarcity cannot be eliminated.',
    formulaUsed: 'Scarcity = Universal in All Economies'
  },
  {
    id: 'q_eco_13',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'Which of the following is not a subject matter of Micro-economies?',
    options: [
      'The price of mangoes.',
      'The cost of producing a fire truck for the fire department of Delhi, India.',
      'The quantity of mangoes produced for the mangoes market.',
      'The national economy\'s annual rate of growth.'
    ],
    correctIndex: 3,
    explanation: 'The annual rate of growth of the national economy is a macroeconomic aggregate, not a microeconomic topic.',
    formulaUsed: 'National Growth Rate = Macroeconomics'
  },
  {
    id: 'q_eco_14',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'The branch of economic theory that deals with the problem of allocation of resources is -',
    options: ['Micro-Economic theory.', 'Macro-economic theory.', 'Econometrics.', 'None of the above.'],
    correctIndex: 0,
    explanation: 'Microeconomic theory (Price Theory) studies how individuals, households, and firms allocate scarce resources among alternative uses.',
    formulaUsed: 'Resource Allocation = Microeconomic Theory'
  },
  {
    id: 'q_eco_15',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'Which of the following is not the subject matter of Business Economics?',
    options: [
      'Should our firm be in this business?',
      'How much should be produced and at price should be kept?',
      'How will the product be placed in the market?',
      'How should we decrease unemployment in the economy?'
    ],
    correctIndex: 3,
    explanation: 'Decreasing national unemployment is a macroeconomic policy issue, whereas Business Economics focuses on internal managerial decision-making for a firm.',
    formulaUsed: 'Macro Unemployment Policy ≠ Business Economics'
  },
  {
    id: 'q_eco_16',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'Which of the following is a normative economic statement?',
    options: [
      'Unemployment rate decreases with industrialization',
      'Economics is a social science that studies human behaviour.',
      'The minimum wage should be raised to ₹ 200/- per day',
      'India spends a huge amount of money on national defence.'
    ],
    correctIndex: 2,
    explanation: 'Statement (c) uses "should be raised", expressing an opinion/value judgment on wage policy (Normative Economics).',
    formulaUsed: 'Normative = Value Judgment ("Should be")'
  },
  {
    id: 'q_eco_17',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'Which of the following would be considered a topic of study in Macroeconomics?',
    options: [
      'The effect of increase in wages on the profitability of cotton industry',
      'The effect on steel prices when more steel is imported',
      'The effect of an increasing inflation rate on living standards of people in India',
      'The effect of an increase in the price of coffee on the quantity of tea consumed'
    ],
    correctIndex: 2,
    explanation: 'The impact of national inflation rates on general living standards in India is a macroeconomic study because it examines economy-wide phenomena.',
    formulaUsed: 'Inflation & General Living Standards = Macroeconomics'
  },
  {
    id: 'q_eco_18',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'The difference between positive and normative Economics is:',
    options: [
      'Positive Economics explains the performance of the economy while normative Economics finds out the reasons for poor performance.',
      'Positive Economics describes the facts of the economy while normative Economics involves evaluating whether some of these are good or bad for the welfare of the people.',
      'Normative Economics describes the facts of the economy while positive Economics involves evaluating whether some of these are good or bad for the welfare of the people.',
      'Positive Economics prescribes while normative Economics describes.'
    ],
    correctIndex: 1,
    explanation: 'Positive economics states facts and objective cause-and-effect relationships ("what is"), whereas normative economics evaluates policy welfare and value judgments ("what ought to be").',
    formulaUsed: 'Positive = Facts; Normative = Welfare & Value Judgments'
  },
  {
    id: 'q_eco_19',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'Which of the following is not within the scope of Business Economics?',
    options: [
      'Capital Budgeting',
      'Risk Analysis',
      'Business Cycles',
      'Accounting Standards'
    ],
    correctIndex: 3,
    explanation: 'Accounting Standards are rules governing financial accounting, not a core topic within the scope of Business Economics.',
    formulaUsed: 'Scope of Business Economics = Capital Budgeting, Risk, Business Cycles'
  },
  {
    id: 'q_eco_20',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'Which of the following statements is incorrect?',
    options: [
      'Business economics is normative in nature.',
      'Business Economics has a close connection with statistics.',
      'Business Economist need not worry about macro variables.',
      'Business Economics is also called Managerial Economics.'
    ],
    correctIndex: 2,
    explanation: 'A Business Economist MUST evaluate macroeconomic environment and variables (GDP, inflation, government policies) as they directly affect business planning.',
    formulaUsed: 'Business Economics = Intergrated with Macro Environment'
  },
  {
    id: 'q_eco_21',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'Economic goods are considered scarce resources because they.',
    options: [
      'cannot be increased in quantity.',
      'do not exist in adequate quantity to satisfy the requirements of the society.',
      'are of primary importance in satisfying social requirements.',
      'are limited to man made goods.'
    ],
    correctIndex: 1,
    explanation: 'Economic goods are scarce because their supply is insufficient to satisfy all human wants.',
    formulaUsed: 'Economic Goods = Scarce relative to societal requirements'
  },
  {
    id: 'q_eco_22',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1b',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'In a free market economy the allocation of resources is determined by',
    options: [
      'voting done by consumers.',
      'a central planning authority.',
      'consumer preferences.',
      'the level of profits of firms.'
    ],
    correctIndex: 2,
    explanation: 'In a free market (capitalist) economy, consumer preferences (consumer sovereignty) drive demand and determine resource allocation via the price mechanism.',
    formulaUsed: 'Free Market = Consumer Preferences & Price Mechanism'
  },
  {
    id: 'q_eco_23',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1b',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'A capitalist economy uses _______________ as the principal means of allocating resources.',
    options: ['demand', 'supply', 'efficiency', 'prices'],
    correctIndex: 3,
    explanation: 'A capitalist economy relies on prices (the Price Mechanism) as the principal means of allocating scarce resources.',
    formulaUsed: 'Capitalist Economy = Price Mechanism'
  },
  {
    id: 'q_eco_24',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1b',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'Which of the following is considered as a disadvantage of allocating resources using the market system?',
    options: [
      'Income will tend to be unevenly distributed.',
      'People do not get goods of their choice.',
      'Men of Initiative and enterprise are not rewarded.',
      'Profits will tend to be low.'
    ],
    correctIndex: 0,
    explanation: 'A major drawback of a market (capitalist) economy is income inequality and wealth concentration.',
    formulaUsed: 'Market System Disadvantage = Unequal Income Distribution'
  },
  {
    id: 'q_eco_25',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1b',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'Which of the following statements does not apply to a market economy?',
    options: [
      'Firms decide whom to hire and what to produce.',
      'Firms aim at maximizing profits.',
      'Households decide which firms to work for and what to buy with their incomes.',
      'Government policies are the primary forces that guide the decisions of firms and households.'
    ],
    correctIndex: 3,
    explanation: 'In a market economy, government interference is minimal; decisions are guided by market price signals rather than government commands.',
    formulaUsed: 'Market Economy ≠ Government Command Guided'
  },
  {
    id: 'q_eco_26',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1b',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'In a mixed economy -',
    options: [
      'all economic decisions are taken by the central authority.',
      'all economic decisions are taken by private entrepreneurs.',
      'economic decisions are partly taken by the state and partly by the private entrepreneurs.',
      'none of the above.'
    ],
    correctIndex: 2,
    explanation: 'A mixed economy combines private enterprise and public sector planning, so economic decisions are taken partly by the state and partly by private sector.',
    formulaUsed: 'Mixed Economy = State + Private Sector Decisions'
  },
  {
    id: 'q_eco_27',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'The central problem in economics is that of',
    options: [
      'comparing the success of command versus market economies.',
      'guaranteeing that production occurs in the most efficient manner.',
      'guaranteeing a minimum level of income for every citizen.',
      'allocating scarce resources in such a manner that society\'s unlimited needs or wants are satisfied in the best possible manner.'
    ],
    correctIndex: 3,
    explanation: 'The fundamental economic problem is allocating scarce resources to satisfy society\'s unlimited wants efficiently.',
    formulaUsed: 'Central Problem = Scarce Resources vs Unlimited Wants'
  },
  {
    id: 'q_eco_28',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1b',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'Capital intensive technique would get chosen in a',
    options: [
      'labour surplus economy where the relative price of capital is lower.',
      'capital surplus economy where the relative price of capital is lower.',
      'developed economy where technology is better.',
      'developing economy where technology is poor.'
    ],
    correctIndex: 1,
    explanation: 'Producers choose capital-intensive techniques in capital-surplus economies where relative price of capital is lower compared to labour.',
    formulaUsed: 'Capital Intensive = Capital Surplus + Lower Capital Price'
  },
  {
    id: 'q_eco_29',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'Which of the following is not one of the four central questions that the study of economics is supposed to answer?',
    options: [
      'Who produces what?',
      'When are goods produced?',
      'Who consumes what?',
      'How are goods produced?'
    ],
    correctIndex: 1,
    explanation: '"When are goods produced?" is not one of the four central economic problems (What, How, For Whom, and Growth Provision).',
    formulaUsed: 'Central Economic Questions = What, How, For Whom & Growth'
  },
  {
    id: 'q_eco_30',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'Larger production of _____ goods would lead to higher production in future.',
    options: ['consumer goods', 'capital goods', 'agricultural goods', 'public goods'],
    correctIndex: 1,
    explanation: 'Producing more capital goods (machinery, tools, infrastructure) enhances the future productive capacity of an economy.',
    formulaUsed: 'Capital Goods = Future Production Capacity'
  },
  {
    id: 'q_eco_31',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1b',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'The economic system in which all the means of production are owned and controlled by private individuals for profit.',
    options: ['Socialism', 'Capitalism', 'Mixed economy', 'Communism'],
    correctIndex: 1,
    explanation: 'In Capitalism, private individuals own and operate the factors/means of production for private profit.',
    formulaUsed: 'Capitalism = Private Ownership + Profit Motive'
  },
  {
    id: 'q_eco_32',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'Macro Economics is the study of ____________________.',
    options: [
      'all aspects of scarcity.',
      'the national economy and the global economy as a whole.',
      'big businesses.',
      'the decisions of individual businesses and people.'
    ],
    correctIndex: 1,
    explanation: 'Macroeconomics studies the overall behavior, performance, and aggregates of national and global economies as a whole.',
    formulaUsed: 'Macroeconomics = Study of Economy as a Whole'
  },
  {
    id: 'q_eco_33',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1b',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'Freedom of choice is the advantage of -',
    options: ['Socialism', 'Capitalism', 'Communism', 'None of the above'],
    correctIndex: 1,
    explanation: 'Freedom of enterprise and consumer choice (consumer sovereignty) is a key feature and advantage of Capitalism.',
    formulaUsed: 'Freedom of Choice = Advantage of Capitalism'
  },
  {
    id: 'q_eco_34',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1b',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'Exploitation and inequality are minimal under:',
    options: ['Socialism', 'Capitalism', 'Mixed economy', 'None of the above'],
    correctIndex: 0,
    explanation: 'Under Socialism, private wealth accumulation is restricted and social welfare is prioritized, minimizing exploitation and inequality.',
    formulaUsed: 'Minimal Inequality & Exploitation = Socialism'
  },
  {
    id: 'q_eco_35',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1b',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'Administered prices refer to:',
    options: [
      'Prices determined by forces of demand and supply',
      'Prices determined by sellers in the market',
      'Prices determined by an external authority which is usually the government',
      'None of the above'
    ],
    correctIndex: 2,
    explanation: 'Administered prices are statutory prices set or controlled directly by government authorities rather than free market supply and demand.',
    formulaUsed: 'Administered Prices = Government Fixed Prices'
  },
  {
    id: 'q_eco_36',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'In Economics, the central economic problem means:',
    options: [
      'Output is restricted to the limited availability of resources',
      'Consumer do not have as much money as they would wish',
      'There will always be certain level of unemployment',
      'Resources are not always allocated in an optimum way'
    ],
    correctIndex: 0,
    explanation: 'The fundamental economic problem is that total output is constrained by the limited availability of scarce resources.',
    formulaUsed: 'Central Problem = Output Limited by Resource Scarcity'
  },
  {
    id: 'q_eco_37',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'Scarcity definition of Economics is given by-',
    options: ['Alfred Marshall', 'Samuelson', 'Robbins', 'Adam Smith'],
    correctIndex: 2,
    explanation: 'Lionel Robbins introduced the Scarcity definition of Economics in 1932 (focusing on ends and scarce means with alternative uses).',
    formulaUsed: 'Scarcity Definition = Lionel Robbins (1932)'
  },
  {
    id: 'q_eco_38',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'The definition "Science which deals with wealth of Nation" was given by:',
    options: ['Alfred Marshall', 'A C Pigou', 'Adam Smith', 'J B Say'],
    correctIndex: 2,
    explanation: 'Adam Smith defined Economics as the Science of Wealth in his treatise "An Inquiry into the Nature and Causes of the Wealth of Nations" (1776).',
    formulaUsed: 'Wealth Definition = Adam Smith (1776)'
  },
  {
    id: 'q_eco_39',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1b',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'Which of the following is not one of the features of capitalist economy?',
    options: [
      'Right of private property',
      'Freedom of choice by the consumers',
      'No profit, No Loss motive',
      'Competition'
    ],
    correctIndex: 2,
    explanation: 'Capitalism operates on the Profit Motive. "No profit, No Loss motive" is not a feature of a capitalist economy.',
    formulaUsed: 'Capitalism Feature = Profit Motive (Not No-Profit)'
  },
  {
    id: 'q_eco_40',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'There is need of economic study, because –',
    options: [
      'The resources are limited',
      'The wants are unlimited',
      'The resources are unlimited',
      'Both a and b'
    ],
    correctIndex: 3,
    explanation: 'Economic study is required because human wants are unlimited while available resources are limited (scarce).',
    formulaUsed: 'Need for Economics = Limited Resources + Unlimited Wants'
  },
  {
    id: 'q_eco_41',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'The benefit of economic study is –',
    options: [
      'It ensure that all problems will be appropriately tackled',
      'It helps in identifying problems',
      'It enable to examine a problem in its right perspective',
      'It gives exact solutions to every problem'
    ],
    correctIndex: 2,
    explanation: 'Studying economics equips decision-makers to analyze economic problems in their correct analytical perspective.',
    formulaUsed: 'Economic Benefit = Examine Problems in Right Perspective'
  },
  {
    id: 'q_eco_42',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'The managerial economics –',
    options: [
      'Is Applied Economics that fills the gap between economic theory and business practice',
      'Is just a theory concept',
      'Trains managers how to behave in recession',
      'Provides the tools which explain various concepts'
    ],
    correctIndex: 0,
    explanation: 'Managerial Economics (Business Economics) is applied microeconomics that bridges economic theory with business practice.',
    formulaUsed: 'Managerial Economics = Applied Economics (Theory + Practice)'
  },
  {
    id: 'q_eco_43',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'Which of the following statements is correct?',
    options: [
      'Micro economics is important for study of a particular household and a particular firm',
      'Macro economics is important for study of economic conditions of a country',
      'None of the above',
      'Both a and b'
    ],
    correctIndex: 3,
    explanation: 'Both statements are true: Microeconomics analyzes individual units (household/firm), while Macroeconomics analyzes aggregate national economic conditions.',
    formulaUsed: 'Micro = Individual Units; Macro = National Country Conditions'
  },
  {
    id: 'q_eco_44',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'Mr. Satish hired a business consultant to guide him for growth of his business. The consultant visited his factory and suggested some changes with respect to staff appointment, loan availability and so on. Which approach is that consultant using?',
    options: ['Micro economics', 'Macro economics', 'None of the above', 'Both a and b'],
    correctIndex: 0,
    explanation: 'Advising an individual factory owner on firm-level operations (staffing, internal loans) is a Microeconomic / Managerial approach.',
    formulaUsed: 'Firm Level Advice = Microeconomics'
  },
  {
    id: 'q_eco_45',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1b',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'Profit motive is a merit of',
    options: ['Socialism', 'Capitalism', 'Mixed economy', 'None of the above'],
    correctIndex: 1,
    explanation: 'Profit motive encourages efficiency, risk-taking, and hard work in a Capitalist system.',
    formulaUsed: 'Profit Motive Merit = Capitalism'
  },
  {
    id: 'q_eco_46',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1b',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: '_________ is also called as command economy',
    options: ['Socialist', 'Capitalist', 'Mixed economy', 'None of the above'],
    correctIndex: 0,
    explanation: 'A Socialist economy is also referred to as a Command economy or Centrally Planned economy.',
    formulaUsed: 'Command Economy = Socialist Economy'
  },
  {
    id: 'q_eco_47',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Medium',
    questionText: 'Which of the following statements is/are correct regarding business economics?',
    options: [
      'Business economics attempts to indicate how business policies are firmly rooted in economic principles.',
      'Business economics uses micro economic analysis of the business unit and macro economic analysis of business environment.',
      'Business economics takes a pragmatic approach towards facilitating an integration between economic theory and business practices.',
      'All the above.'
    ],
    correctIndex: 3,
    explanation: 'All the options correctly describe key characteristics of Business Economics.',
    formulaUsed: 'Business Economics = Pragmatic, Micro Unit + Macro Environment'
  },
  {
    id: 'q_eco_48',
    chapterId: 'eco-ch1',
    subExerciseId: 'eco-1a',
    chapterName: 'Nature & Scope of Business Economics',
    difficulty: 'Easy',
    questionText: 'Unlimited ends and limited means together present the problem of __________.',
    options: ['Scarcity of resources', 'Choice', 'Distribution', 'None of the above'],
    correctIndex: 1,
    explanation: 'Unlimited human wants (ends) paired with limited resources (means) force society to solve the problem of Choice.',
    formulaUsed: 'Ends + Scarce Means → Problem of Choice'
  },
  {
    id: 'q_eco_49',
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
    id: 'q_eco_19',
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
    id: 'q_eco_20',
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
    id: 'q_eco_21',
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
    id: 'q_eco_22',
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
    id: 'q_eco_23',
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
    id: 'q_eco_24',
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
    id: 'q_eco_25',
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
    id: 'q_eco_26',
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
    id: 'q_eco_27',
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
    id: 'q_eco_28',
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
    id: 'q_eco_29',
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
    id: 'q_eco_30',
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
