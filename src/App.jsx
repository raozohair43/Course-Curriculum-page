import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CourseDetails from './pages/CourseDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/course/:id"
          element={
            <Layout>
              <CourseDetails />
            </Layout>
          }
        />
        {/* Add more routes here as needed, wrapped in <Layout> */}
      </Routes>
    </Router>
  );
}

export default App;
