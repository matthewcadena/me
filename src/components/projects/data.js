export const projects = [
  {
    title: "Cool Stuff at Nextdoor (more coming soon!)",
    description:
      "As a 2025 summer intern on Nextdoor’s Notifications team, I work on backend features to personalize notifications for millions of users daily. I’m learning to optimize delivery pipelines, implement user-targeting logic, and ensure high availability and performance at scale. Collaborating with cross-functional teams, I write tests, improve monitoring, and contribute to production services that boost user engagement.",
    src: "nextdoor-hq.jpeg",
    link: "https://about.nextdoor.com/",
    linkText: "Learn more about Nextdoor",
    color: "#9b7d8c",
  },
  {
    title: "CX Agent Portal",
    description:
      "During my 2024 summer internship at Ford, I redesigned the agent portal for the company's customer service agents. The project involved creating an independent application with a user-friendly UI, incorporating feedback from agents to ensure an optimal experience. The solution was developed to operate without dependency on the existing content management system, which had a pending decommission date, ensuring long-term viability for Ford's customer service operations. Additionally, the application was hosted on Google Cloud Platform (GCP), and we implemented a CI/CD pipeline using Tekton to streamline development and deployment processes.",
    src: "agent-portal.png",
    link: "https://artisan.ford.com/team-shelby",
    linkText: "Read more about Team Shelby",
    color: "#a88f9b",
  },
  {
    title: "Jargon Garden",
    description:
      "During a team hackathon at my Ford internship, our team created 'Jargon Gardon,' an app that humorously transforms phrases from the user into corporate buzzword gold. Built with React and TypeScript, and powered by Ford's LLM which we connected to through the in-house API, the project was as much about having fun as it was about developing our technical skills. Our playful approach paid off—we won the popular vote for best hackathon project, even though we were the only team made up entirely of interns.",
    src: "jargon-garden.jpg",
    link: "https://artisan.ford.com/team-shelby",
    linkText: "Read more about Team Shelby",
    color: "#b89fa9",
  },
  {
    title: "RNN Language Model with Self-Attention",
    description:
      "To bolster my foundational knowledge of machine learning models and techniques, I built a recurrent neural network language model augmented with scaled dot-product self-attention. I implemented a custom RNNCell, attention mechanisms, and training loops in PyTorch to predict next-token probabilities on the TinyStories dataset. The model handles long-range dependencies by computing attention weights over all previous hidden states at each timestep. Due to CMU's academic integrity policies, the code is in a private repository. If you’d like access, please email me and I can invite you to view the repo.",
    src: "rnn-attention.png",
    link: "mailto:mcadena@andrew.cmu.edu",
    linkText: "Email me for access",
    color: "#bfa5af",
  },
  {
    title: "Gotham City Tracker",
    description:
      "As the main project in my 67-272: Application Design and Development, I developed 'Gotham City Department Tracker,' a full-stack CRUD application using Ruby on Rails, React, and MySQL. I led the entire design and development process, starting with creating user stories from a list of functional requirements. Following an incremental, agile approach, I built a custom API, implemented secure authentication, and designed a dynamic UI. The project leveraged MVC architecture for code organization, with MySQL handling database management.",
    src: "gcpd-animation.gif",
    link: "https://github.com/67-272-Students-Spring-2024/gcpd-phase-4-matthewcadena",
    linkText: "Source code",
    color: "#c8b1b8",
  },
  {
    title: "Dynamic Memory Allocator",
    description:
      "As my most low-level project, I implemented a custom 64-bit implicit free-list memory allocator with segregated free lists for course. The allocator maintains 16-byte alignment, coalesces free blocks, and uses size classes to minimize fragmentation and maximize throughput. Due to CMU’s academic integrity policies, the code is in a private repository. If you’d like access, please email me and I can invite you to view the repo. (Image credit: Bryant and O’Hallaron, Computer Systems: A Programmer’s Perspective, Third Edition)",
    src: "malloc-lab.png",
    link: "mailto:mcadena@andrew.cmu.edu",
    linkText: "Email me for access",
    color: "#d7c3c9",
  },
  {
    title: "Personal Website",
    description:
      "For this website, I leveraged my experience with React, TypeScript, and Jotai from my internship to craft a dynamic Next.js web app. Using Framer Motion and GSAP, I created a captivating display that highlights my exploration of new frontend and design techniques. The result is a visually engaging and technically sophisticated site that reflects my growth and creativity in web development.",
    src: "website-landing.png",
    link: "https://github.com/matthewcadena/me",
    linkText: "Source code",
    color: "#cbbbc7",
  },
];
