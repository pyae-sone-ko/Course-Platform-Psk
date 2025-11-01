export const COURSES = [
  {
    id: "react-jonathan",
    title: "React JS: Build Real Apps",
    teacher: "Jonathan",
    short: "A practical React course — hooks, state, components.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60",
    description:
      "Learn React by building practical projects. Hooks, context, routing, and best practices.",
    bullets: [
      "Functional components & hooks",
      "State management",
      "Routing with react-router",
      "Build-and-deploy"
    ],
    videos: [
      { id: "r1", title: "Intro to React", url: "https://www.youtube.com/embed/SqcY0GlETPk", length: "8:12" },
      { id: "r2", title: "Hooks Overview", url: "https://www.youtube.com/embed/f687hBjwFcM", length: "12:34" },
      { id: "r3", title: "State & Props", url: "https://www.youtube.com/embed/IYvD9oBCuJI", length: "10:05" }
    ]
  },
  {
    id: "sql-esmeralda",
    title: "SQL - From Zero to Hero",
    teacher: "Esmeralda",
    short: "SQL fundamentals, joins, subqueries and performance.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=60",
    description:
      "Master SQL basics and advanced queries. Prepare for real-world database work.",
    bullets: ["SELECT & JOIN", "Subqueries", "Indexes & optimization", "Real projects"],
    videos: [
      { id: "s1", title: "SQL Basics", url: "https://www.youtube.com/embed/7S_tz1z_5bA", length: "9:50" },
      { id: "s2", title: "Joins Explained", url: "https://www.youtube.com/embed/Yh4CrPHVBdE", length: "15:05" }
    ]
  },
  {
    id: "js-basics",
    title: "Modern JavaScript",
    teacher: "Maya",
    short: "ES6+, async/await, promises and practical tips.",
    image: "https://www.mygreatlearning.com/blog/wp-content/uploads/2020/07/BLOG-Images_7-7-2020-03.png",
    description: "JavaScript modern syntax and patterns for building modern apps.",
    bullets: ["ES6+", "Async patterns", "Modules", "Tooling"],
    videos: [
      { id: "j1", title: "ES6 & Beyond", url: "https://www.youtube.com/embed/NCwa_xi0Uuc", length: "11:30" },
      { id: "j2", title: "Promises & Async", url: "https://www.youtube.com/embed/PoRJizFvM7s", length: "14:20" }
    ]
  },
  {
    id: "css-design",
    title: "CSS for Developers",
    teacher: "Lina",
    short: "Flexbox, grid and modern responsive design.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
    description: "Build beautiful responsive interfaces using modern CSS.",
    bullets: ["Flexbox", "Grid", "Animations", "Responsive"],
    videos: [
      { id: "c1", title: "Flexbox Crash Course", url: "https://www.youtube.com/embed/JJSoEo8JSnc", length: "10:40" },
      { id: "c2", title: "CSS Grid Layout", url: "https://www.youtube.com/embed/jV8B24rSN5o", length: "13:00" }
    ]
  },
  {
    id: "node-backend",
    title: "Node.js & Express",
    teacher: "Samir",
    short: "Backend basics: APIs, middleware, authentication.",
    image: "https://ccitraining.edu/wp-content/uploads/2023/12/Information-Technology.jpg",
    description: "Create robust APIs and microservices using Node and Express.",
    bullets: ["REST APIs", "Auth", "Database connections", "Testing"],
    videos: [
      { id: "n1", title: "Express Basics", url: "https://www.youtube.com/embed/L72fhGm1tfE", length: "12:10" }
    ]
  },
  {
    id: "docker-ops",
    title: "Intro to Docker",
    teacher: "Rina",
    short: "Containers, images and simple deployment.",
    image: "https://t4.ftcdn.net/jpg/04/26/71/99/360_F_426719952_WtHWVePXzO2iBOdAX5IjGyCumcgj467Q.jpg",
    description: "Learn Docker fundamentals to package and ship apps easily.",
    bullets: ["Images", "Containers", "Docker Compose"],
    videos: [{ id: "d1", title: "Docker Quickstart", url: "https://www.youtube.com/embed/3c-iBn73dDE", length: "9:10" }]
  },
  {
    id: "python-data",
    title: "Python for Data",
    teacher: "Omar",
    short: "Pandas, NumPy and data cleaning workflows.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=60",
    description: "Work with real data using Python's powerful libraries.",
    bullets: ["Pandas", "NumPy", "Data cleaning", "Visualization"],
    videos: [{ id: "p1", title: "Pandas Crash Course", url: "https://www.youtube.com/embed/zmdjNSmRXF4", length: "14:45" }]
  },
  {
    id: "aws-cloud",
    title: "AWS Basics",
    teacher: "Luis",
    short: "EC2, S3, Lambda overview and cost basics.",
    image: "https://www.softkit.dev/static/images/Amazon_web_services_main_image_2_84c24de2df.png",
    description: "Understand core AWS services and deploy simple apps.",
    bullets: ["EC2 & S3", "Lambda", "IAM basics"],
    videos: [{ id: "a1", title: "AWS Overview", url: "https://www.youtube.com/embed/3XFODda6YXo", length: "16:00" }]
  },
  {
    id: "ux-design",
    title: "UX Fundamentals",
    teacher: "Priya",
    short: "Research, prototyping, user flows.",
    image: "https://api.paratechco.com/Files/Exceptional%20UX%20UI%20Design%20A%20Guide%20for%20Business%20Owners-d14e87.jpg",
    description: "Design experiences users love with practical UX steps.",
    bullets: ["Research", "Wireframing", "Testing"],
    videos: [{ id: "u1", title: "Intro to UX", url: "https://www.youtube.com/embed/ODpB9-MCa5s", length: "10:50" }]
  },
  {
    id: "ml-intro",
    title: "Machine Learning Primer",
    teacher: "Chen",
    short: "Basic ML concepts: models, training and evaluation.",
    image: "https://media.istockphoto.com/id/1047930492/photo/corridor-of-server-room-3d-illustration-with-node-base-programming-data-design-element.jpg?s=612x612&w=0&k=20&c=CTJYZS224EX8kN6XsbQOHUfwjOGxqg7w5oGHo5nlqVo=",
    description: "Start your ML journey with approachable explanations.",
    bullets: ["Supervised learning", "Evaluation", "Overfitting"],
    videos: [{ id: "m1", title: "ML Basics", url: "https://www.youtube.com/embed/GwIo3gDZCVQ", length: "13:25" }]
  },
  {
    id: "cybersec",
    title: "Intro to Cybersecurity",
    teacher: "Aisha",
    short: "Threats, defenses and secure coding practices.",
    image: "https://st.depositphotos.com/1907633/2182/i/450/depositphotos_21827101-stock-photo-businessman-working-with-a-cloud.jpg",
    description: "Learn how to think like a defender and secure applications.",
    bullets: ["Threat models", "Secure coding", "Encryption basics"],
    videos: [{ id: "cy1", title: "Security Fundamentals", url: "https://www.youtube.com/embed/v7BNtpw53AA", length: "11:00" }]
  },
  {
    id: "git-workflow",
    title: "Git & Github Workflow",
    teacher: "Diego",
    short: "Branching, PRs, merges and conflict resolution.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=40",
    description: "Become confident with source control in team projects.",
    bullets: ["Branches & PRs", "Rebasing basics", "CI tips"],
    videos: [{ id: "g1", title: "Git Basics", url: "https://www.youtube.com/embed/8JJ101D3knE", length: "9:35" }]
  }
];
