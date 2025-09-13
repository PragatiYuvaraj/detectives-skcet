// Application data
const appData = {
  "quizQuestions": [
    {
      "id": 1,
      "category": "Fake News Detection",
      "question": "What is the first step you should take when you encounter a suspicious news article online?",
      "options": ["Share it immediately", "Check the source and author", "Assume it's true", "Ignore it completely"],
      "correct": 1,
      "explanation": "Always verify the source and author credibility before believing or sharing news content.",
      "points": 10
    },
    {
      "id": 2,
      "category": "Cybersecurity",
      "question": "Which of these makes a password more secure?",
      "options": ["Using your birthday", "Including numbers and symbols", "Using the same password everywhere", "Making it short and simple"],
      "correct": 1,
      "explanation": "Strong passwords combine letters, numbers, and special characters to make them harder to crack.",
      "points": 10
    },
    {
      "id": 3,
      "category": "Social Media Safety",
      "question": "What information should you NEVER share publicly on social media?",
      "options": ["Your favorite food", "Your full address and phone number", "Your hobby interests", "Your school name only"],
      "correct": 1,
      "explanation": "Personal details like full address and phone number can be used by cybercriminals for identity theft or harassment.",
      "points": 10
    },
    {
      "id": 4,
      "category": "Fake News Detection",
      "question": "A news headline uses ALL CAPITAL LETTERS and seems too shocking to believe. What should you do?",
      "options": ["Share it because it's important", "Check if other credible sources report the same story", "Believe it immediately", "Comment without reading"],
      "correct": 1,
      "explanation": "Sensational headlines often indicate fake news. Always cross-check with multiple reliable sources.",
      "points": 10
    },
    {
      "id": 5,
      "category": "Digital Ethics",
      "question": "You receive a message asking you to forward it to 10 friends to 'save someone's life'. What should you do?",
      "options": ["Forward it immediately", "Verify the information first", "Forward it to more than 10 friends", "Add your own message and forward"],
      "correct": 1,
      "explanation": "Chain messages are often hoaxes. Always verify information before sharing to prevent spreading misinformation.",
      "points": 10
    },
    {
      "id": 6,
      "category": "Cybersecurity",
      "question": "You receive an email claiming to be from your bank asking for your password. What should you do?",
      "options": ["Reply with your password immediately", "Call your bank directly to verify", "Click the link in the email", "Forward the email to friends"],
      "correct": 1,
      "explanation": "Legitimate banks never ask for passwords via email. This is likely a phishing attempt. Always verify by calling directly.",
      "points": 10
    },
    {
      "id": 7,
      "category": "Privacy Protection",
      "question": "What does 'https://' at the beginning of a website URL indicate?",
      "options": ["The website is fake", "The connection is secure", "The website has viruses", "Nothing important"],
      "correct": 1,
      "explanation": "HTTPS indicates a secure, encrypted connection that protects your data from being intercepted.",
      "points": 10
    },
    {
      "id": 8,
      "category": "Social Media Safety",
      "question": "Someone you don't know sends you a friend request and asks to meet in person. What should you do?",
      "options": ["Meet them immediately", "Ignore and report the request", "Ask for their personal information", "Share your location with them"],
      "correct": 1,
      "explanation": "Unknown online contacts requesting meetings could be dangerous. Always ignore and report suspicious requests.",
      "points": 10
    }
  ],
  "badges": [
    {
      "id": "daily_streak_3",
      "name": "3-Day Detective",
      "description": "Complete daily quizzes for 3 consecutive days",
      "icon": "🔍"
    },
    {
      "id": "fact_checker",
      "name": "Fact Checker",
      "description": "Perfect score on 5 Fake News Detection questions",
      "icon": "✅"
    },
    {
      "id": "cyber_guardian",
      "name": "Cyber Guardian",
      "description": "Perfect score on 5 Cybersecurity questions",
      "icon": "🛡️"
    },
    {
      "id": "privacy_pro",
      "name": "Privacy Pro",
      "description": "Complete all Privacy Protection lessons",
      "icon": "🔒"
    },
    {
      "id": "social_sleuth",
      "name": "Social Media Sleuth",
      "description": "Master all Social Media Safety topics",
      "icon": "📱"
    }
  ],
  "learningModules": [
    {
      "id": "fake_news_basics",
      "title": "Spotting Fake News: The Basics",
      "description": "Learn essential techniques to identify false information online",
      "lessons": [
        "Check the source and author",
        "Look for supporting evidence",
        "Examine the URL and website design",
        "Check the date and context",
        "Verify with fact-checking websites"
      ]
    },
    {
      "id": "password_security",
      "title": "Password Protection Mastery",
      "description": "Create and manage secure passwords to protect your accounts",
      "lessons": [
        "What makes a password strong",
        "Using password managers",
        "Two-factor authentication",
        "Avoiding common password mistakes",
        "What to do if your password is compromised"
      ]
    },
    {
      "id": "social_media_privacy",
      "title": "Social Media Privacy Settings",
      "description": "Control your digital footprint and protect your personal information",
      "lessons": [
        "Understanding privacy settings on major platforms",
        "What information to keep private",
        "Managing friend requests and followers",
        "Dealing with cyberbullying",
        "Reporting inappropriate content"
      ]
    },
    {
      "id": "phishing_prevention",
      "title": "Phishing Prevention Guide",
      "description": "Recognize and avoid phishing attempts to protect your data",
      "lessons": [
        "What is phishing and how it works",
        "Common phishing techniques",
        "How to verify legitimate emails",
        "What to do if you fall for a phishing scam",
        "Protecting others from phishing"
      ]
    }
  ],
  "caseStudies": [
    {
      "id": "phishing_email_case",
      "title": "The Trojan Email Attack",
      "description": "Based on a real incident: A student receives a suspicious email with a malicious attachment",
      "scenario": "Alex receives an email claiming to be from a popular online store with an attachment labeled 'Invoice_Urgent.pdf'. The email says there was an issue with a recent purchase and asks to open the attachment immediately.",
      "choices": [
        {
          "text": "Open the attachment immediately to see what's wrong",
          "correct": false,
          "feedback": "Never open suspicious attachments! This could install malware on your device."
        },
        {
          "text": "Delete the email without opening the attachment",
          "correct": true,
          "feedback": "Great choice! When in doubt, it's better to delete suspicious emails."
        },
        {
          "text": "Forward the email to friends asking for advice",
          "correct": false,
          "feedback": "Forwarding suspicious emails can spread malware to others' devices."
        },
        {
          "text": "Reply asking for more information",
          "correct": false,
          "feedback": "Replying confirms your email is active and may lead to more scam attempts."
        }
      ]
    },
    {
      "id": "fake_news_viral",
      "title": "The Viral Fake News Story",
      "description": "A shocking news story is spreading rapidly on social media",
      "scenario": "You see a story on your social media feed claiming 'Local school closes permanently due to dangerous chemical spill - SHARE TO WARN EVERYONE!' The post has been shared thousands of times in just a few hours.",
      "choices": [
        {
          "text": "Share immediately to warn your friends",
          "correct": false,
          "feedback": "Sharing unverified information can spread panic and misinformation."
        },
        {
          "text": "Check official news sources and school websites first",
          "correct": true,
          "feedback": "Excellent! Always verify important news with official sources before sharing."
        },
        {
          "text": "Add your own comment and share",
          "correct": false,
          "feedback": "Adding comments doesn't make fake news true. Verify first!"
        },
        {
          "text": "Ignore it completely",
          "correct": false,
          "feedback": "While not sharing is good, you could also help by reporting false information."
        }
      ]
    }
  ],
  "ranks": [
    {"name": "Novice Detective", "pointsRequired": 0, "icon": "🔍"},
    {"name": "Junior Sleuth", "pointsRequired": 100, "icon": "🕵️"},
    {"name": "Cyber Detective", "pointsRequired": 300, "icon": "💻"},
    {"name": "Master Sherlock", "pointsRequired": 500, "icon": "🎯"}
  ]
};

