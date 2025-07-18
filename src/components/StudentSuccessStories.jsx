import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaTrophy, FaStar, FaGraduationCap, FaCode, FaRocket } from "react-icons/fa";

const StudentSuccessStories = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Frontend Developer",
      company: "TechCorp",
      avatar: "SJ",
      story: "The React course completely transformed my career. I went from knowing nothing to landing my dream job in just 6 months!",
      course: "React Fundamentals",
      rating: 5,
      achievement: "Course Completed",
      badge: FaGraduationCap,
      badgeColor: "text-blue-600"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Data Scientist",
      company: "DataFlow Inc",
      avatar: "MC",
      story: "Python programming opened so many doors for me. The practical projects helped me build a strong portfolio that impressed employers.",
      course: "Python Programming",
      rating: 5,
      achievement: "Advanced Level",
      badge: FaCode,
      badgeColor: "text-green-600"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Full Stack Developer",
      company: "StartupXYZ",
      avatar: "ER",
      story: "Started with JavaScript basics and now I'm building complete web applications. The learning path was perfectly structured!",
      course: "Advanced JavaScript",
      rating: 5,
      achievement: "Project Master",
      badge: FaRocket,
      badgeColor: "text-purple-600"
    }
  ];

  const achievements = [
    { icon: FaTrophy, label: "10,000+ Students", value: "Enrolled" },
    { icon: FaStar, label: "4.8/5 Rating", value: "Average" },
    { icon: FaGraduationCap, label: "85% Completion", value: "Rate" },
    { icon: FaRocket, label: "500+ Projects", value: "Completed" }
  ];

  return (
    <div className="py-16 px-4 bg-white">
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
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our courses have helped students achieve their career goals
          </p>
        </motion.div>

        {/* Achievement Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl text-blue-600 mb-3">
                <achievement.icon />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {achievement.label}
              </div>
              <div className="text-sm text-gray-600">
                {achievement.value}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="text-blue-500 text-2xl mb-4">
                <FaQuoteLeft />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.story}"
              </p>

              {/* Student Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>

              {/* Course and Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-600">
                  Course: <span className="font-medium text-gray-900">{testimonial.course}</span>
                </div>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="flex items-center justify-center p-3 bg-gray-50 rounded-lg">
                <div className={`text-lg mr-2 ${testimonial.badgeColor}`}>
                  <testimonial.badge />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {testimonial.achievement}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Success Story?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our expert-led courses
            </p>
            <button
              onClick={() => document.getElementById('available-courses')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Explore Courses Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudentSuccessStories; 