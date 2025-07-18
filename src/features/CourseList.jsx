import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { curriculums } from "../constants/curriculums";
import { FaBookOpen } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }),
};

const CourseList = ({ courses }) => {
  const navigate = useNavigate();
  const [enrollmentStatus, setEnrollmentStatus] = useState({});
  const [favoriteStatus, setFavoriteStatus] = useState({});
  const [courseProgress, setCourseProgress] = useState({});

  useEffect(() => {
    // Load enrollment, favorite status, and progress from localStorage
    const enrolled = {};
    const favorited = {};
    const progress = {};
    
    courses.forEach(course => {
      enrolled[course.id] = localStorage.getItem(`enrolled_${course.id}`) === 'true';
      favorited[course.id] = localStorage.getItem(`favorite_${course.id}`) === 'true';
      
      // Calculate progress
      const savedProgress = localStorage.getItem(`progress_${course.id}`);
      if (savedProgress) {
        const lessonProgress = JSON.parse(savedProgress);
        const modules = curriculums[course.id] || [];
        const totalLessons = modules.reduce((total, module) => total + module.lessons.length, 0);
        const completedLessons = Object.values(lessonProgress).filter(Boolean).length;
        progress[course.id] = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
      } else {
        progress[course.id] = 0;
      }
    });
    
    setEnrollmentStatus(enrolled);
    setFavoriteStatus(favorited);
    setCourseProgress(progress);
  }, [courses]);

  const handleViewCurriculum = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  const handleEnroll = (courseId) => {
    const newStatus = !enrollmentStatus[courseId];
    setEnrollmentStatus(prev => ({ ...prev, [courseId]: newStatus }));
    localStorage.setItem(`enrolled_${courseId}`, newStatus.toString());
  };

  const handleFavorite = (courseId) => {
    const newStatus = !favoriteStatus[courseId];
    setFavoriteStatus(prev => ({ ...prev, [courseId]: newStatus }));
    localStorage.setItem(`favorite_${courseId}`, newStatus.toString());
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl mx-auto px-4">
      {courses.map((course, i) => (
        <motion.div
          key={course.id}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
          whileTap={{ scale: 0.98 }}
          className="min-w-0"
        >
          <Card
            title={course.title}
            description={course.description}
            icon={course.icon}
            category={course.category}
            tags={course.tags}
            isEnrolled={enrollmentStatus[course.id]}
            isFavorite={favoriteStatus[course.id]}
            progressPercentage={courseProgress[course.id]}
            onEnroll={() => handleEnroll(course.id)}
            onFavorite={() => handleFavorite(course.id)}
          >
            <Button 
              className="mt-4 w-full px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-base shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300 transform hover:scale-105 active:scale-95"
              onClick={() => handleViewCurriculum(course.id)}
            >
              {enrollmentStatus[course.id] ? "Continue Learning" : "View Curriculum"}
            </Button>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default CourseList; 