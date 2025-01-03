import axios from 'axios';

export function getAllPageWeb() {
  return axios.get(`/home/pages`);
}

export function getSinglePage(routeName: string) {
  return axios.get(`/home/page`, { params: { routeName } });
}