// Application state
let appState = {
  currentSection: 'dashboard',
  user: {
    totalPoints: 0,
    streak: 0,
    earnedBadges: [],
    completedModules: [],
    solvedCases: [],
    dailyQuizCompleted: false,
    lastQuizDate: null
  },
  quiz: {
    currentQuestionIndex: 0,
    score: 0,
    timeLeft: 30,
    timer: null,
    questions: [],
    userAnswers: []
  }
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  updateDashboard();
  renderBadges();
  renderModules();
  renderCases();
});

function initializeApp() {
  // Check if user has completed quiz today
  const today = new Date().toDateString();
  if (appState.user.lastQuizDate !== today) {
    appState.user.dailyQuizCompleted = false;
  }
  
  // Initialize quiz questions (shuffled)
  appState.quiz.questions = [...appData.quizQuestions].sort(() => Math.random() - 0.5);
}

function setupEventListeners() {
  // Navigation buttons - Fixed event delegation
  document.addEventListener('click', function(e) {
    // Handle navigation buttons
    if (e.target.closest('.nav-btn') || e.target.closest('.dashboard-card')) {
      const target = e.target.closest('.nav-btn') || e.target.closest('.dashboard-card');
      const sectionName = target.dataset.section;
      if (sectionName) {
        showSection(sectionName);
      }
    }
    
    // Handle back buttons
    if (e.target.closest('.back-btn')) {
      const target = e.target.closest('.back-btn');
      const sectionName = target.dataset.target;
      if (sectionName) {
        showSection(sectionName);
      }
    }
    
    // Handle continue button in feedback modal
    if (e.target.id === 'continue-btn') {
      continueQuiz();
    }
    
    // Handle module completion
    if (e.target.closest('.module-card')) {
      const moduleCard = e.target.closest('.module-card');
      // Get module ID from the data structure
      const moduleIndex = Array.from(moduleCard.parentNode.children).indexOf(moduleCard);
      const moduleId = appData.learningModules[moduleIndex].id;
      completeModule(moduleId);
    }
  });
  
  // Close modal when clicking outside
  document.getElementById('feedback-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.add('hidden');
    }
  });
}

