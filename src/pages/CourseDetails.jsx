import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaHeart, FaRegHeart, FaUserGraduate } from "react-icons/fa";
import Button from "../components/Button";
import CurriculumDetails from "../features/CurriculumDetails";
import { courses } from "../constants/courses";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const course = courses.find(c => c.id === parseInt(id));

  useEffect(() => {
    // Load enrollment and favorite status from localStorage
    const enrolled = localStorage.getItem(`enrolled_${id}`) === 'true';
    const favorite = localStorage.getItem(`favorite_${id}`) === 'true';
    setIsEnrolled(enrolled);
    setIsFavorite(favorite);
  }, [id]);

  const handleEnroll = () => {
    setIsEnrolled(!isEnrolled);
    localStorage.setItem(`enrolled_${id}`, (!isEnrolled).toString());
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    localStorage.setItem(`favorite_${id}`, (!isFavorite).toString());
  };

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold mb-4">Course not found</h1>
        <Button onClick={() => navigate("/")}>Back to Courses</Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="secondary" onClick={() => navigate("/")}>
            <FaArrowLeft className="mr-2" />
            Back to Courses
          </Button>
        </div>

        {/* Course Header */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="text-4xl text-blue-500">
                {React.createElement(course.icon)}
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
                <p className="text-gray-600 text-lg mb-3">{course.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded">
                    {course.category}
                  </span>
                  {course.tags.map((tag) => (
                    <span key={tag} className="inline-block bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={isEnrolled ? "secondary" : "primary"}
                onClick={handleEnroll}
                className="flex items-center gap-2"
              >
                <FaUserGraduate />
                {isEnrolled ? "Enrolled" : "Enroll"}
              </Button>
              <Button
                variant="secondary"
                onClick={handleFavorite}
                className="flex items-center gap-2"
              >
                {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                {isFavorite ? "Favorited" : "Favorite"}
              </Button>
            </div>
          </div>
        </div>

        {/* Curriculum */}
        <CurriculumDetails
          courseId={parseInt(id)}
          courseTitle={course.title}
          onBack={() => navigate("/")}
        />
      </motion.div>
    </div>
  );
};

export default CourseDetails; 