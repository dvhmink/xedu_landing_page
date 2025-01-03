import axios from 'axios';
import { imageURL } from './url';
import { RecruitForm } from '../Redux/type';

export function getAllJobWeb(skip: number = 0, limit: number = 10) {
  return axios.get(`/home/jobs`, { params: { skip, limit } });
}

export function getSingleJob(id: string) {
  return axios.get(`/home/job`, { params: { id } });
}

export function uploadImageToCloud(image: File) {
  const formData = new FormData();
  formData.append('image', image);
  return axios.post(imageURL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

export function deleteCloudImage(name: string) {
  return axios.delete(imageURL, { params: { name } });
}

export function createJob(formData: RecruitForm) {
  return axios.post(`/home/job`, formData);
}
