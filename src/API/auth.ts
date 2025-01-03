import axios from 'axios';
import { logoutURL } from './url';
import { AUTH_DOMAIN } from '.';

export function requestUser() {
  return axios.get(`${AUTH_DOMAIN}/v1/verify/my-profile`);
}

export async function requestLogout() {
  const res = await axios.get(logoutURL, { params: { domain: `.${window.location.hostname}` } });
  return res;
}
