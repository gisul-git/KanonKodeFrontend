export interface CurriculumWeek {
  week: string
  title: string
  topics: string[]
  project?: string
}

export interface CourseDetail {
  id: string
  transformation: {
    before: string[]
    after: string[]
  }
  highlights: {
    icon: string
    title: string
    desc: string
  }[]
  whoFor: {
    profile: string
    desc: string
    emoji: string
  }[]
  eligibility: string[]
  curriculum: CurriculumWeek[]
  targetRoles: string[]
  hiringCompanies: string[]
  successStory: {
    name: string
    before: string
    after: string
    salary: string
    quote: string
    avatar: string
    color: string
  }
  faqs: { q: string; a: string }[]
}

export const courseDetails: Record<string, CourseDetail> = {
  vibecheck: {
    id: 'vibecheck',
    transformation: {
      before: [
        'Rejected in interviews repeatedly',
        'No idea how to position yourself',
        'Weak resume with no differentiation',
        'Anxiety during HR and technical rounds',
        'Applying randomly with no strategy',
      ],
      after: [
        'Structured interview readiness system',
        'Clear personal brand and positioning',
        'ATS-optimised resume with proof points',
        'Confident communication in any round',
        'Targeted job application strategy',
      ],
    },
    highlights: [
      { icon: '📅', title: 'Daily Live Sessions', desc: 'Mon-Sat live sessions - no skipping, no excuses. High-intensity 30-day sprint.' },
      { icon: '🎭', title: 'Mock Interview Rounds', desc: 'Real mock interviews every week with detailed feedback from experienced interviewers.' },
      { icon: '📄', title: 'Resume Overhaul', desc: "Your resume gets a complete rewrite using the Kanonkode proof-first framework." },
      { icon: '👥', title: 'Peer Accountability', desc: 'Matched with an accountability partner who tracks your progress daily.' },
      { icon: '🎯', title: 'Job Strategy Session', desc: 'Personalised 1:1 session to map your target roles, companies, and application approach.' },
      { icon: '📜', title: 'Certificate Included', desc: 'Kanonkode Certificate of Completion for VibeCheck - shareable on LinkedIn.' },
    ],
    whoFor: [
      { emoji: '🎓', profile: 'Final Year Students', desc: 'Preparing for campus placements or off-campus job applications before graduation.' },
      { emoji: '📋', profile: 'Fresh Graduates', desc: "Graduated but haven't cracked a job yet - need structure, positioning, and momentum." },
      { emoji: '🔄', profile: 'Career Switchers', desc: 'Moving from one field to another and need help repositioning your profile effectively.' },
      { emoji: '📉', profile: 'Repeated Rejectors', desc: 'Getting shortlisted but failing interviews - need to fix the conversion problem.' },
    ],
    eligibility: [
      'Any graduation background (BCom, BBA, BA, BE, BSc)',
      'No prior work experience required',
      'Must commit to Mon-Sat live sessions for 30 days',
      'Access to a laptop and stable internet connection',
    ],
    curriculum: [
      { week: 'Week 1', title: 'Foundation & Positioning', topics: ['Self-assessment and strength mapping', 'Personal brand framework', 'Resume audit and rewrite', 'LinkedIn profile overhaul'], project: 'Rewritten resume + LinkedIn profile' },
      { week: 'Week 2', title: 'Interview Mechanics', topics: ['STAR method mastery', 'HR question bank with frameworks', 'Communication and body language', 'First mock interview round'], project: 'Mock interview 1 with feedback' },
      { week: 'Week 3', title: 'Job Strategy & Targeting', topics: ['Role-fit mapping and company targeting', 'Application tracking system', 'Cold outreach and referral strategy', 'Second mock interview round'], project: 'Target company list + outreach templates' },
      { week: 'Week 4', title: 'Final Sprint & Conversion', topics: ['Negotiation basics', 'Offer evaluation framework', 'Third mock interview - final round simulation', 'Graduation and certification'], project: 'Final mock + certificate' },
    ],
    targetRoles: ['HR Executive', 'Operations Associate', 'Sales Executive', 'Business Development', 'Marketing Executive', 'Customer Success'],
    hiringCompanies: ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture', 'Deloitte', 'KPMG', 'Amazon', 'Flipkart', 'Zomato'],
    successStory: {
      name: 'Anjali Sharma',
      before: 'Unemployed Graduate',
      after: 'HR Executive at Deloitte',
      salary: '₹4.8 LPA',
      quote: 'VibeCheck was the turning point. I had been applying for 6 months with zero results. After 30 days, I had 3 offers. The mock interviews alone changed everything.',
      avatar: 'A',
      color: '#4F46E5',
    },
    faqs: [
      { q: 'Is this only for non-tech students?', a: 'VibeCheck is designed for all graduation backgrounds - tech and non-tech. The focus is on interview readiness, positioning, and job strategy, not on technical skills.' },
      { q: 'What if I miss a live session?', a: 'All sessions are recorded and available within 24 hours. However, we strongly recommend attending live for the accountability and mock interview rounds.' },
      { q: 'Is there a placement guarantee?', a: 'We do not offer a placement guarantee. VibeCheck gives you the systems, confidence, and strategy to crack interviews - outcomes depend on your effort and application consistency.' },
      { q: 'Can I do this alongside college?', a: 'Yes. Sessions are structured around 1-1.5 hours per day Mon-Sat. Most students manage it alongside their final semester.' },
      { q: 'What is the scholarship price?', a: 'VibeCheck scholarship seats are priced at ₹8,900-₹9,900 based on your application and merit evaluation. Institution cohort pricing is ₹6,500-₹8,500.' },
    ],
  },

  aao: {
    id: 'aao',
    transformation: {
      before: [
        'Confused about where to start with AI',
        'Stuck in low-signal, low-growth roles',
        'No technical portfolio or proof of work',
        'Struggling to find freelance opportunities',
        'Watching others get AI-enabled jobs',
      ],
      after: [
        'Confident AI Automation Operator with proof',
        'Portfolio of 10+ real automation systems',
        'Freelance-ready with client-facing skills',
        'Job-ready for AI-enabled roles immediately',
        'Certified by Kanonkode with verifiable proof',
      ],
    },
    highlights: [
      { icon: '🤖', title: 'No Coding Required', desc: "Built for non-coders. You'll use AI tools and no-code platforms to build real systems." },
      { icon: '🏗️', title: '10+ Live Projects', desc: 'Every week you ship something real. By end of the programme, you have 10+ verified deliverables.' },
      { icon: '💼', title: 'Freelance Pathway', desc: 'Learn how to price, package, and sell automation services as a freelancer from Day 1.' },
      { icon: '🧪', title: 'Weekend Implementation Labs', desc: 'Dedicated weekend labs to implement what you learned during the week in real environments.' },
      { icon: '📚', title: 'Async LMS Revision', desc: 'Full async LMS with revision materials, recorded sessions, and resource libraries.' },
      { icon: '🎖️', title: 'AI Automation Operator™ Cert', desc: 'Industry-recognised certification with a verifiable credential link for your LinkedIn.' },
    ],
    whoFor: [
      { emoji: '🎓', profile: 'Fresh Graduates', desc: 'BCom, BBA, BA, or non-placed engineers who want an AI-enabled career without coding depth.' },
      { emoji: '💼', profile: 'Early Professionals', desc: 'Working in low-growth roles who want to pivot into AI-enabled positions quickly.' },
      { emoji: '🧑‍💻', profile: 'Aspiring Freelancers', desc: 'Want to offer automation services to clients and build an independent income stream.' },
      { emoji: '🏫', profile: 'College Students', desc: 'Want to graduate with a portfolio that stands out and job-ready AI skills.' },
    ],
    eligibility: [
      'Any graduation background - no engineering required',
      'Basic computer literacy (email, spreadsheets)',
      'No prior coding experience needed',
      'Commitment to 3 live sessions per week + weekend labs',
    ],
    curriculum: [
      { week: 'Weeks 1-2', title: 'AI Fundamentals & Mindset', topics: ['What AI can and cannot do', 'AI tool landscape overview', 'Prompt engineering basics', 'Setting up your AI workspace'], project: 'AI workspace setup + first prompt system' },
      { week: 'Weeks 3-5', title: 'Automation Foundations', topics: ['Zapier and Make (Integromat)', 'Workflow design principles', 'API basics without coding', 'Building your first automation'], project: 'End-to-end automated workflow (Project 1)' },
      { week: 'Weeks 6-8', title: 'Advanced AI Operators', topics: ['ChatGPT and Claude API usage', 'AI agents and assistants', 'Document automation systems', 'Data processing workflows'], project: 'AI-powered business automation (Project 2-3)' },
      { week: 'Weeks 9-11', title: 'Business Automation Systems', topics: ['CRM automation', 'Email and marketing automation', 'Report generation with AI', 'Client delivery systems'], project: 'Full business automation suite (Project 4-6)' },
      { week: 'Weeks 12-14', title: 'Freelance & Client Work', topics: ['Packaging automation services', 'Pricing and proposal writing', 'Client onboarding workflow', 'Portfolio creation'], project: 'Freelance portfolio (Project 7-9)' },
      { week: 'Weeks 15-16', title: 'Capstone & Certification', topics: ['Capstone project delivery', 'Peer review and feedback', 'Interview and pitch prep', 'Certification evaluation'], project: 'Capstone AI automation system (Project 10+)' },
    ],
    targetRoles: ['AI Automation Specialist', 'No-Code Developer', 'Operations Analyst', 'AI Tools Consultant', 'Workflow Engineer', 'Freelance Automation Expert'],
    hiringCompanies: ['Startup ecosystem', 'Digital agencies', 'SMBs', 'E-commerce companies', 'Marketing firms', 'Freelance platforms'],
    successStory: {
      name: 'Rohan Mehta',
      before: 'BBA Graduate - Unemployed',
      after: 'AI Automation Specialist',
      salary: '₹7.2 LPA',
      quote: 'I had no coding background and was skeptical. But AAO gave me real systems to build, not just theory. By Week 8, I had my first freelance client. By Week 16, I had a full-time offer.',
      avatar: 'R',
      color: '#14B8A6',
    },
    faqs: [
      { q: 'Do I need to know how to code?', a: "No. AAO is specifically designed for non-coders. You'll use AI tools, no-code platforms like Zapier and Make, and visual workflow builders." },
      { q: 'What tools will I be working with?', a: 'Zapier, Make (Integromat), ChatGPT, Claude, Notion, Airtable, and several other no-code and AI platforms used in real business environments.' },
      { q: 'Is placement support included?', a: 'Yes. AAO includes placement support with resume review, LinkedIn optimisation, job-role targeting, and mock interviews for AI-related roles.' },
      { q: 'Can I start freelancing during the programme?', a: "Yes - the Freelance Pathway module (Weeks 12-14) specifically prepares you to take on clients while you're still learning." },
      { q: 'What is the scholarship seat pricing?', a: 'Scholarship/merit seats are priced at ₹24,900-₹29,900 based on application quality. Institution and cohort pricing is ₹19,900-₹24,900.' },
    ],
  },

  aada: {
    id: 'aada',
    transformation: {
      before: [
        'Stuck at Excel and basic reporting tasks',
        'No idea how to build dashboards that matter',
        'Cannot speak the language of data in meetings',
        'Overlooked for analyst roles due to skill gaps',
        'No portfolio proof to show employers',
      ],
      after: [
        'Business-facing analyst with AI-powered toolkit',
        'Tableau and Power BI dashboards in your portfolio',
        'Confident presenting data insights to stakeholders',
        'Interview-ready for analyst roles at top companies',
        '6+ verified projects and a capstone to show',
      ],
    },
    highlights: [
      { icon: '📊', title: '3 Live Classes + 2 Labs/Week', desc: '5 structured sessions per week - live classes for concepts, labs for hands-on practice.' },
      { icon: '💼', title: 'Business Case Sprints', desc: 'Bi-weekly business case sprints using real company datasets to build analyst intuition.' },
      { icon: '🤖', title: 'AI-Powered Analytics', desc: 'Learn to use AI tools to automate analysis, generate insights, and write SQL queries faster.' },
      { icon: '🏆', title: 'Capstone Project', desc: 'A full end-to-end analytics project simulating a real business problem - your portfolio centrepiece.' },
      { icon: '🎯', title: 'Role-Clarity Focus', desc: 'Built around the exact skills MNCs and startups test for in data analyst interviews.' },
      { icon: '🏅', title: 'Applied AI Data Analyst™ Cert', desc: 'Verifiable industry certificate with a public credential link for LinkedIn and job applications.' },
    ],
    whoFor: [
      { emoji: '📈', profile: 'Commerce & Business Grads', desc: 'BCom, BBA, MBA students who want to transition into analytics with strong business context.' },
      { emoji: '🏢', profile: 'Operations & MIS Professionals', desc: 'Working in reporting, MIS, or ops roles who want to upskill into proper analytics positions.' },
      { emoji: '💡', profile: 'Career Switchers', desc: 'From any background wanting a clear, high-demand analytics career with strong ROI.' },
      { emoji: '🎓', profile: 'Engineering Graduates', desc: 'Non-CS engineers who want to move into data roles without going deep into ML or coding.' },
    ],
    eligibility: [
      'Any graduation background - BCom, BBA, MBA, or engineering',
      'Basic Excel or spreadsheet familiarity',
      'No prior SQL or Python experience needed',
      'Commitment to 5 sessions per week (3 live + 2 labs)',
    ],
    curriculum: [
      { week: 'Weeks 1-3', title: 'Data Foundations', topics: ['Data types, structures, and sources', 'Excel advanced functions for analysts', 'Introduction to SQL', 'Business metrics and KPIs'], project: 'SQL + Excel business report (Project 1)' },
      { week: 'Weeks 4-7', title: 'Python for Data Analysis', topics: ['Python basics for analysts', 'Pandas for data manipulation', 'Data cleaning and transformation', 'Exploratory Data Analysis (EDA)'], project: 'EDA on real business dataset (Project 2)' },
      { week: 'Weeks 8-11', title: 'Data Visualisation', topics: ['Tableau fundamentals and dashboards', 'Power BI for business reporting', 'Storytelling with data', 'Dashboard design principles'], project: 'Interactive Tableau + Power BI dashboard (Project 3-4)' },
      { week: 'Weeks 12-15', title: 'AI-Powered Analytics', topics: ['Using AI for data analysis', 'Automated reporting with Python', 'Statistical analysis basics', 'Business case sprint sessions'], project: 'AI-powered analytics report (Project 5-6)' },
      { week: 'Weeks 16-20', title: 'Capstone & Placement Prep', topics: ['Capstone project delivery', 'Portfolio review and polish', 'Interview preparation - analyst rounds', 'Salary negotiation for analyst roles'], project: 'Full capstone analytics project' },
    ],
    targetRoles: ['Data Analyst', 'Business Analyst', 'MIS Analyst', 'Operations Analyst', 'BI Analyst', 'Product Analyst'],
    hiringCompanies: ['Infosys', 'Wipro', 'TCS', 'Mu Sigma', 'Fractal', 'Tiger Analytics', 'Amazon', 'Flipkart', 'HDFC', 'Deloitte'],
    successStory: {
      name: 'Priya Nair',
      before: 'BCom Graduate - MIS Executive',
      after: 'Business Analyst at Fractal',
      salary: '₹9.5 LPA',
      quote: 'I was stuck doing the same Excel reports every day with no growth. AADA gave me real Python and Tableau skills in a business context. Fractal hired me for the portfolio quality alone.',
      avatar: 'P',
      color: '#4F46E5',
    },
    faqs: [
      { q: 'Do I need to know programming before joining?', a: 'No. AADA starts from the basics of Python and SQL. The programme is business-first, so you learn coding in the context of solving real business problems.' },
      { q: 'What is the difference between AADA and a generic data science course?', a: 'AADA is specifically designed for business and analytics roles - not for ML engineering. It focuses on dashboards, SQL, business case analysis, and stakeholder communication.' },
      { q: 'Are the tools used in the programme industry-relevant?', a: 'Yes. Every tool in AADA - Python, SQL, Tableau, Power BI, and AI analytics - is actively used in analyst roles at MNCs and startups today.' },
      { q: 'How is the placement support structured?', a: 'AADA includes role targeting, resume review, LinkedIn optimisation, portfolio presentation coaching, and mock analyst interviews.' },
      { q: 'What are the scholarship prices?', a: 'Scholarship/merit seats are ₹29,900-₹34,900. Institution and cohort pricing is ₹24,900-₹29,900. EMI options from ₹4,000/month.' },
    ],
  },

  aibo: {
    id: 'aibo',
    transformation: {
      before: [
        'Doing manual, repetitive business tasks daily',
        'No visibility into how AI can help your function',
        'Watching competitors use AI and fall behind',
        'No structured framework for AI adoption',
        'Overwhelmed by AI tools with no clarity',
      ],
      after: [
        'AI-enabled operator across your business function',
        'Deployed AI playbooks across sales, marketing, ops',
        'Quantifiable productivity gains to show your team',
        'Clear AI adoption framework you can replicate',
        'Positioned as an AI leader in your organisation',
      ],
    },
    highlights: [
      { icon: '⚡', title: '3 Live Sessions/Week', desc: 'Focused live sessions on applying AI across specific business functions - not theory.' },
      { icon: '📋', title: 'Playbooks & Templates', desc: 'Get 20+ ready-to-deploy AI playbooks and templates you can use from Day 1.' },
      { icon: '🔄', title: 'Weekly Implementation Sprints', desc: 'Every week you deploy something in your real work environment and measure the impact.' },
      { icon: '🎯', title: 'Cross-Functional Coverage', desc: 'Covers sales, marketing, HR, operations, finance, and product - all in one programme.' },
      { icon: '📊', title: 'ROI-Oriented Outcomes', desc: 'Learn to measure and present the business impact of AI adoption to leadership.' },
      { icon: '🏅', title: 'AI Business Operator™ Cert', desc: 'Kanonkode certificate validating your AI operator capability across business functions.' },
    ],
    whoFor: [
      { emoji: '📈', profile: 'Sales & Marketing Pros', desc: 'Want to use AI for lead generation, content, outreach, and campaign optimisation.' },
      { emoji: '🏢', profile: 'HR & Operations', desc: 'Looking to automate hiring workflows, reporting, and operational processes with AI.' },
      { emoji: '🚀', profile: 'Founders & Managers', desc: 'Want to embed AI across their teams and build a measurable competitive advantage.' },
      { emoji: '🎓', profile: 'Business School Students', desc: 'MBA and BBA students wanting AI fluency before entering the workforce.' },
    ],
    eligibility: [
      'Any business or management background',
      'Currently working in or studying a business function',
      'No coding knowledge required',
      'Access to your work tools (email, CRM, spreadsheets)',
    ],
    curriculum: [
      { week: 'Weeks 1-2', title: 'AI for Business Foundations', topics: ['AI landscape for business functions', 'Identifying automation opportunities', 'Prompt engineering for business use', 'AI tool selection framework'], project: 'AI opportunity audit of your function' },
      { week: 'Weeks 3-5', title: 'Sales & Marketing AI', topics: ['AI for lead generation and prospecting', 'Content creation at scale with AI', 'Email and outreach automation', 'Campaign analytics with AI'], project: 'AI-powered outreach system' },
      { week: 'Weeks 6-8', title: 'Operations & HR AI', topics: ['HR workflow automation', 'Operations reporting with AI', 'Meeting and documentation AI', 'Process optimisation frameworks'], project: 'Automated ops or HR workflow' },
      { week: 'Weeks 9-12', title: 'Finance, Strategy & Capstone', topics: ['Financial reporting with AI', 'Strategic decision support tools', 'Building an AI adoption roadmap', 'Capstone: cross-functional AI deployment'], project: 'Full cross-functional AI playbook' },
    ],
    targetRoles: ['AI Business Analyst', 'Operations Manager', 'Growth Manager', 'Marketing Manager', 'HR Technology Lead', 'Founder / Co-founder'],
    hiringCompanies: ['Startups', 'D2C brands', 'Consulting firms', 'FMCG companies', 'EdTech companies', 'SaaS companies'],
    successStory: {
      name: 'Kiran Rao',
      before: 'Sales Executive - Manual CRM Work',
      after: 'Head of Growth - AI-Enabled',
      salary: '₹11 LPA',
      quote: 'AIBO changed how I work entirely. I automated 60% of my daily tasks in Week 3, presented the impact to my CEO, and got promoted within 2 months of finishing the programme.',
      avatar: 'K',
      color: '#8B5CF6',
    },
    faqs: [
      { q: 'Is this suitable for non-tech business professionals?', a: 'Yes - AIBO is specifically designed for business-side professionals with no coding background. All tools are no-code or low-code.' },
      { q: 'What business functions does AIBO cover?', a: 'Sales, marketing, HR, operations, finance, and product management. The programme covers all six functions with specific AI playbooks for each.' },
      { q: 'Can I apply what I learn to my current job immediately?', a: 'Yes. AIBO is structured around weekly implementation sprints where you deploy AI in your actual work environment and measure results.' },
      { q: 'What is the duration of AIBO?', a: '12 weeks (90 days) with 3 live sessions per week plus weekly sprints. It is our shortest flagship programme by design.' },
      { q: 'What are the scholarship and institution prices?', a: 'Scholarship/merit pricing is ₹22,900-₹27,900. Institution/cohort pricing is ₹19,900-₹24,900. EMI from ₹3,000/month.' },
    ],
  },

  afsad: {
    id: 'afsad',
    transformation: {
      before: [
        'Watching tutorials but never shipping anything',
        'No deployable projects in your portfolio',
        'Unclear which tech stack to focus on',
        'Applying for jobs with no real proof of skills',
        'Missing the AI layer that employers now expect',
      ],
      after: [
        'Shipped 10+ real full-stack + mobile applications',
        'GitHub portfolio with production-ready code',
        'Full-stack + AI fluency across frontend and backend',
        'Interview-ready with live demo apps to show',
        'Product-builder identity that stands out in hiring',
      ],
    },
    highlights: [
      { icon: '💻', title: '4 Live Sessions/Week', desc: '2 coding sessions + 2 build labs per week for maximum hands-on time with the stack.' },
      { icon: '🚢', title: 'Weekly Ship Sprints', desc: 'Every week you deploy something - no feature-incomplete projects sitting in your repo.' },
      { icon: '📱', title: 'Mobile + Web + AI', desc: 'Full stack web, mobile app development, and GenAI integration - all in one programme.' },
      { icon: '🐙', title: 'GitHub-Based Learning', desc: 'All projects on GitHub with proper commit history, PRs, and documentation - the way real teams work.' },
      { icon: '🤖', title: 'GenAI Integration Layer', desc: 'Every module has an AI integration layer - build apps that use OpenAI, Claude, and other AI APIs.' },
      { icon: '🏅', title: 'AI Full Stack Dev™ Cert', desc: 'Kanonkode certificate with verified GitHub portfolio link - the most credible proof in technical hiring.' },
    ],
    whoFor: [
      { emoji: '👨‍💻', profile: 'Aspiring Developers', desc: 'Want to get into software development with a real portfolio and clear technical identity.' },
      { emoji: '🎓', profile: 'CS/Non-CS Engineers', desc: 'Engineering graduates who want to become product builders, not just coders.' },
      { emoji: '📚', profile: 'Self-Learners', desc: 'Spent months on tutorials but never shipped anything - need structure and accountability.' },
      { emoji: '🔄', profile: 'Junior Developers', desc: 'Have some coding experience but need to upgrade to a full-stack AI-enabled skill set.' },
    ],
    eligibility: [
      'Basic programming awareness (HTML, any scripting language)',
      'CS, IT, or engineering background preferred but not required',
      'Commitment to 4 live sessions + weekly ship sprints',
      'Laptop with at least 8GB RAM for local development',
    ],
    curriculum: [
      { week: 'Weeks 1-4', title: 'Frontend Foundations', topics: ['HTML, CSS, and JavaScript fundamentals', 'React and component architecture', 'State management and routing', 'Responsive design and Tailwind CSS'], project: 'Deployed React web app (Project 1-2)' },
      { week: 'Weeks 5-8', title: 'Backend & Databases', topics: ['Node.js and Express fundamentals', 'MongoDB and database design', 'REST API design and development', 'Authentication and authorisation'], project: 'Full-stack web application (Project 3-4)' },
      { week: 'Weeks 9-12', title: 'GenAI Integration', topics: ['OpenAI and Claude API integration', 'Building AI-powered features', 'Prompt engineering for developers', 'AI in production systems'], project: 'AI-powered full-stack app (Project 5-7)' },
      { week: 'Weeks 13-16', title: 'Mobile Development', topics: ['React Native for mobile apps', 'Cross-platform development', 'Mobile + backend integration', 'App deployment to stores'], project: 'Deployed mobile app (Project 8-9)' },
      { week: 'Weeks 17-24', title: 'Capstone & DevOps', topics: ['Docker and deployment basics', 'CI/CD pipelines', 'Capstone SaaS product build', 'Interview and portfolio presentation'], project: 'Production SaaS app (Project 10+)' },
    ],
    targetRoles: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'React Developer', 'Mobile App Developer', 'AI Product Developer'],
    hiringCompanies: ['Startups', 'Product companies', 'Microsoft', 'Amazon', 'Flipkart', 'Razorpay', 'CRED', 'Swiggy', 'Zomato', 'D2C brands'],
    successStory: {
      name: 'Arjun Nair',
      before: 'Tutorial-Consumer - No Job',
      after: 'Full Stack Developer at Razorpay',
      salary: '₹14 LPA',
      quote: 'I had watched 300+ hours of YouTube tutorials and still had nothing to show. AFSAD made me ship an app every week. My interviewer at Razorpay literally asked me to walk him through my GitHub live.',
      avatar: 'A',
      color: '#14B8A6',
    },
    faqs: [
      { q: 'What tech stack will I learn?', a: 'React (frontend), Node.js + Express (backend), MongoDB (database), React Native (mobile), Docker (deployment), and OpenAI/Claude APIs for AI integration.' },
      { q: 'Do I need prior coding experience?', a: "Basic programming awareness is recommended. You don't need to be a developer, but complete beginners may find the pace challenging without prior exposure." },
      { q: 'Will I build mobile apps as well?', a: 'Yes. AFSAD covers React Native for cross-platform mobile development in Weeks 13-16, with a deployed mobile app as the project deliverable.' },
      { q: 'How is placement support structured?', a: 'Placement support includes GitHub portfolio review, technical interview preparation, system design coaching, and job-role targeting for developer positions.' },
      { q: 'What are the scholarship prices?', a: 'Scholarship/merit pricing is ₹44,900-₹49,900. Institution/cohort pricing is ₹39,900-₹44,900. EMI from ₹5,500/month.' },
    ],
  },

  acde: {
    id: 'acde',
    transformation: {
      before: [
        'Stuck in support, QA, or junior IT roles',
        'No visibility into cloud or infrastructure work',
        'Afraid of the terminal and Linux environments',
        'No DevOps or CI/CD exposure on resume',
        'Missing the cloud credentials employers want',
      ],
      after: [
        'Hands-on cloud engineer with AWS and GCP fluency',
        'Live CI/CD pipelines and deployment systems built',
        'Kubernetes and Docker on your verified portfolio',
        'Infrastructure automation with Terraform and scripts',
        'Cloud & DevOps Engineer™ certificate + proof portfolio',
      ],
    },
    highlights: [
      { icon: '☁️', title: '3 Live + 2 Lab Sessions/Week', desc: 'Structured 5-session-per-week format with dedicated lab time for deploying real infrastructure.' },
      { icon: '🚀', title: 'Weekly Deploy & Scale Sprints', desc: 'Every week you deploy something live - containers, pipelines, infrastructure configurations.' },
      { icon: '🔧', title: 'Real Sandbox Access', desc: 'Dedicated sandbox environments on AWS and GCP - so you practice on real cloud, not simulations.' },
      { icon: '🤖', title: 'AI-Augmented DevOps', desc: 'Learn AI-powered monitoring, incident response, and infrastructure optimisation tools.' },
      { icon: '📊', title: 'Interview-Ready Portfolio', desc: 'GitHub repository with all your deployments, Terraform configs, and CI/CD pipeline code.' },
      { icon: '🏅', title: 'AI Cloud & DevOps Eng™ Cert', desc: 'Kanonkode certificate with a verified portfolio - strongest signal for cloud and DevOps hiring.' },
    ],
    whoFor: [
      { emoji: '🖥️', profile: 'Support Engineers', desc: 'Working in L1/L2 support who want to transition into cloud and infrastructure roles.' },
      { emoji: '🧪', profile: 'QA Engineers', desc: 'Want to move into DevOps, automation testing infrastructure, and cloud pipeline roles.' },
      { emoji: '👨‍💻', profile: 'Junior Backend Devs', desc: 'Have coding experience but lack cloud and deployment knowledge for senior roles.' },
      { emoji: '🔄', profile: 'IT Infrastructure Professionals', desc: 'Traditional on-premise IT wanting to transition to cloud-first infrastructure roles.' },
    ],
    eligibility: [
      'Basic understanding of how computers and networks work',
      'Familiarity with command line preferred (not mandatory)',
      'Engineering or IT background preferred',
      'Commitment to 5 sessions per week + weekly deploy sprints',
    ],
    curriculum: [
      { week: 'Weeks 1-3', title: 'Linux & Networking Foundations', topics: ['Linux command line mastery', 'Networking fundamentals for cloud', 'Bash scripting basics', 'Git and version control'], project: 'Automated bash scripts + Git workflow' },
      { week: 'Weeks 4-7', title: 'Containers & Docker', topics: ['Docker fundamentals', 'Container architecture and images', 'Docker Compose for multi-service apps', 'Container security basics'], project: 'Dockerised multi-service application' },
      { week: 'Weeks 8-11', title: 'Cloud Platforms (AWS + GCP)', topics: ['AWS core services (EC2, S3, RDS, Lambda)', 'GCP fundamentals and comparison', 'Cloud networking (VPC, load balancers)', 'Cloud cost management'], project: 'Full cloud deployment on AWS (Project 3-4)' },
      { week: 'Weeks 12-15', title: 'Kubernetes & IaC', topics: ['Kubernetes architecture and clusters', 'Helm charts and deployments', 'Terraform for Infrastructure as Code', 'Multi-cloud infrastructure design'], project: 'Kubernetes cluster + Terraform IaC (Project 5-6)' },
      { week: 'Weeks 16-20', title: 'CI/CD & Capstone', topics: ['CI/CD pipeline design (GitHub Actions)', 'Monitoring and alerting (Prometheus, Grafana)', 'AI-augmented infrastructure ops', 'Capstone: full cloud + DevOps system'], project: 'Production-grade cloud infrastructure (Capstone)' },
    ],
    targetRoles: ['Cloud Engineer', 'DevOps Engineer', 'Site Reliability Engineer', 'Infrastructure Engineer', 'Cloud Architect (Junior)', 'Platform Engineer'],
    hiringCompanies: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Capgemini', 'Amazon AWS', 'Microsoft Azure', 'Deloitte', 'Accenture', 'ThoughtWorks'],
    successStory: {
      name: 'Suresh Kumar',
      before: 'L2 Support Engineer - ₹3.5 LPA',
      after: 'Cloud Engineer at TCS Digital',
      salary: '₹12 LPA',
      quote: 'I was stuck in support for 3 years. ACDE gave me real cloud hands-on - I deployed my first Kubernetes cluster in Week 12. TCS Digital took me from ₹3.5 LPA to ₹12 LPA in one move.',
      avatar: 'S',
      color: '#4F46E5',
    },
    faqs: [
      { q: 'Do I need Linux experience before joining?', a: 'Basic familiarity is helpful but not mandatory. ACDE starts with Linux command line fundamentals in Weeks 1-3 before moving to cloud platforms.' },
      { q: 'Which cloud platforms are covered?', a: "AWS (primary) and GCP (secondary). You'll have sandbox access on both platforms for hands-on practice with real cloud environments." },
      { q: 'Will I get cloud certifications?', a: 'ACDE prepares you for AWS and GCP certifications but does not include the certification exam fee. The curriculum covers the knowledge and hands-on skills needed to pass them.' },
      { q: 'What is the placement support for cloud roles?', a: 'ACDE placement support includes resume review, GitHub portfolio coaching, cloud architecture interview prep, and job-role targeting for cloud and DevOps positions.' },
      { q: 'What are the scholarship prices?', a: 'Scholarship/merit pricing is ₹44,900-₹49,900. Institution/cohort pricing is ₹39,900-₹44,900. EMI from ₹5,500/month.' },
    ],
  },
}
