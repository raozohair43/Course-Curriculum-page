import React, { useState } from "react";
import CourseList from "../features/CourseList";
import CourseFilterBar from "../features/CourseFilterBar";
import MyCoursesSection from "../features/MyCoursesSection";
import HeroSection from "../components/HeroSection";
import FeaturedCourses from "../components/FeaturedCourses";
import StudentSuccessStories from "../components/StudentSuccessStories";
import { courses } from "../constants/courses";
import { motion } from "framer-motion";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Extract unique categories and tags
  const categories = Array.from(new Set(courses.map(c => c.category)));
  const tags = Array.from(new Set(courses.flatMap(c => c.tags)));

  // Filter courses based on selected category, tag, and search term
  const filteredCourses = courses.filter(course => {
    const categoryMatch = !selectedCategory || course.category === selectedCategory;
    const tagMatch = !selectedTag || course.tags.includes(selectedTag);
    const searchMatch = !searchTerm || 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return categoryMatch && tagMatch && searchMatch;
  });

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Courses */}
      <FeaturedCourses />
      
      {/* Student Success Stories */}
      <StudentSuccessStories />
      
      {/* My Courses Section */}
      <MyCoursesSection />
      
      {/* Available Courses Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div id="available-courses" className="relative max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}Complete Course Library
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover comprehensive programming courses designed to take you from beginner to expert
            </p>
          </motion.div>

          {/* Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Find Your Perfect Course
              </h3>
              <CourseFilterBar
                categories={categories}
                tags={tags}
                selectedCategory={selectedCategory}
                selectedTag={selectedTag}
                searchTerm={searchTerm}
                onCategoryChange={setSelectedCategory}
                onTagChange={setSelectedTag}
                onSearchChange={setSearchTerm}
              />
            </div>
          </motion.div>

          {/* Course Count and Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'} Available
            </div>
          </motion.div>

          {/* Course List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <CourseList courses={filteredCourses} />
          </motion.div>

          {/* Bottom CTA */}
          {filteredCourses.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
                <p className="text-blue-100 mb-6">
                  Choose your course and begin your programming journey today
                </p>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                >
                  Back to Top
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home; 