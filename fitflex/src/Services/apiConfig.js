// src/services/apiConfig.js

import axios from 'axios';

export const exerciseApi = axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_EXERCISE_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
});
