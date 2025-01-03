import { useEffect } from 'react';
import { sendStatistics } from '../../API/statistics';
import { useSearchParams } from 'react-router-dom';

type Props = {
  url: string;
};

export default function Redirect({ url }: Props) {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get('fbclid')) {
      sendStatistics('facebook', window.location.href).finally(() => {
        window.location.href = url;
      });
    } else {
      window.location.href = url;
    }
  }, [searchParams, url]);
  return <></>;
}
