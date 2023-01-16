
import axios from 'axios';

const search = (query) =>
  axios.get(`https://api.api-ninjas.com/v1/quotes?category=${query}',{headers:{"X-Api-Key":"yCMvFpxTzoD1YpyLGRHvfg==uQKwGLSO5PxwmmxN`);

export default search;