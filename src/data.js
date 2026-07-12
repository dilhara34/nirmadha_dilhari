// src/data.js

export const personalInfo = {
  name: "Nirmada Dilhari",
  title: "Full-Stack Developer & Tech-Entrepreneur",
  about: "Highly motivated Full-Stack Software Developer and Tech-Entrepreneur with 1 year of hands-on application development experience. Proven capability in bridging technical architecture with commercial business execution by building, deploying, and optimizing digital presence.",
  github: "https://github.com/Dil-24", // ඔයාගේ Github username එක මෙතනට දාන්න
  vercelStore: "https://niruwool.vercel.app",
  email: "nirmadadilhari20@gmail.com",
  phone: "+94 70 304 7198"
};

export const projects = [
  {
    id: 1,
    title: "Location-Based Attendance Mobile App",
    category: "Mobile App",
    tech: ["React Native", "Expo", "Geolocation API"],
    description: "Developed a mobile application featuring GPS-based validation to restrict employee attendance marking strictly within predefined company coordinates.",
    features: ["Real-time GPS Tracking", "Predefined Coordinate Lock", "Attendance Logging"]
  },
  {
    id: 2,
    title: "Veterinary Management System",
    category: "Web App",
    tech: ["React.js", "PHP", "MySQL"],
    description: "Designed and developed a complete full-stack veterinary management system featuring user role authentication, service scheduling, and database integration.",
    features: ["User Authentication", "Appointment Booking", "Service Management"]
  },
  {
    id: 3,
    title: "Niruwool E-Commerce Platform",
    category: "Web App",
    tech: ["React.js", "Vercel", "CSS3"],
    description: "The official portfolio and e-commerce showcase for the Niruwool brand. Built single-handedly to manage digital presence, brand logistics, and social marketing.",
    features: ["Product Showcase", "Fully Responsive Layout", "SEO Optimized"]
  },
  {
    id: 4,
    title: "MyDentist & JoCare Systems",
    category: "Web App",
    tech: ["React.js", "PHP", "Node.js", "MySQL"],
    description: "Collaborated within team environments on live production systems, conducting client support, workflow optimization, and system integrations.",
    features: ["Live Production Maintenance", "Client Support System", "API Testing"]
  }
];