function showSection(sectionName) {
  // Hide current section
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionName);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  
  // Update navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeNavBtn = document.querySelector(`.nav-btn[data-section="${sectionName}"]`);
  if (activeNavBtn) {
    activeNavBtn.classList.add('active');
  }
  
  // Update state
  appState.currentSection = sectionName;
  
  // Initialize section-specific content
  if (sectionName === 'quiz' && !appState.user.dailyQuizCompleted) {
    initializeQuiz();
  }
}

function updateDashboard() {
  // Update user stats
  document.getElementById('streak-counter').textContent = appState.user.streak;
  document.getElementById('total-points').textContent = appState.user.totalPoints;
  document.getElementById('badge-count').textContent = appState.user.earnedBadges.length;
  
  // Update rank display
  const currentRank = getCurrentRank();
  const nextRank = getNextRank();
  
  document.getElementById('current-rank-icon').textContent = currentRank.icon;
  document.getElementById('current-rank-name').textContent = currentRank.name;
  
  if (nextRank) {
    const progress = ((appState.user.totalPoints - currentRank.pointsRequired) / 
                     (nextRank.pointsRequired - currentRank.pointsRequired)) * 100;
    document.getElementById('rank-progress').style.width = Math.min(progress, 100) + '%';
    document.getElementById('progress-text').textContent = 
      `${appState.user.totalPoints} / ${nextRank.pointsRequired} points to next rank`;
  } else {
    document.getElementById('rank-progress').style.width = '100%';
    document.getElementById('progress-text').textContent = 'Maximum rank achieved!';
  }
  
  // Update card stats
  document.getElementById('daily-quiz-status').textContent = 
    appState.user.dailyQuizCompleted ? 'Completed today ✅' : 'Ready to start';
  document.getElementById('modules-progress').textContent = 
    `${appState.user.completedModules.length} / ${appData.learningModules.length} completed`;
  document.getElementById('cases-progress').textContent = 
    `${appState.user.solvedCases.length} / ${appData.caseStudies.length} solved`;
}

function getCurrentRank() {
  let currentRank = appData.ranks[0];
  for (let rank of appData.ranks) {
    if (appState.user.totalPoints >= rank.pointsRequired) {
      currentRank = rank;
    }
  }
  return currentRank;
}

