// src/pages/DietPlan.js
import React, { useState } from 'react';
import '../styles/DietPlan.css';

const DietPlan = () => {
  const [goal, setGoal] = useState('');

  // Sample diet plans based on fitness goals
  const dietPlans = {
    'Weight Loss': [
      { meal: 'Breakfast', plan: 'Oatmeal with fruits and a boiled egg' },
      { meal: 'Mid-Morning Snack', plan: 'Greek yogurt with berries' },
      { meal: 'Lunch', plan: 'Grilled chicken salad with mixed greens' },
      { meal: 'Afternoon Snack', plan: 'Apple slices with peanut butter' },
      { meal: 'Dinner', plan: 'Baked salmon with steamed vegetables' },
    ],
    'Muscle Gain': [
      { meal: 'Breakfast', plan: 'Scrambled eggs with whole-wheat toast' },
      { meal: 'Mid-Morning Snack', plan: 'Protein shake with a banana' },
      { meal: 'Lunch', plan: 'Turkey sandwich with avocado and spinach' },
      { meal: 'Afternoon Snack', plan: 'Almonds and a protein bar' },
      { meal: 'Dinner', plan: 'Steak with quinoa and roasted broccoli' },
    ],
    'Maintenance': [
      { meal: 'Breakfast', plan: 'Smoothie with spinach, banana, and protein powder' },
      { meal: 'Mid-Morning Snack', plan: 'Cottage cheese with pineapple' },
      { meal: 'Lunch', plan: 'Brown rice bowl with grilled tofu and veggies' },
      { meal: 'Afternoon Snack', plan: 'Hummus with carrot sticks' },
      { meal: 'Dinner', plan: 'Chicken stir-fry with bell peppers and mushrooms' },
    ],
  };

  // Get the diet plan based on the selected goal
  const selectedDietPlan = dietPlans[goal] || [];

  return (
    <div className="diet-plan">
      <h2>Diet Plan</h2>

      {/* Dropdown to select fitness goal */}
      <select value={goal} onChange={(e) => setGoal(e.target.value)}>
        <option value="">Select Your Goal</option>
        <option value="Weight Loss">Weight Loss</option>
        <option value="Muscle Gain">Muscle Gain</option>
        <option value="Maintenance">Maintenance</option>
      </select>

      {/* Display the selected diet plan */}
      {selectedDietPlan.length > 0 ? (
        <ul className="diet-list">
          {selectedDietPlan.map((item, index) => (
            <li key={index}>
              <strong>{item.meal}:</strong> {item.plan}
            </li>
          ))}
        </ul>
      ) : (
        <p>Please select a goal to view the diet plan.</p>
      )}
    </div>
  );
};

export default DietPlan;
