// Chatbot Knowledge Base about Ritesh
const knowledgeBase = {
  // Personal Information
  name: {
    keywords: ['name', 'who are you', 'what is your name', 'who is ritesh'],
    response: "Ritesh's full name is Ritesh Sanjay Sandbhor. He is a Full Stack Developer and Computer Science graduate student at George Mason University."
  },
  
  location: {
    keywords: ['location', 'where', 'address', 'city', 'live', 'based'],
    response: "Ritesh is currently located in Fairfax, Virginia, USA. He is pursuing his Master's degree at George Mason University."
  },
  
  email: {
    keywords: ['email', 'contact', 'mail', 'e-mail'],
    response: "You can reach Ritesh at riteshsandbhor1999@gmail.com. Feel free to send him an email!"
  },
  
  phone: {
    keywords: ['phone', 'number', 'call', 'telephone', 'mobile'],
    response: "Ritesh's phone number is +1 (571) 604-1043. You can also reach him via WhatsApp using the same number."
  },
  
  // Education
  education: {
    keywords: ['education', 'degree', 'university', 'college', 'school', 'gpa', 'cgpa', 'masters', 'bachelor'],
    response: "Ritesh is currently pursuing a Master of Science in Computer Science at George Mason University (2024-2026) with a GPA of 3.67/4. He completed his Bachelor of Engineering in Information Technology from K. J. Somaiya Institute of Engineering and IT, Mumbai, with a CGPA of 8.47/10."
  },
  
  // Skills
  skills: {
    keywords: ['skills', 'technologies', 'tech stack', 'programming', 'languages', 'what can he do', 'expertise'],
    response: "Ritesh is proficient in:\n\nFrontend: HTML/CSS, JavaScript/TypeScript, React.js\nBackend: Java, Python, Spring Boot, PHP\nDatabase & Cloud: SQL/Oracle, AWS, Docker\nTools: Git/GitHub, JIRA, Jenkins, Oracle Siebel CRM, Bootstrap\n\nHe specializes in building scalable, cloud-native applications and microservices."
  },
  
  // Experience
  experience: {
    keywords: ['experience', 'work', 'job', 'career', 'professional', 'tcs', 'company', 'employer'],
    response: "Ritesh has over 3 years of professional experience:\n\n• Manager on Duty at Freedom Aquatic & Fitness Center (Apr 2025 - Present)\n• Fitness Attendant at Mason Recreation, GMU (Jan 2025 - Present)\n• System Engineer at Tata Consultancy Services (Jul 2020 - Jun 2022)\n• Assistant System Engineer at TCS (Jul 2019 - Jun 2020)\n\nAt TCS, he worked on mission-critical projects for a UK telecom client, achieving 99.5% uptime and reducing testing time by 30%."
  },
  
  // Projects
  projects: {
    keywords: ['projects', 'portfolio', 'work', 'applications', 'built', 'developed', 'created'],
    response: "Ritesh has worked on several impactful projects:\n\n1. Student Information Management System (SIMS) - Serving 5,000+ students\n2. Research Publication Platform\n3. Rutuja Kulfi E-Commerce Website\n4. Farm Fresh Marketplace\n5. SARI Disease Survey Platform\n6. IoT-Based Attendance Monitoring System (published in international journal)\n\nYou can view detailed information about these projects in the Projects section of the portfolio."
  },
  
  // Current Status
  availability: {
    keywords: ['available', 'hiring', 'internship', 'opportunities', 'looking', 'seeking', 'open'],
    response: "Ritesh is currently seeking internship opportunities in software development or program management starting May 2025. He is passionate about applying his technical skills to real-world challenges and is open to collaborating with innovative teams."
  },
  
  // Achievements
  achievements: {
    keywords: ['achievements', 'accomplishments', 'success', 'results', 'impact', 'published'],
    response: "Some of Ritesh's key achievements include:\n\n• Published IoT-based patient monitoring system in an international journal\n• Achieved 99.5% uptime for production systems at TCS\n• Reduced testing time by 30% through improved processes\n• Led development of 25+ business user stories for British Telecom\n• Built systems serving 5,000+ students and 10M+ users"
  },
  
  // General
  greeting: {
    keywords: ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    response: "Hello! 👋 I'm here to help you learn more about Ritesh Sandbhor. Feel free to ask me anything about his skills, experience, education, projects, or availability!"
  },
  
  help: {
    keywords: ['help', 'what can you do', 'how', 'assist', 'support'],
    response: "I can help you learn about:\n\n• Ritesh's skills and technologies\n• Professional experience\n• Education background\n• Projects and achievements\n• Contact information\n• Current availability\n\nJust ask me anything, or use the suggestion buttons above!"
  },
  
  resume: {
    keywords: ['resume', 'cv', 'download', 'pdf'],
    response: "You can download Ritesh's resume from multiple places on the portfolio:\n\n• Hero section (opens in new tab)\n• About section (download button)\n• Resume section (download button)\n\nThe resume contains detailed information about his experience, education, and skills."
  },
  
  linkedin: {
    keywords: ['linkedin', 'social', 'connect', 'network'],
    response: "You can connect with Ritesh on LinkedIn at: https://www.linkedin.com/in/riteshsandbhor\n\nHe's always open to connecting with professionals in the tech industry!"
  },
  
  github: {
    keywords: ['github', 'code', 'repository', 'repos'],
    response: "You can view Ritesh's GitHub profile at: https://github.com/riteshsandbhor\n\nCheck out his code repositories and contributions!"
  }
};

// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
  const chatbotContainer = document.getElementById('chatbot-container');
  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbotClose = document.getElementById('chatbot-close');
  const chatbotWindow = document.getElementById('chatbot-window');
  const chatbotMessages = document.getElementById('chatbot-messages');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotSend = document.getElementById('chatbot-send');
  const suggestionButtons = document.querySelectorAll('.suggestion-btn');

  // Ensure chatbot is visible
  if (chatbotContainer) {
    chatbotContainer.style.display = 'block';
    chatbotContainer.style.visibility = 'visible';
    chatbotContainer.style.opacity = '1';
  }
  
  if (chatbotToggle) {
    chatbotToggle.style.display = 'flex';
    chatbotToggle.style.visibility = 'visible';
    chatbotToggle.style.opacity = '1';
  }

  let isOpen = false;

  // Toggle chatbot
  chatbotToggle.addEventListener('click', function() {
    isOpen = !isOpen;
    if (isOpen) {
      chatbotWindow.classList.add('active');
      chatbotToggle.classList.add('active');
      chatbotInput.focus();
    } else {
      chatbotWindow.classList.remove('active');
      chatbotToggle.classList.remove('active');
    }
  });

  // Close chatbot
  chatbotClose.addEventListener('click', function() {
    isOpen = false;
    chatbotWindow.classList.remove('active');
    chatbotToggle.classList.remove('active');
  });

  // Send message function
  function sendMessage(message) {
    if (!message.trim()) return;

    // Add user message
    addMessage(message, 'user');
    
    // Clear input
    chatbotInput.value = '';
    
    // Get bot response
    setTimeout(() => {
      const response = getBotResponse(message);
      addMessage(response, 'bot');
    }, 500);
  }

  // Add message to chat
  function addMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${type}-message`;
    
    if (type === 'bot') {
      messageDiv.innerHTML = `
        <div class="message-avatar">
          <i class="bi bi-robot"></i>
        </div>
        <div class="message-content">
          <p>${text}</p>
        </div>
      `;
    } else {
      messageDiv.innerHTML = `
        <div class="message-content">
          <p>${text}</p>
        </div>
        <div class="message-avatar">
          <i class="bi bi-person-fill"></i>
        </div>
      `;
    }
    
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // Get bot response based on user input
  function getBotResponse(userInput) {
    const input = userInput.toLowerCase().trim();
    
    // Check each knowledge base entry
    for (const [key, data] of Object.entries(knowledgeBase)) {
      for (const keyword of data.keywords) {
        if (input.includes(keyword)) {
          return data.response;
        }
      }
    }
    
    // Default response if no match found
    return "I'm not sure about that specific question, but I can help you learn about Ritesh's skills, experience, education, projects, or availability. Try asking something like 'What are Ritesh's skills?' or 'Tell me about his experience.'";
  }

  // Send button click
  chatbotSend.addEventListener('click', function() {
    sendMessage(chatbotInput.value);
  });

  // Enter key press
  chatbotInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage(chatbotInput.value);
    }
  });

  // Suggestion buttons
  suggestionButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const question = this.getAttribute('data-question');
      sendMessage(question);
    });
  });
});

