import { FaBookOpen, FaCode, FaChartBar, FaPython, FaJava, FaJs, FaDatabase, FaHtml5, FaCss3Alt } from "react-icons/fa";

export const courses = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Learn the basics of React, including components, hooks, and state management.",
    icon: FaBookOpen,
    category: "Frontend",
    tags: ["React", "JavaScript", "UI"]
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Deep dive into ES6+, closures, async programming, and more.",
    icon: FaJs,
    category: "Programming Language",
    tags: ["JavaScript", "ES6", "Async"]
  },
  {
    id: 3,
    title: "Data Visualization",
    description: "Visualize data using modern libraries and best practices.",
    icon: FaChartBar,
    category: "Data Science",
    tags: ["Charts", "D3.js", "Analytics"]
  },
  {
    id: 4,
    title: "Python Programming",
    description: "Master Python fundamentals, OOP, and scripting.",
    icon: FaPython,
    category: "Programming Language",
    tags: ["Python", "OOP", "Scripting"]
  },
  {
    id: 5,
    title: "Java Programming",
    description: "Comprehensive Java course covering basics to advanced topics.",
    icon: FaJava,
    category: "Programming Language",
    tags: ["Java", "OOP", "Backend"]
  },
  {
    id: 6,
    title: "Web Development with HTML & CSS",
    description: "Build beautiful websites using HTML5 and CSS3.",
    icon: FaHtml5,
    category: "Frontend",
    tags: ["HTML", "CSS", "Web"]
  },
  {
    id: 7,
    title: "Databases & SQL",
    description: "Learn relational databases, SQL queries, and data modeling.",
    icon: FaDatabase,
    category: "Backend",
    tags: ["SQL", "Database", "Data Modeling"]
  }
]; 