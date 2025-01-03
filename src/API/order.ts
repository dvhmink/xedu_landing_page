import axios from 'axios';
import { Location } from '../Redux/type';

export async function requestCostEstimation(
  weight: number,
  origin: Location,
  destination: Location,
  serviceType: '0' | '1' | '2' = '0'
) {
  return await axios.post(
    `${import.meta.env.VITE_BACKEND_SERVER_URL}/v3/client-app/public/cost-estimate`,
    {
      weight,
      origin,
      destination,
      serviceType
    }
  );
}
