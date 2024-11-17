// src/Pages/ExerciseLibrary.js
import React, { useEffect, useState } from 'react';
import { exerciseApi } from '../Services/apiConfig';

const ExerciseLibrary = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await exerciseApi.get('/exercises');
        setExercises(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exercises:', error);
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  return (
    <div className="exercise-library">
      <h2>Exercise Library</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {exercises.slice(0, 10).map((exercise) => (
            <li key={exercise.id}>
              <h3>{exercise.name}</h3>
              <p>Target: {exercise.target}</p>
              <p>Equipment: {exercise.equipment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExerciseLibrary;
