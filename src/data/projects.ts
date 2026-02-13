export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  description: string;
  briefing: string;
  tags: string[];
  color: "yellow" | "pink" | "green" | "blue" | "orange";
  link?: string;
  linkLabel?: string;
  github?: string;
  isPrivate?: boolean;
  role?: string;
  duration?: string;
  highlights?: string[];
  optional_link?: string;
  optional_link_type?: "video" | "demo" | "article";
  optional_link_label?: string;
  storytelling?: {
    title: string;
    content: string;
  };
}

export const projectsData: ProjectData[] = [
  {
    id: 13,
    slug: "headless-ecommerce-platform",
    title: "Headless eCommerce Platform",
    description: "Frontend development for enterprise headless eCommerce solutions built with Nuxt.js, Vue.js, and TypeScript over a three-year engagement.",
    briefing: "Worked on a production eCommerce website built with Vue 2 / Nuxt 2 and a next-generation composable frontend platform built with Vue 3 / Nuxt 3, designed to serve multiple brands from a shared core. Designed a modular, brand-agnostic architecture where each brand could be implemented as a thin layer on top of a common core, using Figma design tokens for theming and custom logic only where needed. Integrated Bloomreach Content & Discovery with SAP Commerce Cloud and Coveo, and supported dynamic content through lightweight Node.js APIs.",
    tags: [
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "Bloomreach",
      "SAP Commerce Cloud",
      "Coveo",
      "Node.js",
      "Storybook",
      "Jest"
    ],
    color: "blue",
    isPrivate: true,
    role: "Frontend Developer",
    duration: "3 years",
    highlights: [
      "Built a production eCommerce frontend with Vue 2 / Nuxt 2",
      "Designed a reusable core frontend platform with Vue 3 / Nuxt 3",
      "Implemented a brand-layer architecture on top of a shared core",
      "Applied Figma design tokens for dynamic theming",
      "Integrated Bloomreach CMS & Discovery with SAP Commerce Cloud and Coveo",
      "Built supporting Node.js API endpoints",
      "Used Storybook for component-driven development",
      "Added unit and integration tests with Jest",
      "Focused on performance, accessibility, and SEO",
      "Collaborated closely with UX/UI designers and backend teams"
    ],
    storytelling: {
      title: "Headless eCommerce Platform: Designing a Core for Many Brands",
      content: "Over a three-year period, I worked on enterprise headless eCommerce projects under NDA.\n\nThe first project was a standalone eCommerce website built with Vue 2 and Nuxt 2 and deployed to production for real users.\n\nIn parallel, we started designing a second, more ambitious project: a core frontend platform built with Vue 3 and Nuxt 3 that could be reused across multiple brands. Instead of building a new website for each client, the idea was to create a shared core application and then apply a thin brand layer on top of it.\n\nEach brand would be defined mainly through design tokens exported from Figma and through small pieces of brand-specific logic when required. In practice, launching a new site would mean deploy the core, apply the brand layer, and the website would be ready. Only content would still need to be provided via Bloomreach CMS and product data via SAP Commerce Cloud.\n\nMy work focused on building this modular architecture, integrating CMS and search systems, and ensuring the platform met enterprise standards for performance, accessibility, and SEO. We used Storybook to design and validate components in isolation and testing to keep behavior consistent across brands.\n\nAlthough the composable platform project was canceled at around 80% completion due to business decisions, it was a major learning experience in designing frontend systems meant to scale across brands and markets. It changed how I think about frontend, from building individual websites to building product platforms."
    }
  },
  {
    id: 12,
    duration: "2 years",
    slug: "ai-content-generator",
    title: "AI Content Generator",
    description: "Integration of an externally acquired AI article generation tool into an existing SEO SaaS platform.",
    briefing: "SEOmonitor acquired a standalone React-based content generator and needed it integrated into the main Vue application under tight deadlines. Proposed and implemented a microfrontend approach by embedding the existing React application in an iframe and synchronizing it with the main Vue app. Took ownership of the frontend integration without formal handover, refactored most of the original codebase to align with product requirements, implemented new flows, and ensured seamless communication between the Vue and React applications.",
    tags: [
      "React",
      "Vue.js",
      "JavaScript",
      "iframe microfrontend",
      "API integration",
      "Git"
    ],
    color: "yellow",
    isPrivate: false,
    link: "https://app.seomonitor.com",
    linkLabel: "Visit SEOmonitor",
    role: "Frontend Developer",
    highlights: [
      "Designed and implemented a microfrontend integration between Vue and React",
      "Integrated a standalone React app into a Vue-based SaaS platform",
      "Refactored and extended most of the original frontend code",
      "Implemented new user flows and UI behavior",
      "Worked without formal frontend handover, owning the integration",
      "Delivered under tight time constraints"
    ],
    storytelling: {
      title: "AI Content Generator: Making Two Frontends Work as One",
      content: "SEOmonitor acquired an external AI article generation tool that was built as a standalone React application. The business needed it integrated into the main SEO platform as quickly as possible.\n\nInstead of rewriting the tool from scratch, I proposed using a microfrontend approach: keep the existing React application intact and load it inside the Vue-based product using an iframe, while connecting the two applications through shared authentication, routing, and data flow.\n\nThere was no frontend handover for the acquired product. I had access only to the backend developer who had worked on it, so I had to reverse-engineer the frontend logic, understand its flows, and reshape the code to fit SEOmonitor’s product and UX standards.\n\nOver time, almost every part of the original frontend was refactored or rewritten: state management, UI flows, API interactions, and integration logic with the main app. What started as a rushed integration became a fully embedded product feature.\n\nThe project was challenging and exciting at the same time. It pushed me to think beyond a single framework and design how two separate applications could behave as one. It’s one of the projects I’m most proud of because it combines technical architecture, problem solving, and real business impact."
    }
  },
  {
    id: 11,
    slug: "seo-saas-platform",
    duration: "2 years",
    title: "SEO SaaS Platform",
    description: "Frontend development for a large SEO SaaS product transitioning from a monolithic PHP application to a modern API + Vue.js frontend.",
    briefing: "The project started as a UI facelift and evolved into building new product sections, features, and user flows while migrating legacy pages. Worked on replacing PHP-rendered interfaces with Vue 2 and extending the product with new functionality. Collaborated closely with a team of ~6 backend and ~5 frontend engineers, as well as product leadership and designers, in a fast-paced startup environment.",
    tags: ["Vue.js", "Vue 2", "JavaScript", "HTML", "CSS", "API", "Git"],
    color: "pink",
    link: "https://app.seomonitor.com",
    linkLabel: "Visit SEOmonitor",
    role: "Frontend Developer",
    highlights: [
      "Migrated legacy PHP UI into a modern Vue 2 frontend",
      "Built new product sections and user flows",
      "Implemented new features alongside redesigned ones",
      "Worked within a cross-functional team of ~11 engineers",
      "Contributed in a startup environment with rapid iteration",
      "Balanced refactoring with feature development on a live product"
    ],
    storytelling: {
      title: "SEO SaaS Platform: Evolving a Live Product",
      content: "At SEOmonitor, the product was originally built as a monolithic PHP application. The team decided to modernize it by introducing a new frontend architecture based on an API and Vue.js.\n\nThe work started as a visual facelift, but quickly grew into something larger. While migrating existing sections one by one, we also built entirely new features, user flows, and product areas directly in the new frontend. This meant working in parallel on legacy behavior and future product direction.\n\nI worked closely with a team of around six backend engineers and five frontend engineers, alongside the CEO, CTO, and designers. Decisions were made quickly, ideas were tested fast, and changes were frequent. The mindset was to ship, learn from real user feedback, and iterate rapidly.\n\nThis project taught me how to migrate a live SaaS product without disrupting users, balance refactoring with feature development, and build frontend architecture that could evolve alongside product needs."
    }
  },
  {
    id: 10,
    slug: "healthcare-management-platform",
    title: "Healthcare Management Platform",
    description: "Full-stack development on a medical platform used to manage client data, medical history, and appointments.",
    briefing: "Took over an existing PHP and MySQL application and implemented new features across both frontend and backend. Built data-driven interfaces for medical reports and client management, improved system functionality, and maintained a production system handling sensitive data.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    color: "green",
    isPrivate: true,
    role: "Full Stack Developer",
    duration: "6 months",
    highlights: [
      "Took ownership of an existing PHP and MySQL codebase",
      "Implemented new features for medical data and reports",
      "Built interfaces for managing clients, journals, and appointments",
      "Worked across both frontend and backend layers",
      "Maintained and extended a production healthcare system",
      "Ensured reliability and usability for data-heavy workflows"
    ],
    storytelling: {
      title: "Healthcare Management Platform: Owning Features End to End",
      content: "This project was a healthcare management platform used by a doctor to manage a large database of clients, medical histories, and personal journals. I joined after the system was already built and had to take over both frontend and backend responsibilities.\n\nThe platform relied on PHP and MySQL, and much of my work involved understanding the existing data model and extending it safely. I implemented new features such as medical reports, appointment management, and improved data views for daily workflows.\n\nUnlike content-driven websites, this system was heavily data-oriented and required careful handling of user input and stored information. I worked directly on database queries, backend logic, and frontend interfaces, making sure that complex medical data could be accessed and managed easily.\n\nThis project taught me how to work with legacy systems, take ownership of full features, and think beyond UI into how data, logic, and interface work together. It was an important step in becoming comfortable working across the full stack and maintaining business-critical applications."
    }
  },
  {
    id: 9,
    slug: "media-content-platform",
    title: "Media Content Platform",
    description: "Full-stack development on a large media platform focused on stock video and audio content.",
    briefing: "Worked on a custom PHP (CodeIgniter) application integrated with WordPress for content management. Built responsive, mobile-first UI, collaborated closely with designers, backend engineers, and business stakeholders, and implemented new features while adapting to an existing architecture. Gained hands-on experience handling video and audio content across browsers.",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "CodeIgniter", "MySQL", "WordPress", "Git"],
    color: "orange",
    isPrivate: true,
    role: "Full Stack Developer",
    duration: "1 year 4 months",
    highlights: [
      "Built responsive, mobile-first user interfaces",
      "Integrated WordPress-managed content into a custom PHP application",
      "Implemented frontend and backend features using PHP and MySQL",
      "Worked extensively with video and audio content",
      "Handled browser limitations related to media playback, especially Safari",
      "Collaborated closely with designers, developers, and product stakeholders",
      "Maintained and extended an existing production codebase"
    ],
    storytelling: {
      title: "Media Content Platform: Working with Real Media at Scale",
      content: "This project was a large media platform focused on stock video and audio content. The data was managed through WordPress, but the application itself was built on a custom PHP (CodeIgniter) architecture.\n\nI joined while the system was already in development, so my first challenge was understanding an existing codebase and adapting to its structure while continuing to deliver features. I worked closely with designers, backend developers, and even business stakeholders to align technical solutions with product needs.\n\nA big part of the work involved handling video and audio content across browsers. I learned quickly about browser limitations, especially Safari's restrictions on media playback without user interaction. Solving these issues required careful handling of events, user flows, and fallbacks to keep the experience smooth and reliable.\n\nI focused heavily on responsiveness, mobile-first layouts, and user-friendly interfaces. Over time, the platform was acquired and merged into a new brand, which meant adapting the existing system to new visual and structural requirements while keeping functionality stable.\n\nThis project taught me how to work inside an established architecture, collaborate across disciplines, and build features for a content-heavy product with real users."
    }
  },
  {
    id: 8,
    slug: "corporate-investor-websites",
    title: "Corporate Investor Websites",
    description: "Frontend development for corporate websites built on a custom CMS used by large companies preparing for stock market presence.",
    briefing: "Developed responsive, pixel-perfect interfaces using HTML, CSS, and JavaScript, following shared templates across multiple projects. Implemented dynamic UI elements and light animations using jQuery, ensured cross-browser compatibility, and handled ongoing client updates and bug fixes.",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "Custom CMS", "Photoshop"],
    color: "blue",
    isPrivate: true,
    role: "Frontend Developer",
    duration: "10 months",
    highlights: [
      "Built responsive websites using a shared CMS template system",
      "Implemented pixel-perfect layouts with HTML and CSS",
      "Added interactive elements and animations using JavaScript and jQuery",
      "Ensured cross-browser compatibility through testing and debugging",
      "Delivered frequent client updates and UI changes under tight deadlines",
      "Delivered 7 production websites"
    ],
    storytelling: {
      title: "Corporate CMS Projects: Learning Production Frontend",
      content: "After my first project, I moved into building corporate websites using a custom CMS designed for companies entering the stock market. These sites focused on presenting official information such as company news, events, and stock-related data, and they followed strict structural and visual requirements.\n\nMost projects shared the same base template, so my work focused on translating designs into clean, responsive HTML and CSS while adapting them to different brands and layouts. When needed, I added interactivity and small animations using JavaScript and jQuery.\n\nThis role taught me how to work within constraints: fixed templates, strict content structures, and high expectations for consistency and browser compatibility. I spent a lot of time testing and debugging layouts across browsers and devices to ensure everything looked and behaved correctly.\n\nIt was also my first experience working with real client change requests and support tickets. I learned how to implement updates quickly, fix UI issues in production, and balance speed with quality. This stage helped me develop discipline in frontend fundamentals and prepared me for larger and more complex projects."
    }
  },
  {
    id: 6,
    slug: "bogdan-nemes-photography",
    title: "Bogdan Nemes Photography Portfolio",
    description: "A simple WordPress portfolio website showcasing a photographer's work, organized by categories and supported by a lightweight blog.",
    briefing: "Helped a wedding photographer rebuild his website after it was accidentally lost. We chose a WordPress theme together, restored the content structure, and set up a clean portfolio layout that makes it easy to publish galleries by category and write blog posts. I also provided clear instructions for managing content going forward, including how to upload photos, organize categories, and maintain posts.",
    tags: ["WordPress", "Theme Setup", "Content Migration", "Photography Portfolio"],
    color: "yellow",
    link: "https://bogdannemes.ro/",
    linkLabel: "View Website",
    role: "WordPress Setup and Frontend Support",
    duration: "1 week",
    highlights: [
      "Rebuilt the site structure and portfolio after the original website was lost",
      "Selected and configured a WordPress theme aligned with the photographer's style",
      "Helped restore content using the available database backup and media archives",
      "Organized galleries by category for easy navigation",
      "Provided simple documentation for uploading photos and writing blog posts"
    ],
    storytelling: {
      title: "Rebuilding a Photographer Portfolio After a Website Loss",
      content: "This project was personal because the photographer was the one from our wedding. He reached out after his website disappeared and he was worried he had lost years of work.\n\nFortunately, he still had the database of his posts and a backup of his photos. After discussing what he needed, we chose a WordPress theme together and rebuilt the site with a straightforward structure: categories for photo work, galleries that are easy to update, and a blog for stories and announcements.\n\nBeyond the setup, I focused on making sure he could maintain the site on his own. I walked him through the workflow for adding new galleries and posts and gave him clear instructions so updates would stay consistent over time."
    }
  },
  {
    id: 7,
    slug: "ctf365",
    title: "CTF365 Cybersecurity Platform",
    description: "A futuristic cybersecurity training platform with a highly stylized UI. My first real-world project, focused on translating complex designs into pixel-perfect, animated interfaces.",
    briefing: "Built pixel-perfect, animated interfaces from complex designs using React, SCSS, and SVG. Created reusable atomic UI components and implemented custom layouts and visual states. Prototyped UI concepts in isolation using HTML, CSS, and CodePen before integration into the main application.",
    tags: ["React", "SCSS", "HTML", "SVG", "CSS Animations"],
    color: "green",
    link: "https://ctf365.com",
    linkLabel: "View Landing Page",
    optional_link: "https://www.youtube.com/watch?v=vHqgt3y-0EQ",
    optional_link_type: "video",
    optional_link_label: "UI Video",
    role: "Frontend Developer",
    duration: "1 year",
    highlights: [
      "Translated complex futuristic designs into functional UI",
      "Built reusable UI components in React",
      "Implemented custom layouts, borders, and shapes using CSS and SVG",
      "Added animated and interactive elements",
      "Delivered production-ready UI under real project constraints"
    ],
    storytelling: {
      title: "CTF365: My First Real Project",
      content: "CTF365 was my first real professional frontend project. The design was futuristic, unconventional, and far from standard layouts. Every border, line, and shape felt like a small puzzle that had to be solved in CSS.\n\nBefore development even started, I would take the designs and try to recreate them in plain HTML and CSS. I experimented constantly (locally and in CodePen) testing how to build unusual shapes, animated elements, and complex UI details. Sometimes I spent hours just figuring out how to draw a single border or animate a small piece of the interface.\n\nWhen development began, I focused on building atomic and molecular UI components and handling visual states and interactions in React. My role was purely UI-focused (no business logic) but it required precision, creativity, and a lot of trial and error.\n\nI made many mistakes, but I also learned incredibly fast. This project forced me to truly understand CSS, layout systems, and how to translate ambitious designs into working code. It was challenging, frustrating at times, and also the project that made me fall in love with frontend development.\n\nIt was the best possible first project: difficult, visually ambitious, and full of lessons that shaped how I build interfaces to this day."
    }
  },
];
