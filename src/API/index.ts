import { getAllBlogeWeb, getSingleBlog } from './blogs';
import { getAllJobWeb, getSingleJob, uploadImageToCloud, deleteCloudImage, createJob } from './job';

import { requestCostEstimation } from './order';
import { getAllPageWeb, getSinglePage } from './pages';

import axios from 'axios';
axios.defaults.withCredentials = true;

export const BASE_URL = import.meta.env.VITE_BACKEND_SERVER_URL;

axios.defaults.baseURL = `${BASE_URL}/v2`;

const AUTH_DOMAIN = import.meta.env.VITE_AUTH_SERVER_URL;

export {
  getAllBlogeWeb,
  getSingleBlog,
  getAllJobWeb,
  getSingleJob,
  uploadImageToCloud,
  deleteCloudImage,
  createJob,
  requestCostEstimation,
  getAllPageWeb,
  getSinglePage,
  AUTH_DOMAIN
};