function getNextRank() {
  for (let rank of appData.ranks) {
    if (appState.user.totalPoints < rank.pointsRequired) {
      return rank;
    }
  }
  return null;
}

function renderBadges() {
  const container = document.getElementById('badges-container');
  container.innerHTML = '';
  
  appData.badges.forEach(badge => {
    const badgeElement = document.createElement('div');
    badgeElement.className = `badge-item ${appState.user.earnedBadges.includes(badge.id) ? 'earned' : 'locked'}`;
    badgeElement.innerHTML = `
      <div class="badge-icon">${badge.icon}</div>
      <div class="badge-name">${badge.name}</div>
      <p class="badge-description">${badge.description}</p>
    `;
    container.appendChild(badgeElement);
  });
}

function renderModules() {
  const container = document.getElementById('modules-container');
  container.innerHTML = '';
  
  appData.learningModules.forEach(module => {
    const moduleElement = document.createElement('div');
    moduleElement.className = `module-card ${appState.user.completedModules.includes(module.id) ? 'completed' : ''}`;
    
    const lessonsList = module.lessons.map(lesson => 
      `<li class="${appState.user.completedModules.includes(module.id) ? 'completed' : ''}">${lesson}</li>`
    ).join('');
    
    moduleElement.innerHTML = `
      <div class="module-header">
        <h3 class="module-title">${module.title}</h3>
        <div class="module-status">${appState.user.completedModules.includes(module.id) ? '✅' : '📖'}</div>
      </div>
      <p class="module-description">${module.description}</p>
      <ul class="module-lessons">${lessonsList}</ul>
    `;
    
    container.appendChild(moduleElement);
  });
}

function renderCases() {
  const container = document.getElementById('cases-container');
  container.innerHTML = '';
  
  appData.caseStudies.forEach(caseStudy => {
    const caseElement = document.createElement('div');
    caseElement.className = 'case-card';
    
    const choicesHTML = caseStudy.choices.map((choice, index) => 
      `<button class="choice-btn" data-case="${caseStudy.id}" data-choice="${index}">${choice.text}</button>`
    ).join('');
    
    caseElement.innerHTML = `
      <div class="case-header">
        <h3 class="case-title">${caseStudy.title}</h3>
        <div class="case-status">${appState.user.solvedCases.includes(caseStudy.id) ? '✅' : '🔍'}</div>
      </div>
      <p class="case-description">${caseStudy.description}</p>
      <div class="case-scenario">
        <p>${caseStudy.scenario}</p>
      </div>
      <div class="case-choices">${choicesHTML}</div>
      <div class="case-feedback" id="feedback-${caseStudy.id}"></div>
    `;
    
    container.appendChild(caseElement);
  });
  
  // Add event listeners for case choices
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('choice-btn')) {
      handleCaseChoice(e);
    }
  });
}

function handleCaseChoice(e) {
  const caseId = e.target.dataset.case;
  const choiceIndex = parseInt(e.target.dataset.choice);
  const caseStudy = appData.caseStudies.find(c => c.id === caseId);
  const choice = caseStudy.choices[choiceIndex];
  
  // Disable all choices for this case
  document.querySelectorAll(`[data-case="${caseId}"]`).forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.choice == choiceIndex) {
      btn.classList.add(choice.correct ? 'correct' : 'incorrect');
    }
  });
  
  // Show feedback
  const feedbackElement = document.getElementById(`feedback-${caseId}`);
  feedbackElement.innerHTML = choice.feedback;
  feedbackElement.className = `case-feedback ${choice.correct ? 'correct' : 'incorrect'}`;
  feedbackElement.style.display = 'block';
  
  // Award points and mark as solved if correct
  if (choice.correct) {
    if (!appState.user.solvedCases.includes(caseId)) {
      appState.user.solvedCases.push(caseId);
      appState.user.totalPoints += 20;
      updateDashboard();
      checkBadges();
      renderCases(); // Re-render to update status
    }
  }
}

function completeModule(moduleId) {
  if (!appState.user.completedModules.includes(moduleId)) {
    appState.user.completedModules.push(moduleId);
    appState.user.totalPoints += 30;
    updateDashboard();
    renderModules();
    checkBadges();
  }
}

