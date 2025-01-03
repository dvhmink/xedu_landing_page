import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { sendStatistics } from '../API/statistics';

export default function useStats() {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get('fbclid')) {
      sendStatistics('facebook', window.location.href);
    }
  }, [searchParams]);
}
