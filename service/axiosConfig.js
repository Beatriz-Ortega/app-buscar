
import axios from 'axios';

const instance = axios.create({
  baseURL: `https://api.mercadolibre.com/sites/MLA/`, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
    get: axios.get,
  };


