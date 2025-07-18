import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaGraduationCap, FaChartLine } from "react-icons/fa";
import Button from "./Button";

const HeroSection = () => {
  const [stats, setStats] = useState({
    courses: 0,
    students: 0,
    completion: 0
  });

  useEffect(() => {
    // Animate statistics counting up
    const targetStats = { courses: 7, students: 1250, completion: 94 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        courses: Math.round(targetStats.courses * progress),
        students: Math.round(targetStats.students * progress),
        completion: Math.round(targetStats.completion * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(targetStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const statItems = [
    {
      icon: FaGraduationCap,
      value: stats.courses,
      label: "Courses Available",
      color: "text-blue-600"
    },
    {
      icon: FaUsers,
      value: stats.students,
      label: "Active Students",
      color: "text-green-600"
    },
    {
      icon: FaChartLine,
      value: `${stats.completion}%`,
      label: "Completion Rate",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Master Programming with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Expert Courses
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from industry experts with hands-on projects, real-world applications, and personalized learning paths.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Button className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Start Your Learning Journey
          </Button>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {statItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`text-4xl mb-3 ${item.color}`}>
                <item.icon />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {item.value}
              </div>
              <div className="text-gray-600 font-medium">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection; 