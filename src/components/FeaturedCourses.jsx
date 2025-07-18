import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaPython, FaJs } from "react-icons/fa";
import Button from "./Button";

const FeaturedCourses = () => {
  const navigate = useNavigate();

  const featuredCourses = [
    {
      id: 1,
      title: "React Fundamentals",
      description: "Master the basics of React with hands-on projects and real-world applications.",
      icon: FaBookOpen,
      category: "Frontend",
      students: 450,
      rating: 4.8,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 4,
      title: "Python Programming",
      description: "Learn Python from scratch with practical examples and industry best practices.",
      icon: FaPython,
      category: "Programming",
      students: 380,
      rating: 4.9,
      color: "from-green-500 to-green-600"
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Deep dive into modern JavaScript concepts and advanced programming techniques.",
      icon: FaJs,
      category: "Programming",
      students: 320,
      rating: 4.7,
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const handleViewCourse = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start with our most popular courses designed by industry experts
          </p>
        </motion.div>

        {/* Featured Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Course Header */}
              <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">
                    <course.icon />
                  </div>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                    {course.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-blue-100 text-sm">{course.description}</p>
              </div>

              {/* Course Stats */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-sm font-medium text-gray-700">
                        {course.rating}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {course.students} students
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  onClick={() => handleViewCourse(course.id)}
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Explore Course
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Courses Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="secondary"
            onClick={() => document.getElementById('available-courses')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View All Courses
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedCourses; 