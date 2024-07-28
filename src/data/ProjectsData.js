// src/data/ProjectsData.js

const projectsData = [
    {
        id: 'ecommerce-platform',
        title: 'E-commerce Platform',
        description: 'A full-featured e-commerce platform built with React, Redux, Node.js, and MongoDB. It includes a product catalog, shopping cart, user authentication, and a comprehensive admin dashboard.',
        image: 'https://via.placeholder.com/600x400', // Placeholder image URL
        liveLink: 'https://example.com/ecommerce-platform',
        gitHubLink: 'https://github.com/yourusername/ecommerce-platform',
        technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        features: [
            'Product catalog with search and filters',
            'Shopping cart and checkout process',
            'User authentication and profile management',
            'Admin dashboard for order and inventory management'
        ],
        year: 2023,
        role: 'Full Stack Developer',
        highlights: [
            'Designed a responsive UI with Tailwind CSS',
            'Implemented real-time order updates with Socket.IO',
            'Developed a secure authentication system using JWT'
        ],
    },
    {
        id: 'portfolio-website',
        title: 'Portfolio Website',
        description: 'A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills. It features a modern design with interactive elements and a blog section.',
        image: 'https://via.placeholder.com/600x400', // Placeholder image URL
        liveLink: 'https://example.com/portfolio-website',
        gitHubLink: 'https://github.com/yourusername/portfolio-website',
        technologies: ['React', 'Tailwind CSS'],
        features: [
            'Interactive project showcase',
            'Blog section with dynamic content',
            'Responsive design for all devices'
        ],
        year: 2022,
        role: 'Frontend Developer',
        highlights: [
            'Created a custom React component library',
            'Utilized Tailwind CSS for a modern, responsive design',
            'Implemented scroll-triggered animations with Framer Motion'
        ],
    },
    {
        id: 'realtime-chat-application',
        title: 'Real-time Chat Application',
        description: 'A real-time chat application using Socket.IO, Node.js, and React for seamless communication. It supports multiple chat rooms, private messaging, and notifications.',
        image: 'https://via.placeholder.com/600x400', // Placeholder image URL
        liveLink: 'https://example.com/realtime-chat-application',
        gitHubLink: 'https://github.com/yourusername/realtime-chat-application',
        technologies: ['React', 'Node.js', 'Socket.IO'],
        features: [
            'Real-time messaging with Socket.IO',
            'Support for multiple chat rooms and private messages',
            'Notification system for new messages'
        ],
        year: 2023,
        role: 'Full Stack Developer',
        highlights: [
            'Implemented real-time communication features',
            'Developed a scalable backend with Node.js',
            'Integrated user authentication for private messaging'
        ],
    },
    {
        id: 'social-media-app',
        title: 'Social Media App',
        description: 'A Social Media App built using React, Redux, MongoDB, and Express.js where users can share photos, follow friends, and like or comment on posts.',
        image: 'https://via.placeholder.com/600x400', // Placeholder image URL
        liveLink: 'https://example.com/social-media-app',
        gitHubLink: 'https://github.com/yourusername/social-media-app',
        technologies: ['React', 'Redux', 'MongoDB', 'Express.js'],
        features: [
            'User profiles with photo sharing',
            'Follow and unfollow functionality',
            'Like and comment on posts'
        ],
        year: 2024,
        role: 'Full Stack Developer',
        highlights: [
            'Developed RESTful APIs with Express.js',
            'Designed a scalable database schema with MongoDB',
            'Implemented real-time updates with WebSockets'
        ],
    },
    {
        id: 'task-manager',
        title: 'Task Manager',
        description: 'A task management tool built with React and Redux, featuring drag-and-drop functionality, task prioritization, and deadline tracking.',
        image: 'https://via.placeholder.com/600x400', // Placeholder image URL
        liveLink: 'https://example.com/task-manager',
        gitHubLink: 'https://github.com/yourusername/task-manager',
        technologies: ['React', 'Redux'],
        features: [
            'Drag-and-drop task management',
            'Task prioritization and deadline tracking',
            'Customizable task views and filters'
        ],
        year: 2023,
        role: 'Frontend Developer',
        highlights: [
            'Implemented drag-and-drop functionality with React DnD',
            'Created a clean and intuitive UI with Tailwind CSS',
            'Optimized state management with Redux'
        ],
    },
];

export default projectsData;
