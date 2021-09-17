 import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=160fac8c765ce6db7dec62d60a484dc7';
// Get Popular Movies
export const getPopularMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
  return resp.data.results;
};

// Get Upcoming Movies
export const getUpcomingMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
  return resp.data.results;
};

// Get Popular TV
export const getPopularTv = async () => {
  const resp = await axios.get(`${apiUrl}/tv/popular?${apiKey}`);
  return resp.data.results;
};

export const getFamilyMovies = async () => {
    const resp = await axios.get(`${apiUrl}/discover/movie?${apiKey}&with_genres=10751`);
    return resp.data.results;
  };

  export const getDocumentaryMovies = async () => {
    const resp = await axios.get(`${apiUrl}/discover/movie?${apiKey}&with_genres=99`);
    return resp.data.results;
  };

  export const getActionMovies = async () => {
    const resp = await axios.get(`${apiUrl}/discover/movie?${apiKey}&with_genres=28`);
    return resp.data.results;
  };

  export const getAnimationMovies = async () => {
    const resp = await axios.get(`${apiUrl}/discover/movie?${apiKey}&with_genres=16`);
    return resp.data.results;
  };

  export const getHistoryMovies = async () => {
    const resp = await axios.get(`${apiUrl}/discover/movie?${apiKey}&with_genres=36 `);
    return resp.data.results;
  };

  export const getAdventure = async () => {
    const resp = await axios.get(`${apiUrl}/discover/movie?${apiKey}&with_genres=12`);
    return resp.data.results;
  };

  export const getComedy = async () => {
    const resp = await axios.get(`${apiUrl}/discover/movie?${apiKey}&with_genres=35`);
    return resp.data.results;

  };

  export const getCrime = async () => {
      const resp = await axios.get(`${apiUrl}/discover/movie?${apiKey}&with_genres=80`);
      return resp.data.results;
  };


  