function initializeQuiz() {
  if (appState.user.dailyQuizCompleted) {
    document.getElementById('quiz-card').innerHTML = '<h3>You\'ve already completed today\'s quiz! Come back tomorrow for new challenges.</h3>';
    return;
  }
  
  // Reset quiz state
  appState.quiz.currentQuestionIndex = 0;
  appState.quiz.score = 0;
  appState.quiz.userAnswers = [];
  
  // Show quiz card and hide results
  document.getElementById('quiz-card').classList.remove('hidden');
  document.getElementById('quiz-results').classList.add('hidden');
  
  showQuestion();
}

function showQuestion() {
  const question = appState.quiz.questions[appState.quiz.currentQuestionIndex];
  if (!question) {
    showQuizResults();
    return;
  }
  
  // Update progress
  document.getElementById('quiz-progress').style.width = 
    ((appState.quiz.currentQuestionIndex + 1) / appState.quiz.questions.length) * 100 + '%';
  document.getElementById('quiz-progress-text').textContent = 
    `Question ${appState.quiz.currentQuestionIndex + 1} of ${appState.quiz.questions.length}`;
  
  // Show question
  document.getElementById('question-category').textContent = question.category;
  document.getElementById('question-text').textContent = question.question;
  
  // Show options
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = option;
    button.addEventListener('click', () => selectAnswer(index));
    optionsContainer.appendChild(button);
  });
  
  // Start timer
  startQuizTimer();
}

