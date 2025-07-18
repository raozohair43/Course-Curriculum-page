import React from "react";
import { FaHeart, FaRegHeart, FaUserGraduate } from "react-icons/fa";

const Card = ({ title, description, icon, category, tags, isEnrolled, isFavorite, progressPercentage, onEnroll, onFavorite, children, className = "" }) => {
  // Color schemes for different course types
  const getColorScheme = (category) => {
    const schemes = {
      "Frontend": {
        gradient: "from-blue-500 to-cyan-500",
        text: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200"
      },
      "Backend": {
        gradient: "from-purple-500 to-pink-500",
        text: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200"
      },
      "Programming Language": {
        gradient: "from-green-500 to-emerald-500",
        text: "text-green-600",
        bg: "bg-green-50",
        border: "border-green-200"
      },
      "Data Science": {
        gradient: "from-orange-500 to-red-500",
        text: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200"
      }
    };
    return schemes[category] || schemes["Programming Language"];
  };

  const colorScheme = getColorScheme(category);

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border ${colorScheme.border} ${className}`} role="article" aria-label={`Course: ${title}`}>
      {/* Course Header with Gradient */}
      <div className={`bg-gradient-to-r ${colorScheme.gradient} p-6 text-white relative overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-6 translate-y-6"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="text-4xl text-white">
              {React.createElement(icon)}
            </div>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-white border-opacity-30">
              {category}
            </span>
          </div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-white text-opacity-90 text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Course tags">
            {tags.map((tag) => (
              <span key={tag} className={`inline-block ${colorScheme.bg} ${colorScheme.text} text-xs px-3 py-1 rounded-full font-medium border ${colorScheme.border}`} role="listitem">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Progress Bar */}
        {progressPercentage !== undefined && (
          <div className="mb-4" role="progressbar" aria-valuenow={progressPercentage} aria-valuemin="0" aria-valuemax="100" aria-label={`Course progress: ${progressPercentage}%`}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-500 font-medium">Progress</span>
              <span className={`text-xs font-bold ${colorScheme.text}`}>{progressPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className={`bg-gradient-to-r ${colorScheme.gradient} h-2 rounded-full transition-all duration-500 ease-out`}
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        )}
        
        {/* Status badges */}
        <div className="flex gap-2 mb-4" aria-hidden="true">
          {isEnrolled && (
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs flex items-center gap-1 border border-green-200">
              <FaUserGraduate />
              Enrolled
            </div>
          )}
          {isFavorite && (
            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs flex items-center gap-1 border border-red-200">
              <FaHeart />
              Favorited
            </div>
          )}
        </div>
        
        {/* Quick action buttons */}
        {(onEnroll || onFavorite) && (
          <div className="flex gap-2 mb-4" role="group" aria-label="Course actions">
            {onEnroll && (
              <button
                onClick={onEnroll}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 min-h-[32px] ${
                  isEnrolled 
                    ? 'bg-green-100 text-green-700 hover:bg-green-200 border border-green-200' 
                    : `${colorScheme.bg} ${colorScheme.text} hover:bg-opacity-80 border ${colorScheme.border}`
                }`}
                aria-pressed={isEnrolled}
                aria-label={`${isEnrolled ? 'Unenroll from' : 'Enroll in'} ${title}`}
              >
                <FaUserGraduate aria-hidden="true" />
                {isEnrolled ? 'Enrolled' : 'Enroll'}
              </button>
            )}
            {onFavorite && (
              <button
                onClick={onFavorite}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 min-h-[32px] ${
                  isFavorite 
                    ? 'bg-red-100 text-red-700 hover:bg-red-200 border border-red-200' 
                    : `${colorScheme.bg} ${colorScheme.text} hover:bg-opacity-80 border ${colorScheme.border}`
                }`}
                aria-pressed={isFavorite}
                aria-label={`${isFavorite ? 'Remove from favorites' : 'Add to favorites'}: ${title}`}
              >
                {isFavorite ? <FaHeart aria-hidden="true" /> : <FaRegHeart aria-hidden="true" />}
                {isFavorite ? 'Favorited' : 'Favorite'}
              </button>
            )}
          </div>
        )}
        
        {/* Action Button */}
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card; 