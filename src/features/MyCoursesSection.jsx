import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaUserGraduate, FaHeart } from "react-icons/fa";
import Card from "../components/Card";
import Button from "../components/Button";
import { courses } from "../constants/courses";
import { curriculums } from "../constants/curriculums";

const MyCoursesSection = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [favoritedCourses, setFavoritedCourses] = useState([]);
  const [courseProgress, setCourseProgress] = useState({});
  const [showEnrolled, setShowEnrolled] = useState(true);
  const [showFavorited, setShowFavorited] = useState(true);

  useEffect(() => {
    // Load enrolled and favorited courses from localStorage
    const enrolled = courses.filter(course => 
      localStorage.getItem(`enrolled_${course.id}`) === 'true'
    );
    const favorited = courses.filter(course => 
      localStorage.getItem(`favorite_${course.id}`) === 'true'
    );
    setEnrolledCourses(enrolled);
    setFavoritedCourses(favorited);

    // Calculate progress for all courses
    const progress = {};
    courses.forEach(course => {
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
    setCourseProgress(progress);
  }, []);

  const handleEnroll = (courseId) => {
    const newStatus = !enrolledCourses.find(c => c.id === courseId);
    if (newStatus) {
      const course = courses.find(c => c.id === courseId);
      setEnrolledCourses(prev => [...prev, course]);
    } else {
      setEnrolledCourses(prev => prev.filter(c => c.id !== courseId));
    }
    localStorage.setItem(`enrolled_${courseId}`, newStatus.toString());
  };

  const handleFavorite = (courseId) => {
    const newStatus = !favoritedCourses.find(c => c.id === courseId);
    if (newStatus) {
      const course = courses.find(c => c.id === courseId);
      setFavoritedCourses(prev => [...prev, course]);
    } else {
      setFavoritedCourses(prev => prev.filter(c => c.id !== courseId));
    }
    localStorage.setItem(`favorite_${courseId}`, newStatus.toString());
  };

  if (enrolledCourses.length === 0 && favoritedCourses.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center">My Courses</h2>
      
      {/* Enrolled Courses */}
      {enrolledCourses.length > 0 && (
        <div className="mb-6">
          <button
            onClick={() => setShowEnrolled(!showEnrolled)}
            className="flex items-center gap-2 text-lg font-semibold mb-4 text-blue-600 hover:text-blue-700"
          >
            <FaUserGraduate />
            Enrolled Courses ({enrolledCourses.length})
            {showEnrolled ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <AnimatePresence>
            {showEnrolled && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {enrolledCourses.map((course) => (
                    <Card
                      key={course.id}
                      title={course.title}
                      description={course.description}
                      icon={course.icon}
                      category={course.category}
                      tags={course.tags}
                      isEnrolled={true}
                      isFavorite={favoritedCourses.find(c => c.id === course.id) ? true : false}
                      progressPercentage={courseProgress[course.id]}
                      onEnroll={() => handleEnroll(course.id)}
                      onFavorite={() => handleFavorite(course.id)}
                    >
                      <Button 
                        className="mt-4 w-full px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-base shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300 transform hover:scale-105 active:scale-95"
                        onClick={() => window.location.href = `/course/${course.id}`}
                      >
                        Continue Learning
                      </Button>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Favorited Courses */}
      {favoritedCourses.length > 0 && (
        <div className="mb-6">
          <button
            onClick={() => setShowFavorited(!showFavorited)}
            className="flex items-center gap-2 text-lg font-semibold mb-4 text-red-600 hover:text-red-700"
          >
            <FaHeart />
            Favorited Courses ({favoritedCourses.length})
            {showFavorited ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <AnimatePresence>
            {showFavorited && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {favoritedCourses.map((course) => (
                    <Card
                      key={course.id}
                      title={course.title}
                      description={course.description}
                      icon={course.icon}
                      category={course.category}
                      tags={course.tags}
                      isEnrolled={enrolledCourses.find(c => c.id === course.id) ? true : false}
                      isFavorite={true}
                      progressPercentage={courseProgress[course.id]}
                      onEnroll={() => handleEnroll(course.id)}
                      onFavorite={() => handleFavorite(course.id)}
                    >
                      <Button 
                        className="mt-4 w-full px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-base shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300 transform hover:scale-105 active:scale-95"
                        onClick={() => window.location.href = `/course/${course.id}`}
                      >
                        View Curriculum
                      </Button>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default MyCoursesSection; 