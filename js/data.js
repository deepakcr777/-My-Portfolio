const PORTFOLIO_DATA = {
  typingRoles: [
    'Full-Stack Developer',
    'DevOps Enthusiast',
    'Python Developer',
    'Aspiring Engineer',
    'College Student'
  ],

  codeSnippet: `const developer = {
  name: "Deepak K",
  role: "Full-Stack Developer",
  skills: ["Python", "DevOps", "Web Dev"],
  college: "B.Tech IT",
  
  learn: () => {
    return buildFuture();
  }
};

developer.learn();`,

  skills: [
    { name: 'Python', level: 80, icon: '🐍', category: 'backend' },
    { name: 'HTML / CSS / JavaScript', level: 78, icon: '🎨', category: 'frontend' },
    { name: 'React / Node.js', level: 70, icon: '⚛️', category: 'frontend' },
    { name: 'REST APIs / Flask', level: 72, icon: '🔗', category: 'backend' },
    { name: 'MySQL / MongoDB', level: 68, icon: '🗄️', category: 'backend' },
    { name: 'Docker / Linux', level: 65, icon: '🐳', category: 'devops' },
    { name: 'Git / GitHub', level: 82, icon: '🔧', category: 'devops' },
    { name: 'CI/CD & Cloud Basics', level: 60, icon: '☁️', category: 'devops' }
  ],

  techStack: [
    'Python', 'JavaScript', 'HTML', 'CSS', 'React',
    'Node.js', 'Flask', 'MySQL', 'MongoDB', 'Git',
    'Docker', 'Linux', 'GitHub Actions', 'REST API', 'DevOps'
  ],

  projects: [
    {
      id: 1,
      title: 'Student Management System',
      category: 'fullstack',
      description: 'Full-stack web app to manage student records, attendance, and grades with role-based access.',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      tags: ['Python', 'Flask', 'MySQL', 'HTML/CSS'],
      liveUrl: '#',
      githubUrl: '#',
      details: 'College mini-project built with Python Flask backend and MySQL database. Includes admin and student dashboards, CRUD operations, and responsive UI.'
    },
    {
      id: 2,
      title: 'DevOps CI/CD Pipeline',
      category: 'devops',
      description: 'Automated build and deploy pipeline using Docker, GitHub Actions, and basic cloud deployment.',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      tags: ['Docker', 'GitHub Actions', 'Linux', 'DevOps'],
      liveUrl: '#',
      githubUrl: '#',
      details: 'Personal learning project setting up a CI/CD workflow — automated testing, Docker containerization, and deployment scripts for a sample web application.'
    },
    {
      id: 3,
      title: 'Python Automation Scripts',
      category: 'backend',
      description: 'Collection of Python scripts for file handling, data processing, and task automation.',
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      tags: ['Python', 'Automation', 'CSV', 'APIs'],
      liveUrl: '#',
      githubUrl: '#',
      details: 'Practical Python projects including bulk file renaming, CSV data analysis, web scraping basics, and REST API consumption — built to strengthen core programming skills.'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'fullstack',
      description: 'Personal portfolio built with HTML, CSS, and JavaScript featuring dynamic animations and responsive design.',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      liveUrl: '#',
      githubUrl: '#',
      details: 'This portfolio site — designed and coded from scratch with particle effects, dark/light theme, project filtering, and mobile-first responsive layout.'
    },
    {
      id: 5,
      title: 'Task Manager App',
      category: 'frontend',
      description: 'Interactive to-do application with local storage, filters, and a clean modern interface.',
      image: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      tags: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
      liveUrl: '#',
      githubUrl: '#',
      details: 'Frontend project for managing daily tasks — add, edit, delete, and filter tasks with data persisted in browser local storage.'
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      category: 'fullstack',
      description: 'Web app fetching live weather data from a public API with search by city name.',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      tags: ['JavaScript', 'REST API', 'HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
      details: 'Full-stack learning project integrating a weather REST API with a responsive dashboard showing temperature, humidity, and forecast details.'
    }
  ],

  projectCategories: [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'devops', label: 'DevOps' }
  ],

  experience: [
    {
      role: 'B.Tech — Information Technology',
      company: 'Sri Balaji Chockalingam Engineering College',
      period: 'Present — Pursuing',
      description: 'Currently pursuing B.Tech in Information Technology with focus on programming, networking, web development, cloud computing, and software engineering.',
      technologies: ['Python', 'Java', 'Web Dev', 'DBMS', 'Networking']
    },
    {
      role: 'Self-Learning — DevOps & Cloud',
      company: 'Online Courses & Labs',
      period: '2024 — Present',
      description: 'Exploring Docker, Git workflows, Linux commands, CI/CD pipelines, and cloud deployment through hands-on labs and personal projects.',
      technologies: ['Docker', 'Git', 'Linux', 'CI/CD']
    },
    {
      role: 'Self-Learning — Full-Stack Development',
      company: 'Personal Projects',
      period: '2023 — Present',
      description: 'Building full-stack web applications using HTML, CSS, JavaScript, React, Node.js, and Python Flask to strengthen practical development skills.',
      technologies: ['React', 'Node.js', 'Flask', 'MySQL']
    },
    {
      role: 'Python Programming',
      company: 'Academic & Personal Projects',
      period: '2023 — Present',
      description: 'Developed Python scripts and mini applications for automation, data handling, and backend API development as part of coursework and self-study.',
      technologies: ['Python', 'Flask', 'REST API', 'Automation']
    }
  ]
};
