import axios from 'axios';

export default axios.create({
  baseURL: 'http://35.247.151.53:4000/api',
  timeout: 10000,
});
