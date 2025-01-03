import axios from 'axios';
import { BASE_URL } from '.';

export function sendStatistics(from: string, domain: string) {
  return axios.post(`${BASE_URL}/v3/client-app/stat`, {
    from,
    domain
  });
}