function startQuizTimer() {
  appState.quiz.timeLeft = 30;
  updateTimerDisplay();
  
  // Clear any existing timer
  if (appState.quiz.timer) {
    clearInterval(appState.quiz.timer);
  }
  
  appState.quiz.timer = setInterval(() => {
    appState.quiz.timeLeft--;
    updateTimerDisplay();
    
    if (appState.quiz.timeLeft <= 10) {
      document.getElementById('quiz-timer').classList.add('warning');
    }
    
    if (appState.quiz.timeLeft <= 0) {
      clearInterval(appState.quiz.timer);
      selectAnswer(-1); // Time's up, no answer selected
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerElement = document.getElementById('quiz-timer');
  if (timerElement) {
    timerElement.textContent = appState.quiz.timeLeft;
  }
}

function selectAnswer(answerIndex) {
  clearInterval(appState.quiz.timer);
  
  const question = appState.quiz.questions[appState.quiz.currentQuestionIndex];
  const isCorrect = answerIndex === question.correct;
  
  // Store user answer
  appState.quiz.userAnswers.push({
    questionId: question.id,
    selectedAnswer: answerIndex,
    correct: isCorrect,
    timeLeft: appState.quiz.timeLeft
  });
  
  // Update score
  if (isCorrect) {
    appState.quiz.score++;
    let points = question.points;
    // Bonus points for speed
    if (appState.quiz.timeLeft > 20) points += 5;
    else if (appState.quiz.timeLeft > 10) points += 2;
    
    appState.user.totalPoints += points;
  }
  
  // Highlight correct answer
  const options = document.querySelectorAll('.option-btn');
  options.forEach((option, index) => {
    option.disabled = true;
    if (index === question.correct) {
      option.classList.add('correct');
    } else if (index === answerIndex && answerIndex !== question.correct) {
      option.classList.add('incorrect');
    }
  });
  
  // Show feedback
  showFeedback(question, isCorrect, answerIndex);
}

function showFeedback(question, isCorrect, answerIndex) {
  const modal = document.getElementById('feedback-modal');
  const title = document.getElementById('feedback-title');
  const result = document.getElementById('feedback-result');
  const explanation = document.getElementById('feedback-explanation');
  const pointsAwarded = document.getElementById('points-awarded');
  
  title.textContent = isCorrect ? 'Correct!' : 'Incorrect';
  result.textContent = isCorrect ? '🎉' : '❌';
  result.className = `feedback-result ${isCorrect ? 'correct' : 'incorrect'}`;
  explanation.textContent = question.explanation;
  
  if (isCorrect) {
    let points = question.points;
    if (appState.quiz.timeLeft > 20) points += 5;
    else if (appState.quiz.timeLeft > 10) points += 2;
    pointsAwarded.textContent = `+${points} points earned!`;
  } else {
    pointsAwarded.textContent = 'Better luck next time!';
  }
  
  modal.classList.remove('hidden');
}

function continueQuiz() {
  document.getElementById('feedback-modal').classList.add('hidden');
  document.getElementById('quiz-timer').classList.remove('warning');
  
  appState.quiz.currentQuestionIndex++;
  
  // Check if quiz is complete
  if (appState.quiz.currentQuestionIndex >= appState.quiz.questions.length) {
    showQuizResults();
  } else {
    showQuestion();
  }
}

function showQuizResults() {
  document.getElementById('quiz-card').classList.add('hidden');
  document.getElementById('quiz-results').classList.remove('hidden');
  
  document.getElementById('final-score').textContent = 
    `${appState.quiz.score} / ${appState.quiz.questions.length}`;
  
  const totalPointsEarned = appState.quiz.userAnswers
    .filter(answer => answer.correct)
    .reduce((total, answer) => {
      let points = 10; // Base points
      if (answer.timeLeft > 20) points += 5;
      else if (answer.timeLeft > 10) points += 2;
      return total + points;
    }, 0);
  
  document.getElementById('points-earned').textContent = totalPointsEarned;
  
  // Mark quiz as completed
  appState.user.dailyQuizCompleted = true;
  appState.user.lastQuizDate = new Date().toDateString();
  appState.user.streak++;
  
  updateDashboard();
  checkBadges();
}

function resetQuiz() {
  // Reset quiz state
  appState.user.dailyQuizCompleted = false;
  appState.quiz.currentQuestionIndex = 0;
  appState.quiz.score = 0;
  appState.quiz.userAnswers = [];
  
  // Shuffle questions again
  appState.quiz.questions = [...appData.quizQuestions].sort(() => Math.random() - 0.5);
  
  // Show quiz interface
  document.getElementById('quiz-card').classList.remove('hidden');
  document.getElementById('quiz-results').classList.add('hidden');
  
  initializeQuiz();
}

function checkBadges() {
  const newBadges = [];
  
  // Check streak badge
  if (appState.user.streak >= 3 && !appState.user.earnedBadges.includes('daily_streak_3')) {
    newBadges.push('daily_streak_3');
  }
  
  // Check fact checker badge
  const fakeNewsCorrect = appState.quiz.userAnswers
    .filter(answer => answer.correct && 
      appState.quiz.questions.find(q => q.id === answer.questionId)?.category === 'Fake News Detection')
    .length;
  if (fakeNewsCorrect >= 2 && !appState.user.earnedBadges.includes('fact_checker')) {
    newBadges.push('fact_checker');
  }
  
  // Check cyber guardian badge
  const cyberCorrect = appState.quiz.userAnswers
    .filter(answer => answer.correct && 
      appState.quiz.questions.find(q => q.id === answer.questionId)?.category === 'Cybersecurity')
    .length;
  if (cyberCorrect >= 2 && !appState.user.earnedBadges.includes('cyber_guardian')) {
    newBadges.push('cyber_guardian');
  }
  
  // Check privacy pro badge
  const privacyModulesCompleted = appState.user.completedModules
    .filter(id => id.includes('privacy') || id.includes('password') || id.includes('phishing')).length;
  if (privacyModulesCompleted >= 2 && !appState.user.earnedBadges.includes('privacy_pro')) {
    newBadges.push('privacy_pro');
  }
  
  // Check social sleuth badge
  const socialCorrect = appState.quiz.userAnswers
    .filter(answer => answer.correct && 
      appState.quiz.questions.find(q => q.id === answer.questionId)?.category === 'Social Media Safety')
    .length;
  if (socialCorrect >= 2 && !appState.user.earnedBadges.includes('social_sleuth')) {
    newBadges.push('social_sleuth');
  }
  
  // Award new badges
  newBadges.forEach(badgeId => {
    if (!appState.user.earnedBadges.includes(badgeId)) {
      appState.user.earnedBadges.push(badgeId);
      appState.user.totalPoints += 50; // Bonus points for earning badges
    }
  });
  
  if (newBadges.length > 0) {
    renderBadges();
    updateDashboard();
  }
}