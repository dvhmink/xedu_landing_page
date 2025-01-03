import axios from 'axios';

export function getAllBlogeWeb(skip: string = '0', limit: string = '10') {
  return axios.get(`/home/blogs`, { params: { skip, limit } });
}

export function getSingleBlog(routeName: string) {
  return axios.get(`/home/blog`, { params: { routeName } });
}
