import axios from 'axios';
import { BASE_URL } from '.';

export function loadSidebar() {
  return axios.get(`${BASE_URL}/v3/client-app/public/instruction`);
}

export function loadDetail(routeName: string) {
  return axios.get(`${BASE_URL}/v3/client-app/public/instruction`, { params: { routeName } });
}
