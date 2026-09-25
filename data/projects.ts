export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: {
    problem: string;
    objective: string;
    solution: string;
    features: string[];
    role: string;
    challenges: string;
    results: string;
  };
}

export const projects: Project[] = [
  {
    id: 'canteen-food-system',
    title: 'Canteen Food Ordering & Management System',
    category: 'Web Application',
    description: 'A web-based food ordering platform replacing manual ordering with a digital experience.',
    longDescription: 'This comprehensive system digitizes the entire food ordering process, from browsing categories to managing transactions. It streamlines operations for canteen staff while providing a modern interface for students/staff.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
    image: '/images/projects/canteen.jpg',
    caseStudy: {
      problem: 'Manual food ordering led to long queues, errors in order processing, and inefficient inventory tracking.',
      objective: 'Create a digital platform to automate ordering, track payments, and manage food availability in real-time.',
      solution: 'Developed a full-stack web application with a user-facing ordering portal and an administrative dashboard for canteen management.',
      features: [
        'User registration and secure login',
        'Category-based product browsing',
        'Real-time shopping cart management',
        'Online payment architecture',
        'Order tracking and status updates',
        'Admin panel for transaction and inventory management',
      ],
      role: 'Lead Full-Stack Developer',
      challenges: 'Managing concurrent orders during peak hours and ensuring a seamless payment flow.',
      results: 'Reduced order processing time by 60% and eliminated manual entry errors.',
    },
  },
  {
    id: 'woocommerce-custom',
    title: 'WooCommerce Custom Experience',
    category: 'E-Commerce',
    description: 'High-performance custom WooCommerce development with advanced filtering and AJAX search.',
    longDescription: 'A tailored e-commerce experience focusing on speed and user conversion. Implemented custom hooks and AJAX-powered interfaces to remove page reloads during product discovery.',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'CSS'],
    image: '/images/projects/woocommerce.jpg',
    caseStudy: {
      problem: 'Generic e-commerce templates were slow and lacked the specific filtering capabilities needed for a large product catalog.',
      objective: 'Optimize the shopping experience through custom UI improvements and AJAX-based functionality.',
      solution: 'Built a custom child theme and developed bespoke PHP hooks to modify the WooCommerce checkout and product loop.',
      features: [
        'AJAX-powered product search',
        'Advanced category and attribute filtering',
        'Custom product interface layouts',
        'Optimized quote functionality',
        'Responsive mobile-first shopping experience',
      ],
      role: 'WordPress Developer',
      challenges: 'Integrating complex filtering without compromising page load speed.',
      results: 'Increased average session duration by 25% and improved mobile conversion rates.',
    },
  },
  {
    id: 'student-grade-check',
    title: 'Student Grade Check System',
    category: 'System Design',
    description: 'A digital system for students to securely check their academic grades.',
    longDescription: 'A secure portal where students can enter credentials to view their academic performance across different semesters.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    image: '/images/projects/grade-check.jpg',
    caseStudy: {
      problem: 'Students had to visit administrative offices physically to check their grades, causing congestion and delays.',
      objective: 'Digitize grade accessibility while maintaining strict data security and privacy.',
      solution: 'Created a secure database-driven web application with student authentication.',
      features: [
        'Secure student authentication',
        'Semester-wise grade breakdown',
        'PDF grade report generation',
        'Admin interface for grade updates',
      ],
      role: 'Full-Stack Developer',
      challenges: 'Ensuring data integrity and preventing unauthorized access to sensitive grade information.',
      results: 'Eliminated the need for physical grade checks, saving students hours of waiting time.',
    },
  },
  {
    id: 'chatbot-interface',
    title: 'Chatbot Web Interface',
    category: 'UI/UX Design',
    description: 'A modern, responsive chatbot interface designed for seamless user interaction.',
    longDescription: 'A focus on conversational UI/UX, creating a fluid chat experience with a professional aesthetic.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/projects/chatbot.jpg',
    caseStudy: {
      problem: 'Many chatbot interfaces are clunky and non-intuitive, leading to poor user engagement.',
      objective: 'Design a clean, minimal, and highly responsive chat interface that feels natural.',
      solution: 'Implemented a modern frontend with smooth transitions and a focus on typography and whitespace.',
      features: [
        'Real-time message bubbles',
        'Responsive mobile layout',
        'Smooth scroll-to-bottom functionality',
        'Customizable chat themes',
      ],
      role: 'UI/UX Designer & Frontend Developer',
      challenges: 'Balancing a feature-rich interface with a minimal aesthetic.',
      results: 'Achieved a high usability score in user testing for conversational flow.',
    },
  },
  {
    id: 'distribution-monitoring',
    title: 'Product Distribution Monitoring System',
    category: 'System Design',
    description: 'An enterprise-level system to monitor the movement of products across distribution channels.',
    longDescription: 'A complex monitoring system designed to track inventory from warehouse to end-customer.',
    technologies: ['React', 'Next.js', 'Node.js', 'MySQL'],
    image: '/images/projects/distribution.jpg',
    caseStudy: {
      problem: 'Lack of visibility in the product distribution chain led to inventory losses and delivery delays.',
      objective: 'Create a real-time monitoring dashboard to track product movement and distribution efficiency.',
      solution: 'Developed a data-driven dashboard with real-time reporting and inventory tracking.',
      features: [
        'Real-time distribution tracking',
        'Inventory movement reporting',
        'Process flow visualization',
        'Alert system for distribution bottlenecks',
        'Comprehensive analytics dashboard',
      ],
      role: 'Systems Architect',
      challenges: 'Handling large datasets and visualizing complex distribution flows.',
      results: 'Reduced distribution bottlenecks by 20% through better visibility.',
    },
  },
  {
    id: 'brand-design-gallery',
    title: 'Graphic & Brand Design Projects',
    category: 'Creative Design',
    description: 'A curated gallery of logo designs, branding concepts, and promotional graphics.',
    longDescription: 'Showcasing the creative side of RiG_Designs through diverse branding projects for various clients.',
    technologies: ['Figma', 'Photoshop', 'Canva'],
    image: '/images/projects/design-gallery.jpg',
    caseStudy: {
      problem: 'Clients needed a cohesive visual identity to establish trust and professionalism in their markets.',
      objective: 'Create distinct and memorable brand identities that communicate the core values of the business.',
      solution: 'Developed complete branding kits including logos, color palettes, and typography guidelines.',
      features: [
        'Custom logo design',
        'Brand style guides',
        'Social media promotional assets',
        'Print-ready marketing materials',
      ],
      role: 'Brand Designer',
      challenges: 'Translating abstract business values into concrete visual elements.',
      results: 'Helped multiple clients launch their brands with a professional and consistent image.',
    },
  },
];
