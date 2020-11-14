import axios from 'axios';
import { APP_URL } from '../types/enums';

export default axios.create({
  baseURL: APP_URL.base,
});
