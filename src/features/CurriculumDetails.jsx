import React, { useState, useEffect } from "react";
import { curriculums } from "../constants/curriculums";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaCheckCircle, 
  FaCircle, 
  FaArrowLeft,
  FaClock,
  FaBookOpen,
  FaPlay,
  FaGraduationCap,
  FaRegClock
} from "react-icons/fa";
import Button from "../components/Button";

const CurriculumDetails = ({ courseId, courseTitle, onBack }) => {
  const modules = curriculums[courseId] || [];
  const [openIndex, setOpenIndex] = useState(null);
  const [lessonProgress, setLessonProgress] = useState({});

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem(`progress_${courseId}`);
    if (savedProgress) {
      setLessonProgress(JSON.parse(savedProgress));
    }
  }, [courseId]);

  const toggleModule = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const toggleLesson = (moduleIndex, lessonIndex) => {
    const lessonKey = `${moduleIndex}-${lessonIndex}`;
    const newProgress = {
      ...lessonProgress,
      [lessonKey]: !lessonProgress[lessonKey]
    };
    setLessonProgress(newProgress);
    localStorage.setItem(`progress_${courseId}`, JSON.stringify(newProgress));
  };

  // Calculate progress
  const totalLessons = modules.reduce((total, module) => total + module.lessons.length, 0);
  const completedLessons = Object.values(lessonProgress).filter(Boolean).length;
  const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  
  // Estimated time calculations (assuming 30 minutes per lesson)
  const totalHours = Math.round((totalLessons * 30) / 60);
  const completedHours = Math.round((completedLessons * 30) / 60);
  const remainingHours = totalHours - completedHours;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Professional Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 text-white font-medium"
          >
            <FaArrowLeft className="text-sm" />
            Back to Courses
          </motion.button>

          {/* Course Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {courseTitle} Curriculum
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Master the fundamentals and advanced concepts through our comprehensive, hands-on learning path
            </p>
          </motion.div>

          {/* Course Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <FaBookOpen className="text-2xl mx-auto mb-2 text-blue-200" />
                <div className="text-2xl font-bold">{modules.length}</div>
                <div className="text-blue-200 text-sm">Modules</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <FaPlay className="text-2xl mx-auto mb-2 text-blue-200" />
                <div className="text-2xl font-bold">{totalLessons}</div>
                <div className="text-blue-200 text-sm">Lessons</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <FaClock className="text-2xl mx-auto mb-2 text-blue-200" />
                <div className="text-2xl font-bold">{totalHours}h</div>
                <div className="text-blue-200 text-sm">Duration</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <FaGraduationCap className="text-2xl mx-auto mb-2 text-blue-200" />
                <div className="text-2xl font-bold">{progressPercentage}%</div>
                <div className="text-blue-200 text-sm">Complete</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Enhanced Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Your Progress</h3>
              <p className="text-gray-600">
                {completedLessons} of {totalLessons} lessons completed • {remainingHours}h remaining
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-3xl font-bold text-blue-600">{progressPercentage}%</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Modules Section */}
        <div className="space-y-6">
          {modules.map((mod, moduleIndex) => {
            const moduleLessons = mod.lessons.length;
            const completedModuleLessons = mod.lessons.filter((_, lessonIndex) => 
              lessonProgress[`${moduleIndex}-${lessonIndex}`]
            ).length;
            const moduleProgress = moduleLessons > 0 ? Math.round((completedModuleLessons / moduleLessons) * 100) : 0;
            const moduleHours = Math.round((moduleLessons * 30) / 60);

            return (
              <motion.div
                key={mod.moduleTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * moduleIndex }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Module Header */}
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:bg-gray-50 transition-all duration-300"
                  onClick={() => toggleModule(moduleIndex)}
                  aria-expanded={openIndex === moduleIndex}
                  aria-controls={`module-${moduleIndex}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {moduleIndex + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{mod.moduleTitle}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <FaPlay className="text-xs" />
                          {moduleLessons} lessons
                        </span>
                        <span className="flex items-center gap-1">
                          <FaRegClock className="text-xs" />
                          ~{moduleHours}h
                        </span>
                        <span className="flex items-center gap-1">
                          <FaCheckCircle className="text-xs" />
                          {completedModuleLessons}/{moduleLessons} complete
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {/* Module Progress */}
                    <div className="hidden md:block">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${moduleProgress}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1 text-center">{moduleProgress}%</div>
                    </div>
                    
                    {/* Expand/Collapse Icon */}
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-200">
                      {openIndex === moduleIndex ? (
                        <FaChevronUp className="text-gray-600" />
                      ) : (
                        <FaChevronDown className="text-gray-600" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Module Content */}
                <AnimatePresence initial={false}>
                  {openIndex === moduleIndex && (
                    <motion.div
                      id={`module-${moduleIndex}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-gray-100"
                    >
                      <div className="p-6 bg-gray-50">
                        <div className="space-y-3">
                          {mod.lessons.map((lesson, lessonIndex) => {
                            const lessonKey = `${moduleIndex}-${lessonIndex}`;
                            const isCompleted = lessonProgress[lessonKey];
                            
                            return (
                              <motion.div
                                key={lesson.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: lessonIndex * 0.1 }}
                                className="flex items-center gap-4 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                              >
                                <button
                                  onClick={() => toggleLesson(moduleIndex, lessonIndex)}
                                  className="flex items-center gap-3 flex-1 text-left hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded-lg px-2 py-1"
                                  aria-pressed={isCompleted}
                                >
                                  <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300">
                                    {isCompleted ? (
                                      <FaCheckCircle className="text-green-500 text-sm" />
                                    ) : (
                                      <FaCircle className="text-gray-400 text-xs" />
                                    )}
                                  </div>
                                  <span className={`font-medium ${isCompleted ? "line-through text-gray-400" : "text-gray-700"}`}>
                                    {lesson.title}
                                  </span>
                                </button>
                                
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <FaRegClock className="text-xs" />
                                  <span>30m</span>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CurriculumDetails; 