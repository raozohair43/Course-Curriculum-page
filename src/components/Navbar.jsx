import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaUserPlus } from "react-icons/fa";

const handleNotImplemented = (e) => {
  e.preventDefault();
  alert("Not Implemented");
};

const Navbar = () => (
  <nav className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-white flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            CourseCurriculum
          </span>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <motion.a 
            href="#available-courses" 
            className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Courses
          </motion.a>
          <motion.a 
            href="#about" 
            className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNotImplemented}
          >
            About
          </motion.a>
          <motion.a 
            href="#contact" 
            className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNotImplemented}
          >
            Contact
          </motion.a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          {/* Sign In Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 px-4 py-2 text-white/90 hover:text-white transition-colors duration-300 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNotImplemented}
          >
            <FaUser className="text-sm" />
            <span className="hidden sm:inline">Sign In</span>
          </motion.button>

          {/* Register Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 text-white font-medium border border-white/30"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNotImplemented}
          >
            <FaUserPlus className="text-sm" />
            <span className="hidden sm:inline">Register</span>
          </motion.button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar; 