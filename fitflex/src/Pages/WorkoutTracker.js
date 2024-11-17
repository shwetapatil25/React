// src/pages/WorkoutTracker.js
import React, { useState } from 'react';
import '../styles/WorkoutTracker.css';

const WorkoutTracker = () => {
  const [workouts, setWorkouts] = useState([]);
  const [bodyType, setBodyType] = useState('');
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');

  // List of body types
  const bodyTypes = ['Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Abs'];

  // Hardcoded exercise list
  const exerciseList = {
    Chest: ['Bench Press', 'Push-Ups', 'Chest Fly', 'Incline Bench Press'],
    Back: ['Pull-Ups', 'Lat Pulldown', 'Bent-Over Row', 'Deadlift'],
    Legs: ['Squats', 'Lunges', 'Leg Press', 'Calf Raises'],
    Shoulders: ['Shoulder Press', 'Lateral Raises', 'Front Raises', 'Shrugs'],
    Arms: ['Bicep Curls', 'Tricep Dips', 'Hammer Curls', 'Tricep Kickback'],
    Abs: ['Crunches', 'Leg Raises', 'Plank', 'Russian Twists'],
  };

  // Filter exercises based on selected body type
  const filteredExercises = bodyType ? exerciseList[bodyType] || [] : [];

  // Add a new workout entry
  const addWorkout = () => {
    if (exercise && sets && reps) {
      const newWorkout = { exercise, sets, reps };
      setWorkouts([...workouts, newWorkout]);
      setExercise('');
      setSets('');
      setReps('');
    } else {
      alert('Please fill out all fields.');
    }
  };

  // Delete a workout entry
  const deleteWorkout = (index) => {
    setWorkouts(workouts.filter((_, i) => i !== index));
  };

  return (
    <div className="workout-tracker">
      <i className="fa-solid fa-dumbbell workout-icon"></i>
      <h2>Workout Tracker</h2>

      <div className="workout-form">
        {/* Body Type Dropdown */}
        <select value={bodyType} onChange={(e) => setBodyType(e.target.value)}>
          <option value="">Select Body Type</option>
          {bodyTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        {/* Exercise Dropdown */}
        <select value={exercise} onChange={(e) => setExercise(e.target.value)} disabled={!bodyType}>
          <option value="">Select Exercise</option>
          {filteredExercises.map((ex, index) => (
            <option key={index} value={ex}>{ex}</option>
          ))}
        </select>

        {/* Input Fields for Sets and Reps */}
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <button onClick={addWorkout}>Add Workout</button>
      </div>

      {/* Workout List */}
      <ul className="workout-list">
        {workouts.map((workout, index) => (
          <li key={index}>
            <span>{workout.exercise}: {workout.sets} sets of {workout.reps} reps</span>
            <button onClick={() => deleteWorkout(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutTracker;
