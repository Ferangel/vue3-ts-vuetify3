import axios from 'axios';

const url = 'http://localhost:8081';

const httpClient = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default httpClient;
