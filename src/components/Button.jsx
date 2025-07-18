import React from "react";
import { FiLoader } from "react-icons/fi";

const base =
  "inline-flex items-center justify-center px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]";
const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-500 focus:bg-blue-700",
  secondary:
    "bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400 focus:ring-gray-400 focus:bg-gray-300",
  gradient:
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg hover:from-pink-500 hover:to-indigo-500 hover:shadow-xl focus:ring-pink-400 focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95 cursor-pointer",
  modern:
    "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md hover:from-purple-500 hover:to-blue-500 hover:shadow-lg focus:ring-2 focus:ring-blue-300 focus:outline-none rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer",
};

const Button = ({
  children,
  variant = "primary",
  loading = false,
  disabled = false,
  ...props
}) => (
  <button
    className={`${base} ${variants[variant]} ${loading ? "cursor-wait" : ""}`}
    disabled={disabled || loading}
    aria-disabled={disabled || loading}
    aria-busy={loading}
    {...props}
  >
    {loading && <FiLoader className="animate-spin mr-2" aria-hidden="true" />}
    {children}
  </button>
);

export default Button; 