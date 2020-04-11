import axios from 'axios';
import { config } from '../config';

class Http {
  constructor() {
    this.axios = axios.create({
      ...config
    });
  }

  async get(path) {
    return await this.axios.get(path);
  }
}

export default new Http();
