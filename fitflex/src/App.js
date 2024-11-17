// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import WorkoutTracker from './Pages/WorkoutTracker';
import DietPlan from './Pages/DietPlan';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workout-tracker" element={<WorkoutTracker />} />
      <Route path="/diet-plan" element={<DietPlan />} />
    </Routes>
  </Router>
);

export default App;
